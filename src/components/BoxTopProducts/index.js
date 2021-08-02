import React from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

import itensVendidos from '../../itensVendidos';

import styles from './styles.module.scss';

const BoxTopProducts = () => {
  const { convertCurrency } = React.useContext(GlobalContext);

  const totalCamisetaStarLabs = itensVendidos
    .filter(({ nome }) => nome === "Camiseta Star Labs Preta")
    .reduce(getTotal, 0)

  const totalTenisStark = itensVendidos
    .filter(({ nome }) => nome === "Tênis Stark Runner")
    .reduce(getTotal, 0)

  const totalTenisLuthor = itensVendidos
    .filter(({ nome }) => nome === "Tênis Luthor Confort")
    .reduce(getTotal, 0)

  const totalBoneAcme = itensVendidos
    .filter(({ nome }) => nome === "Boné Acme Co.")
    .reduce(getTotal, 0)

  const totalJaquetaOscorp = itensVendidos
    .filter(({ nome }) => nome === "Jaqueta Oscorp Industries")
    .reduce(getTotal, 0)

  //Somar itens vendidos afim de obter o total
  function getTotal(total, item) {
    return total + (item.valorUnitario * item.quantidade);
  };

  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <h1>1º</h1>
        <h3>Camiseta Star Labs Preta</h3>
        <span>Vendido <strong>6</strong> vezes</span>
        <span>Preço Unitário: R$ 190,00</span>
        <span>Total de <strong>{convertCurrency(totalCamisetaStarLabs)}</strong></span>
      </div>
      <div className={styles.card} style={{ backgroundColor: 'var(--blue-100)' }}>
        <h1>2º</h1>
        <h3>Tênis Stark Runner</h3>
        <span>Vendido <strong>6</strong> vezes</span>
        <span>Preço Unitário: R$ 120,50</span>
        <span>Total de <strong>{convertCurrency(totalTenisStark)}</strong></span>
      </div>
      <div className={styles.card}>
        <h1>3º</h1>
        <h3>Tênis Luthor Confort</h3>
        <span>Vendido <strong>5</strong> vezes</span>
        <span>Preço Unitário: R$ 150,20</span>
        <span>Total de <strong>{convertCurrency(totalTenisLuthor)}</strong></span>
      </div>
      <div className={styles.card} style={{ backgroundColor: 'var(--gray-100)' }}>
        <h1>4º</h1>
        <h3>Boné Acme Co.</h3>
        <span>Vendido <strong>3</strong> vezes</span>
        <span>Preço Unitário: R$ 99,00</span>
        <span>Total de <strong>{convertCurrency(totalBoneAcme)}</strong></span>
      </div>
      <div className={styles.card} style={{ backgroundColor: 'var(--gray-100)' }}>
        <h1>5º</h1>
        <h3>Jaqueta Oscorp Industries</h3>
        <span>Vendido <strong>3</strong> vezes</span>
        <span>Preço Unitário: R$ 220,00</span>
        <span>Total de <strong>{convertCurrency(totalJaquetaOscorp)}</strong></span>
      </div>
    </div>
  );
};

export default BoxTopProducts;