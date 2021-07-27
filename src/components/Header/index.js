import logoImg from '../../assets/logo.svg';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <header>
      <nav>
        <div className={styles.logo}>
          <img src={logoImg} alt="" />
          <strong></strong>
          <h3>Feito por Guilherme Lima</h3>
        </div>
        <div className={styles.todayDate}>
          <h3>Qui, 17 Junho</h3>
        </div>
      </nav>
    </header>
  );
};

export default Header;