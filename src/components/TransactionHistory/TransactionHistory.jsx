import css from './TransactionHistory.module.css';
import clsx from 'clsx';

export const TransactionHistory = ({ item }) => {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr className={css.row}>
          <th className={css.tHead}>Type</th>
          <th className={css.tHead}>Amount</th>
          <th className={css.tHead}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {item.map((transaction) => (
          <tr className={css.row} key={transaction.id}>
            <td className={clsx(css.tData, css.type)}>{transaction.type}</td>
            <td className={css.tData}>{transaction.amount}</td>
            <td className={css.tData}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
