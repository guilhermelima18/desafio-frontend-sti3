import React from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

import Title from '../components/Title';

import styles from '../styles/ChangeOrders.module.scss';
import { useParams } from 'react-router-dom';

const ChangeOrders = (props) => {
  const { requests } = React.useContext(GlobalContext);
  const { id } = useParams();

  console.log(id)

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
          {/* <h2>Venda nº {order.numero}</h2>
          <p>{order.status}</p>
          <p>{order.desconto}</p>
          <p>{order.frete}</p>
          <p>{order.subTotal}</p>
          <p>{order.valorTotal}</p><br />
          <p>
            Endereço de entrega: Rua {order.enderecoEntrega.endereco}, {' '} 
            {order.enderecoEntrega.numero} - {' '}
            {order.enderecoEntrega.bairro} - 
            {order.enderecoEntrega.cidade} ({order.enderecoEntrega.estado})
          </p> */}
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