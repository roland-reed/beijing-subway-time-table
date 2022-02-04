import { Day } from './departure-time';

export const DAY_MAP: Record<Day, string> = {
  monday: '周一',
  tuesday: '周二',
  wednesday: '周三',
  thursday: '周四',
  friday: '周五',
  saturday: '周六',
  sunday: '周日',
};

export const DAY: Day[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

export function getDay(date = new Date()) {
  return DAY[date.getDay()];
}
