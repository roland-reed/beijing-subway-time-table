import fs from 'fs';

const upWeekday = `5 18 28 37 43 49 56
6 02 07 12 17 24 27 31 35 40 45 48 52 58
7 02 05 11 13 17 24 28 31 35 39 43 46 49 52 55 58
8 00 03 06 09 11 14 17 20 22 25 28 31 33 36 39 42 44 47 50 53 55 58
9 01 04 06 09 11 14 16 19 21 24 26 29 32 35 39 41 44 46 51 57
10 02 08 13 19 24 30 35 41 46 52 57
11 03 05 10
16 21 26 32 38 43 48 55
12 01 08 14 21 27 34 40 47 53
13 00 06 13 19 26 32 39 45 52 58
14 05 11 18 24 31 37 44 50 57
15 03 10 16 23 29 33 36 42 46 49 55
16 02 08 15 18 21 28 34 41 47 51 54
17 00 03 07 13 17 20 25 30 33 37 41 46 49 52 55 58
18 00 03 06 09 11 14 17 20 22 25 28 31 33 36 39 42 44 47 50 53 55 58
19 01 03 06 09 11 14 17 19 22 25 27 30 33 35 38 41 43 46 49 54
20 00 05 11 16 22 24 30 36 40 45 49 53 57
21 01 05 09 13 17 21 26 33 41 45 50 58
22 08 16 26 32 40 50 58
23 08 15 23 31`;
const downWeekday = `5 41 49 58
6 05 11 17 22 28 32 39 44 49 52 57
7 01 05 09 13 17 22 26 30 35 40 44 47 51 55 59
8 02 05 07 10 13 16 18 21 24 27 29 32 35 38 40 43 46 49 51 54 57
9 00 02 05 08 11 13 16 19 22 24 27 30 32 35 38 40 43 46 49 51 54 57
10 00 03 05 12 18 25 31 38 41 44 51 57
11 04 10 13 17 23 26 30 36 43 49 56 59
12 02 09 15 22 28 35 41 48 54
13 01 07 14 20 27 33 40 46 53 59
14 06 12 19 25 32 38 45 51 58
15 04 11 17 24 30 37 42 49 52 56
16 00 06 11 16 22 27 33 38 43 49 55
17 00 06 11 16 19 24 27 32 35 40 43 48 51 56 59
18 04 07 10 13 16 18 21 24 27 29 32 35 38 40 43 46 49 51 54 57
19 00 02 05 08 11 13 16 19 21 24 27 29 32 35 37 40 43 45 48 51 53 56 59
20 01 04 07 13 19 25 31 37 40 43 49 55
21 01 04 07 13 16 19 25 28 32 36 40 47 55
22 02 07 11 19 28 38 48 56
23 01 11 21 31 41 46 51`;
const upWeekend = `5 18 27 36 42 48 55
6 01 12 18 24 29 33 37 45 53
7 00 07 13 21 27 34 41 48 55
8 02 08 13 19 24 30 35 41 46 52 57
9 03 08 14 19 25 30 36 41 47 52 58
10 03 09 14 20 25 31 36 42 47 53 58
11 04 09 15 20 26 31 37 42 48 53 59
12 04 10 15 21 26 32 37 43 48 54 59
13 05 10 16 21 27 32 38 43 49 54
14 00 05 11 16 22 27 33 38 44 49 55
15 00 06 11 17 22 28 33 39 44 50 55
16 01 06 12 17 23 28 34 39 45 50 56
17 01 07 12 18 23 29 34 40 45 51 56
18 02 07 13 18 24 29 35 40 46 51 57
19 02 08 13 19 24 30 35 41 46 52 57
20 03 08 14 19 25 30 36 41 47 52 58
21 03 09 14 20 25 31 36 42 47 53 58
22 04 09 15 20 26 33 40 47 54
23 01 08 15 23 31`;
const downWeekend = `5 41 49 57
6 05 12 19 26 31 37 42 48 53 59
7 04 13 20 26 32 40 47 53 59
8 08 15 21 27 32 38 43 49 54
9 00 05 11 16 22 27 33 38 44 49 55
10 00 06 11 17 22 28 33 39 44 50 55
11 01 06 12 17 23 28 34 39 45 50 56
12 01 07 12 18 23 29 34 40 45 51 56
13 02 07 13 18 24 29 35 40 46 51 57
14 02 08 13 19 24 30 35 41 46 52 57
15 03 08 14 19 25 30 36 41 47 52 58
16 03 09 14 20 25 31 36 42 47 53 58
17 04 09 15 20 26 31 37 42 48 53 59
18 04 10 15 21 26 32 37 43 48 54 59
19 05 10 16 21 27 32 38 43 49 54
20 00 05 11 16 22 27 33 38 44 50 57
21 04 07 11 18 25 32 35 39 46 52 57
22 02 07 12 20 24 28 35 43 51 56
23 02 07 16 25 30 34 43 51`;

function generate(raw) {
  const lines = raw.split('\n').filter(line => line.trim().length !== 0);
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
  return JSON.stringify(table, null, 2);
}

const template = `
get departureTime() {
  const weekdayUpDeparture: HourDepartureTime = $UP_WEEKDAY$;
  const weekdayDownDeparture: HourDepartureTime = $DOWN_WEEKDAY$;
  const weekendUpDeparture: HourDepartureTime = $UP_WEEKEND$;
  const weekendDownDeparture: HourDepartureTime = $DOWN_WEEKEND$;
  const upDepartureTime: WeekDepartureTime = {
    monday: weekdayUpDeparture,
    tuesday: weekdayUpDeparture,
    wednesday: weekdayUpDeparture,
    thursday: weekdayUpDeparture,
    friday: weekdayUpDeparture,
    saturday: weekendUpDeparture,
    sunday: weekendUpDeparture,
  };
  const downDepartureTime: WeekDepartureTime = {
    monday: weekdayDownDeparture,
    tuesday: weekdayDownDeparture,
    wednesday: weekdayDownDeparture,
    thursday: weekdayDownDeparture,
    friday: weekdayDownDeparture,
    saturday: weekendDownDeparture,
    sunday: weekendDownDeparture,
  };

  return {
    up: upDepartureTime,
    down: downDepartureTime,
  };
},`

function main() {
  const upWeekdayTable = generate(upWeekday);
  const downWeekdayTable = generate(downWeekday);
  const upWeekendTable = generate(upWeekend);
  const downWeekendTable = generate(downWeekend);

  fs.writeFileSync('./temp.js', template.replace('$UP_WEEKDAY$', upWeekdayTable).replace('$DOWN_WEEKDAY$', downWeekdayTable).replace('$UP_WEEKEND$', upWeekendTable).replace('$DOWN_WEEKEND$', downWeekendTable));
}

main();
