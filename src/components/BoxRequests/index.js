import editIcon from '../../assets/edit.svg';

import styles from './styles.module.scss';

const BoxRequests = () => {
  return (
    <section>
      <header>
        <div className={styles.actionRequests}>
          <h2>Listagem de pedidos</h2>
          <p>
            Aqui você poderá visualizar todos os pedidos emitidos.
          </p>
        </div>
        <form action="">
          <button type="submit">Consultar</button>
        </form>
      </header>
      <main>
        <div className={styles.btnNavegation}>
          <a href="/">Pedidos</a>
          <a href="/">Produtos mais vendidos</a>
        </div>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>CPF do cliente</th>
              <th>Desconto</th>
              <th>Frete</th>
              <th>Subtotal</th>
              <th>Total</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aprovado</td>
              <td>441.846.828-55</td>
              <td>441.846.828-55</td>
              <td>441.846.828-55</td>
              <td>441.846.828-55</td>
              <td>441.846.828-55</td>
              <td>
                <a href="/">
                  <img src={editIcon} alt="Editar" />
                </a>
              </td>
            </tr>
            <tr>
              <td>Aprovado</td>
              <td>441.846.828-55</td>
              <td>441.846.828-55</td>
              <td>441.846.828-55</td>
              <td>441.846.828-55</td>
              <td>441.846.828-55</td>
              <td>
                <a href="/">
                  <img src={editIcon} alt="Editar" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default BoxRequests;