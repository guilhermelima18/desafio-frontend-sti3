import React from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Link } from 'react-router-dom';

import editIcon from '../../assets/edit.svg';
import approvedIcon from '../../assets/approved.svg';
import cancelIcon from '../../assets/cancel.svg';

import styles from './styles.module.scss';
import Loading from '../Loading';

const TableRequests = () => {
  const { requests, loading, maskCpf, convertCurrency } = React.useContext(GlobalContext);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nome</th>
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
        {
          loading ? <Loading /> : (
            requests
              .map(({ numero, status, cliente, desconto, frete, subTotal, valorTotal }) => {
                return (
                  <tr key={numero}>
                    <td>{cliente.nome}</td>
                    {status === "APROVADO" ? (
                      <td style={{ color: 'green' }}>
                        <img src={approvedIcon} alt="Pedido aprovado" />
                        {status}
                      </td>
                    ) : (
                      <td style={{ color: 'red' }}>
                        <img src={cancelIcon} alt="Pedido cancelado" />
                        {status}
                      </td>
                    )}
                    <td>
                      {maskCpf(cliente.cpf)}
                    </td>
                    <td>{convertCurrency(desconto)}</td>
                    <td>{convertCurrency(frete)}</td>
                    <td>{convertCurrency(subTotal)}</td>
                    <td>{convertCurrency(valorTotal)}</td>
                    <td>
                      <Link to={`/change-orders/${numero}`}>
                        <img src={editIcon} alt="Editar Pedido" />
                      </Link>
                    </td>
                  </tr>
                )
              })
          )
        }
      </tbody>
    </table>
  );
};

export default TableRequests;