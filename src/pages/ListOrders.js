import React from 'react';
import BoxRequests from "../components/BoxRequests";

import styles from '../styles/ListOrders.module.scss';

const ListOrders = () => {
  return (
    <>
      <div className={styles.container}>
        <BoxRequests />
      </div>
    </>
  );
};

export default ListOrders;