import React from 'react';
import { lines } from '../../data';
import { useLineUp } from '../../hook';
import { LineLabel } from './line-label';
import styles from './line-selector.module.css';
import ArrowUp from './arrow-up.svg';
import { Line } from '../../shared';

interface LineSelectorProps {
  setLine: (code: string) => void;
  line: Line;
}

export const LineSelector: React.FC<LineSelectorProps> = ({ setLine, line }) => {
  const ref = React.createRef<HTMLDivElement>();
  const [paddingLeft, setPaddingLeft] = React.useState(0);
  const [paddingRight, setPaddingRight] = React.useState(0);
  const lineWidthList = React.useRef<number[]>([]);
  const computeOffset = (index: number) => lineWidthList.current.slice(0, index).reduce((acc, cur) => acc + cur, 0);
  const lineUp = (div: HTMLDivElement) => {
    let stripped = div.scrollLeft + lineWidthList.current[0] / 2;
    let index = 0;

    lineWidthList.current.some((width, i) => {
      stripped = stripped - width;
      if (stripped < 0) {
        index = i;
        return true;
      }
      return false;
    });

    const offset = computeOffset(index);

    ref.current?.scrollTo({
      left: offset,
      behavior: 'smooth',
    });

    setLine(lines[index].code);
  };
  const { onScroll, onTouchEnd, onTouchStart } = useLineUp({
    ref,
    lineUp,
  });

  function reportWidth(width: number, index: number) {
    lineWidthList.current[index] = width;
  }

  function wrappedSetLine(code: string) {
    const index = lines.findIndex(line => line.code === code);

    setLine(code);
    ref.current?.scrollTo({ left: computeOffset(index), behavior: 'smooth' });
  }

  React.useEffect(() => {
    const wrapperWidth = ref.current?.clientWidth ?? 0;

    if (wrapperWidth && lineWidthList.current[0]) {
      const paddingLeft = wrapperWidth / 2 - (lineWidthList.current[0] as number) / 2;
      const paddingRight = wrapperWidth / 2 - (lineWidthList.current[lines.length - 1] as number) / 2;

      setPaddingLeft(paddingLeft);
      setPaddingRight(paddingRight);
    }
  }, []);

  return (
    <div className={styles['lines-wrapper']}>
      <div
        className={styles.lines}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        onScroll={onScroll}
        ref={ref}
      >
        <div className={styles.placeholder} style={{ width: paddingLeft }} />
        {lines.map((line, index) => (
          <LineLabel key={line.name} setLine={wrappedSetLine} line={line} index={index} reportWidth={reportWidth} />
        ))}
        <div className={styles.placeholder} style={{ width: paddingRight }} />
      </div>
      <div className={styles.indicator}>
        <ArrowUp className={styles['arrow-up']} fill={line.color} />
      </div>
    </div>
  );
};
