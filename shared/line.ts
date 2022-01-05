import { Station } from './station';

export interface Line {
  code: string;
  name: string;
  shortName: string;
  color: string;
  loop?: boolean;
  fontColorReverse?: boolean;
  stations: Station[];
}
