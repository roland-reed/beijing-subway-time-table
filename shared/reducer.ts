import { Day } from '.';

interface State {
  day: Day;
  line: string;
  station: number;
}

interface Action {
  type: 'update';
  payload: Partial<State>;
}

export function reducer(state: State, action: Action) {
  return {
    ...state,
    ...action.payload,
  };
}
