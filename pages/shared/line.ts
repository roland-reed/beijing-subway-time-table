import { Station } from './station';

export interface Line {
  code: string;
  name: string;
  color: string;
  stations: Station[];
}
