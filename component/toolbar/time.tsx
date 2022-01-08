import React from 'react';
import styles from './toolbar.module.css';

function formatTime(date: Date): string {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [hour, minute, second].map((v) => v.toString().padStart(2, '0')).join(':');
}

export const Time: React.FC = () => {
  const [now, setNow] = React.useState(new Date());
  const timeRef = React.useRef(now);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      timeRef.current = new Date();
      setNow(timeRef.current);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className={styles.time}>{formatTime(timeRef.current)}</div>;
};
