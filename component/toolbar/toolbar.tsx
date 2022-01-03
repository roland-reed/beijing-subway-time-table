import React from 'react';
import { Time } from './time';
import { Day } from '../../shared';
import styles from './toolbar.module.css';

const DAY_MAP: Record<Day, string> = {
  monday: '周一',
  tuesday: '周二',
  wednesday: '周三',
  thursday: '周四',
  friday: '周五',
  saturday: '周六',
  sunday: '周日'
};

const days: Day[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];


interface ToolbarProps {
  day: Day;
  setDay: (day: Day) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  day,
  setDay
}) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
  }, []);

  return <div className={styles.toolbar}>
    {show && <Time />}
    <div>
      <select value={day} onChange={e => setDay(e.target.value as Day)} className={styles.select}>
        {
          days.map(day => <option key={day} value={day}>{DAY_MAP[day]}</option>)
        }
      </select>
    </div>
  </div>
}
