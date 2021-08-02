import React from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

import logoImg from '../../assets/logo.svg';

import styles from './styles.module.scss';

const Header = () => {
  const { option } = React.useContext(GlobalContext);

  const data = new Date().toLocaleDateString('pt-br', option.year, option.month, option.weekday);

  return (
    <header>
      <nav>
        <div className={styles.logo}>
          <img src={logoImg} alt="" />
          <strong></strong>
          <h3>Feito por Guilherme Lima</h3>
        </div>
        <div className={styles.todayDate}>
          <h3>{data}</h3>
        </div>
      </nav>
    </header>
  );
};

export default Header;