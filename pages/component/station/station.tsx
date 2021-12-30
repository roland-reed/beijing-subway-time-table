import React from 'react';
import styles from './station.module.css';
import { Line, Station as StationProps } from '../../shared';

export function Station(props: {
  station: StationProps;
  line: Line;
  index: number;
  reportWidth: (width: number, index: number) => void;
  setStation: (index: number) => void;
}): React.ReactElement {
  const ref = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    const height = ref.current?.getBoundingClientRect().height ?? 0;

    if (height) {
      props.reportWidth(height, props.index);
    }
  }, []);

  return (
    <div
      className={styles.station}
      ref={ref}
      onClick={() => props.setStation(props.index)}
      style={{ backgroundColor: props.line.color }}
    >
      {props.station.name}
      {props.station.transfers?.map(transfer => <span key={transfer}>{transfer}</span>)}
    </div>
  );
}
