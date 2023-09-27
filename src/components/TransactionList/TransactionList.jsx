import React, { useState } from 'react';
import style from './TransactionsList.module.css';
import { useSelector } from 'react-redux';
import ModalDelete from 'components/modalDelete/ModalDelete';
// import { useEffect } from 'react';
// import { getTransactionsThunk } from 'redux/transactionsOperations';

const TransactionList = () => {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const transactions = useSelector(state => state.transaction.transactions);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTransactionsThunk());
  // }, [dispatch]);

  const handleClickModalDelete = id => {
    setCurrentId(id);
    setIsModalDeleteOpen(true);
  };

  const handleModalClose = () => {
    setCurrentId('');
    setIsModalDeleteOpen(false);
  };
  return (
    <>
      <ul className={style.transaction_list}>
        {transactions &&
          transactions.map(transaction => {
            return (
              <li key={transaction.id} className={style.transaction_item}>
                <div className={style.date}>{transaction.transactionDate}</div>
                <div className={style.type}>{transaction.type}</div>
                <div className={style.category}>{transaction.categoryId}</div>
                <div className={style.comment}>{transaction.comment}</div>
                <div className={style.sum}>777.00</div>
                <div className={style.btns_wrapper}>
                  <button type="button" className={style.edit_btn}>
                    edit
                  </button>
                  <button
                    onClick={() => handleClickModalDelete(transaction.id)}
                    type="button"
                    className={style.delete_btn}
                  >
                    delete
                  </button>
                </div>
              </li>
            );
          })}
      </ul>

      {isModalDeleteOpen && (
        <ModalDelete
          transactions={transactions}
          itemId={currentId}
          handleModalClose={handleModalClose}
        />
      )}
    </>
  );
};

export default TransactionList;
