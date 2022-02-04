import React from 'react';
import { Time } from './time';
import { DAY, Day, DAY_MAP } from '../../shared';
import styles from './toolbar.module.css';

interface ToolbarProps {
  day: Day;
  setDay: (day: Day) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ day, setDay }) => {
  return (
    <div className={styles.toolbar}>
      <Time />
      <div>
        <select value={day} onChange={(e) => setDay(e.target.value as Day)} className={styles.select}>
          {DAY.map((day) => (
            <option key={day} value={day}>
              {DAY_MAP[day]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
