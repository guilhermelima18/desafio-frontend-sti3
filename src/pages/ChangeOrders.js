import Title from '../components/Title';

import styles from '../styles/ChangeOrders.module.scss';

const ChangeOrders = () => {
  const { pathname } = window.location;
  console.log(pathname)

  function pedidos(req) {
    const orders = req.body;
    console.log(orders)
  };

  pedidos()

  return (
    <section>
      <header>
        <div className={styles.actionRequests}>
          <Title
            h2="Listagem de pedidos > Alteração de pedidos"
            p="Aqui você poderá visualizar as informações do pedido e editar as informações do cliente."
          />
        </div>
        <form action="">
          <button className={styles.btnCancel} type="submit">Cancelar alterações</button>
          <button className={styles.btnSave} type="submit">Salvar alterações</button>
        </form>
      </header>
      <section className={styles.main}>
        <div className={styles.requestDescription}>
          <h2>Venda nº 1</h2>
          <p><strong>Data:</strong> Quarta-feira, 28/04/2021 - 23h53</p>
          <p><strong>Status:</strong> Aprovada</p>
          <p><strong>Desconto:</strong> R$ 10,00</p>
          <p><strong>Frete:</strong> R$ 25,00</p>
          <p><strong>Subtotal:</strong> R$ 270,70</p>
          <p><strong>Total:</strong> R$ 305,70</p>
          <span>
            Endereço de entrega: {' '}
            <strong>Rua Star Labs, 100 - Midtown - Central City (KS)</strong>
          </span>
        </div>
        <form action="" className={styles.formChangeOrders}>
          <h2>Informações do cliente</h2>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome *</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail *</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="cpf">CPF *</label>
            <input type="text" name="cpf" />
          </div>
        </form>
      </section>
    </section>
  );
};

export default ChangeOrders;