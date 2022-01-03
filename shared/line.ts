import { Station } from './station';

export interface Line {
  code: string;
  name: string;
  shortName: string;
  color: string;
  fontColorReverse?: boolean;
  stations: Station[];
}
