import React from 'react';
import { Line } from '../line';
import { LineSelector } from '../line-selector';
import { lineMap } from '../../data';
import { Day, Line as LineProps } from '../../shared';

interface AppProps {
  lineCode: string;
  setLine: (code: string) => void;
  day: Day;
  setDay: (day: Day) => void;
}

export const App: React.FC<AppProps> = (props) => {
  const { lineCode: line, setLine } = props;

  React.useEffect(() => {
    props.setLine(line);
  }, [line]);

  return (
    <div>
      <LineSelector setLine={setLine} line={lineMap[line as keyof typeof lineMap]} />
      {<Line day={props.day} setDay={props.setDay} setLine={setLine} line={lineMap[line as keyof typeof lineMap]} />}
    </div>
  );
};
