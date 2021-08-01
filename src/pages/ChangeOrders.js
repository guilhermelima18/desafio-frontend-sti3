import React from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

import Title from '../components/Title';

import styles from '../styles/ChangeOrders.module.scss';
import { useParams, useHistory } from 'react-router-dom';

const ChangeOrders = () => {
  const { requests } = React.useContext(GlobalContext);
  const { id } = useParams();
  const history = useHistory();

  let {
    numero,
    dataCriacao,
    status,
    desconto,
    frete,
    subTotal,
    valorTotal,
    enderecoEntrega 
  } = requests[id - 1];

  const option = {
    year: 'numeric',
    month: 'long',
    weekday: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const data = new Date(dataCriacao).toLocaleDateString('pt-br', option);

  function handleClickCancel() {
    history.push("/");
  };

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
          <button
            className={styles.btnCancel}
            onClick={handleClickCancel}
            type="submit"
          >
            Cancelar alterações
          </button>
          <button 
            className={styles.btnSave} 
            type="submit"
          >
            Salvar alterações
          </button>
        </form>
      </header>
      <section className={styles.main}>
        <div className={styles.requestDescription}>
          <h2>Venda nº {numero}</h2>
          <p><strong>Data:</strong> {data}</p>
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Desconto:</strong> R$ {desconto.toFixed(2).replace('.', ',')}</p>
          <p><strong>Frete:</strong> R$ {frete.toFixed(2).replace('.', ',')}</p>
          <p><strong>SubTotal:</strong> R$ {subTotal.toFixed(2).replace('.', ',')}</p>
          <p><strong>Valor Total:</strong> R$ {valorTotal.toFixed(2).replace('.', ',')}</p><br />
          <p>
            <strong>Endereço de entrega:</strong> Rua {enderecoEntrega.endereco}, {' '}
            {enderecoEntrega.numero} - {' '}
            {enderecoEntrega.bairro} -
            {enderecoEntrega.cidade} ({enderecoEntrega.estado})
          </p>
        </div>
        <form action="" className={styles.formChangeOrders}>
          <h2>Informações do cliente</h2>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome *</label>
            <input type="text" id="name" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail *</label>
            <input type="email" id="email" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="cpf">CPF *</label>
            <input type="text" id="cpf" />
          </div>
        </form>
      </section>
    </section>
  );
};

export default ChangeOrders;