import { Link } from 'react-router-dom';
import editIcon from '../../assets/edit.svg';
import approvedIcon from '../../assets/approved.svg';
import cancelIcon from '../../assets/cancel.svg';

import styles from './styles.module.scss';

const TableRequests = ({ requests, loading }) => {
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
          loading ? <h1>Loading...</h1> :
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
                  {
                    item.cliente.cpf
                      .replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")
                  }
                </td>
                <td>R$ {item.desconto.toFixed(2).replace('.', ',')}</td>
                <td>R$ {item.frete.toFixed(2).replace('.', ',')}</td>
                <td>R${item.subTotal.toFixed(2).replace('.', ',')}</td>
                <td>R$ {item.valorTotal.toFixed(2).replace('.', ',')}</td>
                <td>
                  <Link to={`/change-orders/${item.numero}`}>
                    <img src={editIcon} alt="Editar Pedido" />
                  </Link>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
};

export default TableRequests;