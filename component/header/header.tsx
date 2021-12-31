import React from 'react';
import styles from './header.module.css';

export function Header(): React.ReactElement {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>北京地铁时刻表</h1>
    </header>
  );
}
