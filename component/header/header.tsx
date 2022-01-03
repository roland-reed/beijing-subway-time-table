import React from 'react';
import { Line } from '../../shared';
import styles from './header.module.css';

export function Header(props: { line: Line }): React.ReactElement {
  const { line } = props;

  return (
    <header style={{ color: line.fontColorReverse ? '#424242' : undefined, backgroundColor: line.color }} className={styles.header}>
      <h1 className={styles.h1}>北京地铁时刻表<span className={styles.hint}>仅供参考</span></h1>
    </header>
  );
}
