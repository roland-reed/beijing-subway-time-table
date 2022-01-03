import { Day } from './departure-time';

export const DAY: Day[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

export function getDay(date = new Date()) {
  return DAY[date.getDay()];
}
