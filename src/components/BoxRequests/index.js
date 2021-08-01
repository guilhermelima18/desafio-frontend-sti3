import React from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Link } from 'react-router-dom';

import TableRequests from '../TableRequests';
import Title from '../Title';
import BoxTopProducts from '../BoxTopProducts';
import styles from './styles.module.scss';

const BoxRequests = () => {
  const { handleSubmit } = React.useContext(GlobalContext);

  const { pathname } = window.location;
  
  return (
    <section>
      <header>
        <div className={styles.actionRequests}>
          <Title 
            h2="Listagem de pedidos" 
            p="Aqui você poderá visualizar todos os pedidos emitidos." 
          />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <button type="submit">Consultar</button>
        </form>
      </header>
      <main>
        <div className={styles.btnNavegation}>
          <Link to="/">Pedidos</Link>
          <Link to="/top-products">Produtos mais vendidos</Link>
        </div>
        {pathname === "/" ? (
          <TableRequests />
        ) : (
          <BoxTopProducts />
        )}
      </main>
    </section>
  );
};

export default BoxRequests;