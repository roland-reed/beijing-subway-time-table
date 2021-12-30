import React from 'react';
import { Line } from '../line';
import { LineSelector } from '../line-selector';
import { lineMap } from '../../data';

export const App: React.FC = () => {
  const [line, setLine] = React.useState('M1');

  return (
    <div>
      <LineSelector setLine={setLine} line={lineMap[line as keyof typeof lineMap]} />
      {<Line line={lineMap[line as keyof typeof lineMap]} />}
    </div>
  );
};
