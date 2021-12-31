export type State = 'open' | 'closed' | 'building' | 'paused';

export interface Station {
  name: string;
  transfers?: string[];
  state?: State;
}
