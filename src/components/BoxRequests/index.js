import React from 'react';
import { Link } from 'react-router-dom';

import TableRequests from '../TableRequests';
import Title from '../Title';
import TopProducts from '../TopProducts';
import styles from './styles.module.scss';

const BoxRequests = () => {
  const { pathname } = window.location;
  const [requests, setRequests] = React.useState([]);
  const [loading, setLoading] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    await fetch("https://desafiotecnicosti3.azurewebsites.net/pedido")
      .then(response => response.json())
      .then(item => setRequests(item))

    setLoading(false);
  };

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
          <TableRequests requests={requests} loading={loading} />
        ) : (
          <TopProducts />
        )}
      </main>
    </section>
  );
};

export default BoxRequests;