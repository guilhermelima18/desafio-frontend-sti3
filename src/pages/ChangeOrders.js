import React from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { useParams, useHistory } from 'react-router-dom';

import Title from '../components/Title';

import styles from '../styles/ChangeOrders.module.scss';

const ChangeOrders = () => {
  const { requests, setRequests, convertCurrency, option } = React.useContext(GlobalContext);
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
    enderecoEntrega,
    cliente
  } = requests[id - 1];

  const [form, setForm] = React.useState({
    nome: cliente.nome,
    email: cliente.email,
    cpf: cliente.cpf,
  });

  const data = new Date(dataCriacao).toLocaleDateString('pt-br', option);

  function handleClickCancel() {
    history.push("/");
  };

  function handleSubmit(e) {
    e.preventDefault();

    const { cliente: oldCustomer, ...rest } = requests[id - 1]

    const updateRequest = { ...rest, cliente: { ...oldCustomer, ...form } }
    requests.splice(id - 1, 1, updateRequest);

    localStorage.setItem('@DesafioFrontend:requests', JSON.stringify(requests));
    setRequests(requests);

    history.push("/");
  };

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <section role="form" onSubmit={e => handleSubmit(e)}>
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
        <section className={styles.requestsShow}>
          <div className={styles.requestDescription}>
            <h2>Venda nº {numero}</h2>
            <p><strong>Data:</strong> {data}</p>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Desconto:</strong> {convertCurrency(desconto)}</p>
            <p><strong>Frete:</strong> {convertCurrency(frete)}</p>
            <p><strong>SubTotal:</strong> {convertCurrency(subTotal)}</p>
            <p><strong>Valor Total:</strong> {convertCurrency(valorTotal)}</p><br />
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
              <input type="text" id="name" name="nome" value={form.nome} onChange={e => handleChange(e)} />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">E-mail *</label>
              <input type="email" id="email" name="email" value={form.email} onChange={e => handleChange(e)} />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="cpf">CPF *</label>
              <input type="text" id="cpf" name="cpf" value={form.cpf} onChange={e => handleChange(e)} />
            </div>
          </form>
        </section>
      </section>
    </div>
  );
};

export default ChangeOrders;