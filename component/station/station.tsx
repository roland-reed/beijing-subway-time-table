import React from 'react';
import styles from './station.module.css';
import { Line, State, Station as StationProps } from '../../shared';
import { lineMap } from '../../data';

const STATE_MAP: Record<State, string> = {
  building: '建设中',
  closed: '已关闭',
  open: '正常营业',
  paused: '暂缓开通',
};

export function Station(props: {
  station: StationProps;
  line: Line;
  index: number;
  reportWidth: (width: number, index: number) => void;
  setStation: (index: number) => void;
  setLine: (line: string) => void;
}): React.ReactElement {
  const ref = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    const height = ref.current?.getBoundingClientRect().height ?? 0;

    if (height) {
      props.reportWidth(height, props.index);
    }
  }, []);

  return (
    <div className={styles.station} ref={ref} onClick={() => props.setStation(props.index)}>
      <div className={styles.name} style={{ backgroundColor: props.line.color }}>
        <div style={{color: props.line.fontColorReverse ? '#424242' : undefined}}>{props.station.name}</div>
        {props.station.state && <div className={styles.state}>{STATE_MAP[props.station.state]}</div>}
      </div>
      <div className={styles.transfers} style={{ backgroundColor: props.line.color }}>
        {props.station.transfers?.map(transfer => (
          <div
            className={styles.transfer}
            style={{ backgroundColor: lineMap[transfer as keyof typeof lineMap].color }}
            key={transfer}
            onClick={e => {
              e.stopPropagation();
              props.setLine(transfer);
            }}
          >
            {lineMap[transfer as keyof typeof lineMap].shortName}
          </div>
        ))}
      </div>
    </div>
  );
}
