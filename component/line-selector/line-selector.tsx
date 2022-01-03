import React from 'react';
import { lines } from '../../data';
import { useLineUp } from '../../hook';
import { LineLabel } from './line-label';
import styles from './line-selector.module.css';
import * as icon from '../icon';
import { Line, smoothScroll } from '../../shared';

interface LineSelectorProps {
  setLine: (code: string) => void;
  line: Line;
}

export const LineSelector: React.FC<LineSelectorProps> = ({ setLine, line }) => {
  const ref = React.createRef<HTMLDivElement>();
  const [paddingLeft, setPaddingLeft] = React.useState(1000);
  const [paddingRight, setPaddingRight] = React.useState(0);
  const lineWidthList = React.useRef<number[]>([]);
  const computeOffset = (index: number) =>
    lineWidthList.current[0] / 2 +
    lineWidthList.current.slice(1, index + 1).reduce((acc, cur) => acc + cur, 0) -
    lineWidthList.current[index] / 2;
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

  function scrollToLine(code: string) {
    const index = lines.findIndex(line => line.code === code);

    ref.current && smoothScroll(ref.current, 300, computeOffset(index), 0);
  }

  function wrappedSetLine(code: string) {
    setLine(code);
    scrollToLine(code);
  }

  function setPadding() {
    const wrapperWidth = ref.current?.clientWidth ?? 0;

    if (wrapperWidth && lineWidthList.current[0]) {
      const paddingLeft = wrapperWidth / 2 - (lineWidthList.current[0] as number) / 2;
      const paddingRight = wrapperWidth / 2 - (lineWidthList.current[lines.length - 1] as number) / 2;

      setPaddingLeft(paddingLeft);
      setPaddingRight(paddingRight);
    }
  }

  React.useEffect(setPadding, [ref]);
  React.useEffect(() => {
    window.addEventListener('resize', setPadding);

    return () => window.removeEventListener('resize', setPadding);
  });
  React.useEffect(() => {
    scrollToLine(line.code);
  }, [line.code])

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
        <div className={styles['actual-lines']}>
          {lines.map((line, index) => (
            <LineLabel key={line.name} setLine={wrappedSetLine} line={line} index={index} reportWidth={reportWidth} />
          ))}
        </div>
        <div className={styles.placeholder} style={{ width: paddingRight }} />
      </div>
      <div className={styles.indicator} style={{ color: line.color }}>
        <icon.ArrowUp />
      </div>
    </div>
  );
};
