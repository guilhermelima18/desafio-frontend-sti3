import React from 'react';

import styles from './styles.module.scss';

const BoxTopProducts = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <h1>1º</h1>
        <h3>Camiseta Star Labs</h3>
        <span>Vendido <strong>6</strong> vezes</span>
        <span>Resultou em <strong>R$ 190,00</strong></span>
      </div>
      <div className={styles.card} style={{backgroundColor: 'var(--blue-100)'}}>
        <h1>2º</h1>
        <h3>Tênis Stark Runner</h3>
        <span>Vendido <strong>6</strong> vezes</span>
        <span>Resultou em <strong>R$ 120,00</strong></span>
      </div>
      <div className={styles.card}>
        <h1>3º</h1>
        <h3>Tênis Luthor Confort</h3>
        <span>Vendido <strong>5</strong> vezes</span>
        <span>Resultou em <strong>R$ 150,20</strong></span>
      </div>
      <div className={styles.card} style={{backgroundColor: 'var(--gray-100)'}}>
        <h1>4º</h1>
        <h3>Boné Acme Co.</h3>
        <span>Vendido <strong>3</strong> vezes</span>
        <span>Resultou em <strong>R$ 99,00</strong></span>
      </div>
      <div className={styles.card} style={{backgroundColor: 'var(--gray-100)'}}>
        <h1>5º</h1>
        <h3>Jaqueta Oscorp Industries</h3>
        <span>Vendido <strong>3</strong> vezes</span>
        <span>Resultou em <strong>R$ 220,00</strong></span>
      </div>
    </div>
  );
};

export default BoxTopProducts;