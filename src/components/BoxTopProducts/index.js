import React from 'react';
/* import { GlobalContext } from '../../contexts/GlobalContext'; */

import styles from './styles.module.scss';

const BoxTopProducts = () => {
  /* const { requests } = React.useContext(GlobalContext); */

  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <h1>1º</h1>
        <h3>Camiseta Star Labs</h3>
        <h5>Vendido 6 vezes</h5>
        <span>
          Resultou em
          {' '}<strong>R$ 190,00</strong>
        </span>
      </div>
      <div className={styles.card}>
        <h1>1º</h1>
        <h3>Camiseta Star Labs</h3>
        <h5>Vendido 6 vezes</h5>
        <span>
          Resultou em
          <strong>R$ 190,00</strong>
        </span>
      </div>
      <div className={styles.card}>
        <h1>1º</h1>
        <h3>Camiseta Star Labs</h3>
        <h5>Vendido 6 vezes</h5>
        <span>
          Resultou em
          <strong>R$ 190,00</strong>
        </span>
      </div>
      <div className={styles.card}>
        <h1>1º</h1>
        <h3>Camiseta Star Labs</h3>
        <h5>Vendido 6 vezes</h5>
        <span>
          Resultou em
          <strong>R$ 190,00</strong>
        </span>
      </div>
      <div className={styles.card}>
        <h1>1º</h1>
        <h3>Camiseta Star Labs</h3>
        <h5>Vendido 6 vezes</h5>
        <span>
          Resultou em
          <strong>R$ 190,00</strong>
        </span>
      </div>
    </div>
  );
};

export default BoxTopProducts;