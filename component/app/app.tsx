import React from 'react';
import { Line } from '../line';
import { LineSelector } from '../line-selector';
import { lineMap } from '../../data';
import { Day, Line as LineProps } from '../../shared';

interface AppProps {
  setLine: (color: LineProps) => void;
  day: Day;
  setDay: (day: Day) => void;
}

export const App: React.FC<AppProps> = (props) => {
  const [line, setLine] = React.useState('M1');

  React.useEffect(() => {
    props.setLine(lineMap[line as keyof typeof lineMap])
  }, [line])

  return (
    <div>
      <LineSelector setLine={setLine} line={lineMap[line as keyof typeof lineMap]} />
      {<Line day={props.day} setDay={props.setDay} setLine={setLine} line={lineMap[line as keyof typeof lineMap]} />}
    </div>
  );
};
