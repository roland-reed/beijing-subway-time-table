import React from 'react';
import { lineMap } from '../../data';
import styles from './header.module.css';

export function Header(props: { lineCode: string }): React.ReactElement {
  const { lineCode } = props;
  const line = lineMap[lineCode as keyof typeof lineMap];

  return (
    <header style={{ color: line.fontColorReverse ? '#424242' : undefined, backgroundColor: line.color }} className={styles.header}>
      <h1 className={styles.h1}>北京地铁时刻表<span className={styles.hint}>仅供参考</span></h1>
    </header>
  );
}
