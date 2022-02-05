import React from 'react';
import { Line as LineProps, smoothScroll, narrowRange, Day } from '../../shared';
import { Station } from '../station';
import { ScrollContainer } from '../scroll-container';
import { TimeList } from '../time-list';
import styles from './line.module.css';
import { useLineUp } from '../../hook';
import * as icon from '../icon';

export function Line(props: {
  day: Day;
  setDay: (day: Day) => void;
  line: LineProps;
  setLine: (line: string) => void;
  selected: number;
  setSelected: (station: number) => void;
}): React.ReactElement {
  const { selected, setSelected } = props;
  const ref = React.createRef<HTMLDivElement>();
  const [paddingTop, setPaddingTop] = React.useState(0);
  const lineHeightList = React.useRef<number[]>([]);
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);
  const narrow = React.useCallback(
    (value) => narrowRange(0, props.line.stations.length - 1)(value),
    [props.line.stations.length],
  );
  const { onScroll, onTouchEnd, onTouchStart } = useLineUp({
    ref,
    lineUp: (div) => {
      setSelected(narrow(Math.ceil((div.scrollTop - 20) / 40)));
    },
  });

  const reportWidth = React.useCallback(function reportWidth(width: number, index: number) {
    lineHeightList.current[index] = width;
  }, []);

  function wrappedSetSelect(index: number) {
    setSelected(index);
    ref.current && smoothScroll(ref.current, 300, 0, index * 40);
  }

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
    function onResize() {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, []);

  return (
    <div className={styles['line-wrapper']} style={{ height: window.innerHeight - 180 }}>
      <TimeList
        terminus={selected === props.line.stations.length - 1}
        day={props.day}
        direction="up"
        line={props.line}
        index={selected}
      />
      <div className={styles.line} onScroll={(e) => console.log((e.target as HTMLDivElement).scrollTop)}>
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
            paddingRight: 8,
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
              setStation={wrappedSetSelect}
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
      <TimeList terminus={selected === 0} day={props.day} direction="down" line={props.line} index={selected} />
    </div>
  );
}
