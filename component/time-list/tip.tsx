import React from 'react';
import styles from './time-list.module.css';

interface TipProps {
  terminus: boolean;
  loop: boolean;
  direction: 'up' | 'down';
}

export const Tip: React.FC<TipProps> = ({ terminus, loop, direction }) => {
  if (!terminus) {
    return <div className={styles.empty}>暂无数据</div>;
  }
  if (loop) {
    return <div className={styles.empty}>暂无数据</div>;
  } else {
    return <div className={styles.empty}>{direction === 'up' ? '上行' : '下行'}终点</div>;
  }
  return <div className={styles.empty}>暂无数据</div>;
};
