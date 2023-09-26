import React from 'react';
import style from './TransactionsList.module.css';
import { useSelector } from 'react-redux';

const TransactionList = () => {
  const transactions = useSelector(state => state.transaction.transactions);

  return (
    <ul className={style.transaction_list}>
      {transactions.map(transaction => {
        return (
          <li key={Date.now()} className={style.transaction_item}>
            <div className="date">{transaction.transactionDate}</div>
            <div className="type">{transaction.type}</div>
            <div className="category">{transaction.categoryId}</div>
            <div className="comment">{transaction.comment}</div>
            <div className="sum">300.00</div>
            <button type="button">edit</button>
            <button type="button">delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TransactionList;
