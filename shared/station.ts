import { DepartureTimeTable } from './departure-time';

export type State = 'open' | 'closed' | 'building' | 'paused';

export interface Station {
  name: string;
  transfers?: string[];
  state?: State;
  departureTime?: DepartureTimeTable;
}
