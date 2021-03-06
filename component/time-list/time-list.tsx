import React from 'react';
import {
  Day,
  DepartureTime,
  FullDeparture,
  Hour,
  HourDepartureTime,
  Line,
  narrowRange,
  smoothScroll,
} from '../../shared';
import styles from './time-list.module.css';
import { ScrollContainer } from '../scroll-container';
import { useLineUp } from '../../hook';
import { Tip } from './tip';

function getHourAndMinute(date: Date): [Hour, number] {
  const hour = date.getHours();
  const minute = date.getMinutes();

  return [hour as Hour, minute];
}

function passed(time: [number, number], now: [number, number]): boolean {
  return time[0] * 60 + time[1] < now[0] * 60 + now[1];
}

function diff(timeA: [number, number], timeB: [number, number]): number {
  const hourDiff = timeA[0] - timeB[0];
  const minuteDiff = timeA[1] - timeB[1];

  return hourDiff * 60 + minuteDiff;
}

function pickColor(diff: number): string | undefined {
  if (diff < 0) {
    return undefined;
  }
  if (diff <= 5) {
    return '#1b5e20';
  }
  if (diff <= 10) {
    return '#2e7d32';
  }
  if (diff <= 15) {
    return '#388e3c';
  }
  if (diff <= 20) {
    return '#43a047';
  }
  return undefined;
}

function extractTrains(table?: HourDepartureTime): DepartureTime[] {
  if (table === undefined) {
    return [];
  }
  return Object.entries(table)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .reduce(
      (result, [hour, minutes]) => result.concat(minutes.map((minute) => [Number(hour) as Hour, minute])),
      [] as DepartureTime[],
    );
}

function normalizeTime(time: DepartureTime): [Hour, FullDeparture] {
  const [hour, minute] = time;

  if (typeof minute === 'number') {
    return time as [Hour, FullDeparture];
  }

  const fragments = minute.split('->');

  return [hour, Number(fragments.find((fragment) => !Number.isNaN(parseInt(fragment)))) as FullDeparture];
}

function findNextIndex(timeList: DepartureTime[], now: [Hour, FullDeparture]): number {
  let index = 0;

  timeList.some((time) => {
    if (diff(normalizeTime(time), now) < 0) {
      index++;
      return false;
    }
    return true;
  });

  return index;
}

interface TimeListProps {
  line: Line;
  index: number;
  day: Day;
  direction: 'up' | 'down';
  terminus?: boolean;
}

export const TimeList: React.FC<TimeListProps> = ({ line, index, direction, day, terminus = false }) => {
  const [now, setNow] = React.useState(getHourAndMinute(new Date()));
  // const [now, setNow] = React.useState<[Hour, number]>([7, 32]);
  const nowRef = React.useRef({ now });
  const ref = React.createRef<HTMLDivElement>();
  const stations = line.stations[index] ?? [];
  const trains = extractTrains(stations.departureTime?.[direction]?.[day]);
  const [selected, setSelected] = React.useState(findNextIndex(trains, now));
  const [paddingTop, setPaddingTop] = React.useState(0);
  const narrow = React.useCallback((value) => narrowRange(0, trains.length - 1)(value), [trains.length]);
  const { onScroll, onTouchEnd, onTouchStart } = useLineUp({
    ref,
    lineUp: (div) => {
      setSelected(narrow(Math.ceil((div.scrollTop - 12) / 24)));
    },
  });

  React.useEffect(() => {
    const wrapperHeight = ref.current?.clientHeight ?? 0;

    if (wrapperHeight) {
      const paddingTop = wrapperHeight / 2 - 12;

      setPaddingTop(paddingTop);
    }
  }, [ref]);

  React.useEffect(() => {
    setSelected(findNextIndex(trains, now));
  }, [line, index, day, now, setSelected, trains]);

  React.useEffect(() => {
    ref.current && smoothScroll(ref.current, 300, 0, selected * 24);
  }, [selected, ref]);

  React.useEffect(() => {
    const div = ref.current;
    div && smoothScroll(div, 300, 0, selected * 24);
  }, [ref, selected]);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const [hour, minute] = getHourAndMinute(new Date());
      if (nowRef.current.now[0] !== hour || nowRef.current.now[1] !== minute) {
        const newNow = [hour, minute] as unknown as [Hour, number];
        setNow(newNow);
        nowRef.current.now = newNow;
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
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
        {(!terminus || line.loop === true) &&
          trains.map((time, index) => {
            const normalizedTime = normalizeTime(time);
            const d = diff(normalizedTime, now);

            return (
              <div
                className={styles['departure-time']}
                style={{
                  color: passed(normalizedTime, now) ? '#ccc' : undefined,
                }}
                onClick={() => setSelected(index)}
                key={normalizedTime.join(':')}
              >
                {normalizedTime.map((v) => v.toString().padStart(2, '0')).join(':')}
                {Math.abs(d) < 100 ? (
                  <span style={{ color: pickColor(d) }} className={styles.diff}>
                    {d > 0 ? `+${d}` : d}
                  </span>
                ) : (
                  <span className={styles.diff}>{d > 0 ? '+99' : '-99'}</span>
                )}
              </div>
            );
          })}
        {trains.length === 0 && <Tip direction={direction} terminus={terminus} loop={line.loop ?? false} />}
      </ScrollContainer>
    </div>
  );
};
