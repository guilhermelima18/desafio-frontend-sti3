import React from 'react';
import ReactLoading from 'react-loading';

import styles from './styles.module.scss';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <ReactLoading type={'spokes'} color={'#FFF'} width={100} height={100} />
    </div>
  );
};

export default Loading;