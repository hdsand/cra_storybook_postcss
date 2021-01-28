import React from 'react';
import cn from 'classnames';

import styles from './Loader.module.css';

export interface Props {
  size: 'large' | 'small';
  testId?: string;
}

const Loader: React.FC<Props> = ({ size = 'large', testId = '' }) => {
  const loaderClassName = cn(styles.loader, {
    [styles.large]: size === 'large',
    [styles.small]: size === 'small',
  });
  return (
    <div className={styles.loaderWrapper}>
      <div className={loaderClassName} data-test={testId}>
        Loading...
      </div>
    </div>
  );
};

export default React.memo(Loader);
