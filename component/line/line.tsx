import React from 'react';
import { Line as LineProps, smoothScroll, narrowRange } from '../../shared';
import { Station } from '../station';
import { ScrollContainer } from '../scroll-container';
import styles from './line.module.css';
import { useLineUp } from '../../hook';
import ArrowLeft from './arrow-left.svg';
import ArrowRight from './arrow-right.svg';

export function Line(props: { line: LineProps; setLine: (line: string) => void }): React.ReactElement {
  const ref = React.createRef<HTMLDivElement>();
  const [paddingTop, setPaddingTop] = React.useState(0);
  const [selected, setSelected] = React.useState(0);
  const lineHeightList = React.useRef<number[]>([]);
  const narrow = React.useCallback(narrowRange(0, props.line.stations.length - 1), [props.line.stations.length - 1, ref]);
  const { onScroll, onTouchEnd, onTouchStart } = useLineUp({
    ref,
    lineUp: div => {
      setSelected(narrow(Math.ceil((div.scrollTop - 20) / 40)));
      smoothScroll(div, 300, 0, narrow(Math.ceil((div.scrollTop - 20) / 40)) * 40);
    },
  });

  function reportWidth(width: number, index: number) {
    lineHeightList.current[index] = width;
  }

  function wrappedSetSelected(index: number) {
    setSelected(index);
    ref.current && smoothScroll(ref.current, 300, 0, index * 40);
  }

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
    <>
      <div className={styles.line} onScroll={e => console.log((e.target as HTMLDivElement).scrollTop)}>
        <div className={styles.indicator}>
          <ArrowRight className={styles['indicator-svg']} fill={props.line.color} />
        </div>
        <ScrollContainer
          style={{
            paddingTop,
            paddingBottom: paddingTop,
          }}
          ref={ref}
          className={styles.stations}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchEnd}
          onScroll={onScroll}
        >
          {props.line.stations.map((station, index) => (
            <Station
              key={index}
              setStation={() => wrappedSetSelected(index)}
              line={props.line}
              index={index}
              reportWidth={reportWidth}
              station={station}
              setLine={props.setLine}
            />
          ))}
        </ScrollContainer>
        <div className={styles.indicator}>
          <ArrowLeft className={styles['indicator-svg']} fill={props.line.color} />
        </div>
      </div>
      <div>selected: {selected}</div>
    </>
  );
}
