import fs from 'fs';
import timeTable from './time-table.mjs';

const [upWeekday, downWeekday, upWeekend, downWeekend] = timeTable.trim()
  .split('\n\n')
  .map(section => section.split('\n')
    .filter(line => !line.startsWith('//'))
    .join('\n')
  );

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
