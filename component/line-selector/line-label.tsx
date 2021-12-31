import React from 'react';
import { Line } from '../../shared';
import styles from './line-label.module.css';

interface LineLabelProps {
  line: Line;
  index: number;
  reportWidth: (width: number, index: number) => void;
  setLine(line: string): void;
}

export const LineLabel: React.FC<LineLabelProps> = ({ line, reportWidth, index, setLine }) => {
  const ref = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    reportWidth(ref.current?.clientWidth ?? 0, index);
  }, [ref, line, reportWidth, index]);

  return (
    <div
      className={styles.line}
      style={{
        backgroundColor: line.color,
      }}
      ref={ref}
      key={line.name}
      onClick={() => setLine(line.code)}
    >
      {line.name}
    </div>
  );
};
