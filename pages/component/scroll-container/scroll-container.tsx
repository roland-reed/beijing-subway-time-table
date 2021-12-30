import React from 'react';
import styles from './scroll-container.module.css';

export const ScrollContainer = React.forwardRef<
HTMLDivElement,
React.PropsWithChildren<{}> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <div ref={ref} {...rest} className={styles.container}>
      {children}
    </div>
  );
});
