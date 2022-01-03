import fs from 'fs';

const raw = `5 01 08 15 22 29 36 43 50 57
6 04 10 17 24 30 38 45 52 59
7 06 13 20 27 34 41 48 55
8 02 09 15 22 29 36 43 50 57
9 04 11 18 25 32 39 46 53
10 00 07 14 21 28 34 41 48 55
11 02 09 16 23 30 37 44 51 58
12 05 12 19 26 33 40 47 53
13 00 07 14 21 28 35 42 49 56
14 03 10 17 24 31 38 45 52 59
15 06 12 19 26 30 35 40 47 50 56
16 01 04 10 15 22 27 32 37 42 47 52 57
17 02 07 12 17 22 27 32 36 41 46 51 56
18 01 06 11 16 21 26 31 36 43 50 53 57
19 04 07 11 18 24 31 38 45 52 59
20 06 13 20 27 34 41 48 55
21 02 09 16 23 30 37 43 50 57
22 04 11 18 25 32 39 40 54
23 03`

function generate() {
  const lines = raw.split('\n');
  const table = {};
  for (const line of lines) {
    const [hour, ...minute] = line.split(' ');
    const normalized = minute.map(m => Number(m));
    if (hour < 0 || hour > 24) {
      throw new Error(`Invalid hour: ${hour}`);
    }
    for (let i = 1; i < normalized.length; i++) {
      if (normalized[i] < normalized[i - 1]) {
        throw new Error(`Bad minute: hour: ${hour}, minute: ${normalized[i]}`);
      }
      if (normalized[i] > 60 || normalized[i] < 0) {
        throw new Error(`Bad minute: hour: ${hour}, minute: ${normalized[i]}`);
      }
    }
    table[Number(hour)] = minute.map(m => Number(m));
  }
  return table;
}

fs.writeFileSync('./temp.json', JSON.stringify(generate(), null, 2));
