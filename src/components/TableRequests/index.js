import React from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Link } from 'react-router-dom';

import editIcon from '../../assets/edit.svg';
import approvedIcon from '../../assets/approved.svg';
import cancelIcon from '../../assets/cancel.svg';

import styles from './styles.module.scss';

const TableRequests = () => {
  const { requests, maskCpf, convertCurrency } = React.useContext(GlobalContext);

  return (
    <table className={styles.table}>
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
        {
          requests === null ? (null) : (
            requests.map((item) => {
              return (
                <tr key={item.numero}>
                  {item.status === "APROVADO" ? (
                    <td style={{ color: 'green' }}>
                      <img src={approvedIcon} alt="Pedido aprovado" />
                      {item.status}
                    </td>
                  ) : (
                    <td style={{ color: 'red' }}>
                      <img src={cancelIcon} alt="Pedido cancelado" />
                      {item.status}
                    </td>
                  )}
                  <td>
                    {maskCpf(item.cliente.cpf)}
                  </td>
                  <td>R$ {convertCurrency(item.desconto)}</td>
                  <td>R$ {convertCurrency(item.frete)}</td>
                  <td>R${convertCurrency(item.subTotal)}</td>
                  <td>R$ {convertCurrency(item.valorTotal)}</td>
                  <td>
                    <Link to={`/change-orders/${item.id}`}>
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