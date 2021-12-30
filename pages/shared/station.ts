export type State = 'open' | 'closed' | 'building';

export interface Station {
  name: string;
  transfers?: string[];
  state?: State;
}
