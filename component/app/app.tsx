import React from 'react';
import { Line } from '../line';
import { LineSelector } from '../line-selector';
import { lineMap } from '../../data';
import { Day } from '../../shared';

interface AppProps {
  lineCode: string;
  setLine: (code: string) => void;
  day: Day;
  setDay: (day: Day) => void;
  selected: number;
  setSelected: (station: number) => void;
}

export const App: React.FC<AppProps> = (props) => {
  const { lineCode: line, setLine } = props;

  React.useEffect(() => {
    setLine(line);
  }, [line, setLine]);

  return (
    <div>
      <LineSelector setLine={setLine} setSelected={props.setSelected} line={lineMap[line as keyof typeof lineMap]} />
      {
        <Line
          day={props.day}
          setDay={props.setDay}
          selected={props.selected}
          setSelected={props.setSelected}
          setLine={setLine}
          line={lineMap[line as keyof typeof lineMap]}
        />
      }
    </div>
  );
};
