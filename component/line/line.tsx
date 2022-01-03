import React from 'react';
import { Line as LineProps, smoothScroll, narrowRange, Day, DAY } from '../../shared';
import { Station } from '../station';
import { ScrollContainer } from '../scroll-container';
import { TimeList } from '../time-list';
import styles from './line.module.css';
import { useLineUp } from '../../hook';
import * as icon from '../icon';

function getStateRestoreKey(code: string) {
  return `STATION_RESTORE_FOR_${code}`;
}

function getRestoreStation(code: string) {
  try {
    const state = JSON.parse(localStorage.getItem(getStateRestoreKey(code)) ?? '{}')

    if (state.selected) {
      return state.selected;
    }
  } catch (e) {
    return 0;
  }
}

export function Line(props: { day: Day, setDay: (day: Day) => void; line: LineProps; setLine: (line: string) => void }): React.ReactElement {
  const ref = React.createRef<HTMLDivElement>();
  // const [day, setDay] = React.useState(DAY[new Date().getDay()]);
  const [paddingTop, setPaddingTop] = React.useState(0);
  const [selected, setSelected] = React.useState(0);
  const lineHeightList = React.useRef<number[]>([]);
  const narrow = React.useCallback(narrowRange(0, props.line.stations.length - 1), [
    props.line.stations.length - 1,
    ref,
  ]);
  const { onScroll, onTouchEnd, onTouchStart } = useLineUp({
    ref,
    lineUp: div => {
      setSelected(narrow(Math.ceil((div.scrollTop - 20) / 40)));
      // smoothScroll(div, 300, 0, narrow(Math.ceil((div.scrollTop - 20) / 40)) * 40);
    },
  });

  function reportWidth(width: number, index: number) {
    lineHeightList.current[index] = width;
  }

  function wrappedSetSelect(index: number) {
    setSelected(index);
    ref.current && smoothScroll(ref.current, 300, 0, index * 40);
  }

  // React.useEffect(() => {
  //   localStorage.setItem(getStateRestoreKey(props.line.code), JSON.stringify({ selected }))
  // }, [props.line.code, selected]);

  React.useEffect(() => {
    ref.current && smoothScroll(ref.current, 300, 0, selected * 40);
  }, [ref, selected]);

  React.useEffect(() => {
    const wrapperHeight = ref.current?.clientHeight ?? 0;

    if (wrapperHeight) {
      const paddingTop = wrapperHeight / 2 - (lineHeightList.current[0] as number) / 2;

      setPaddingTop(paddingTop);
    }
  }, [ref]);

  React.useEffect(() => {
    setSelected(0);
    ref.current && smoothScroll(ref.current, 300, 0, 0);
  }, [props.line.code]);

  return (
    <div className={styles['line-wrapper']}>
      <TimeList day={props.day} direction="up" line={props.line} index={selected} />
      <div className={styles.line} onScroll={e => console.log((e.target as HTMLDivElement).scrollTop)}>
        <div className={styles.indicator} style={{ color: props.line.color }}>
          <div className={styles.direction}>
            <span>&#8203;</span>
            <span>&#8203;</span>
            <span>&#8203;</span>
            <span>&#8203;</span>
            <span>&#8203;</span>
          </div>
          <icon.ArrowRight />
          <div className={styles.direction}>
            <span>运</span>
            <span>行</span>
            <span>方</span>
            <span>向</span>
            <icon.ArrowDown />
          </div>
        </div>
        <ScrollContainer
          style={{
            paddingTop,
            paddingBottom: paddingTop,
            paddingLeft: 8,
            paddingRight: 8
          }}
          ref={ref}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchEnd}
          onScroll={onScroll}
        >
          {props.line.stations.map((station, index) => (
            <Station
              key={index}
              setStation={() => wrappedSetSelect(index)}
              line={props.line}
              index={index}
              reportWidth={reportWidth}
              station={station}
              setLine={props.setLine}
            />
          ))}
        </ScrollContainer>
        <div className={styles.indicator} style={{ color: props.line.color }}>
          <div className={styles.direction}>
            <icon.ArrowUp />
            <span>运</span>
            <span>行</span>
            <span>方</span>
            <span>向</span>
          </div>
          <icon.ArrowLeft />
          <div className={styles.direction}>
            <span>&#8203;</span>
            <span>&#8203;</span>
            <span>&#8203;</span>
            <span>&#8203;</span>
            <span>&#8203;</span>
          </div>
        </div>
      </div>
      <TimeList day={props.day} direction="down" line={props.line} index={selected} />
    </div>
  );
}
