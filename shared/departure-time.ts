export type Hour =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;
type Minute = number;

export type Day = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export type FullDeparture = Minute;

export type PartialDeparture = `${Minute}->${string}` | `${string}->${Minute}`;

export type DepartureMinute = PartialDeparture | FullDeparture;

export type DepartureTime = [Hour, DepartureMinute];

export type HourDepartureTime = {
  [hour in Hour]?: DepartureMinute[];
};

export type WeekDepartureTime = {
  [workday in Day]: HourDepartureTime;
};

export interface DepartureTimeTable {
  up?: WeekDepartureTime;
  down?: WeekDepartureTime;
}
