import React, { useState } from 'react';
import style from './TransactionsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ModalDelete from 'components/modalDelete/ModalDelete';
import { openModalEditTransaction } from 'redux/Global/globalSlices';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import { selectBtnName, selectIsOpen } from 'redux/Global/globalSelectors';
import { setBtnEdit } from '../../redux/Global/globalSlices';

const TransactionList = () => {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const transactions = useSelector(state => state.transaction.transactions);


  const isOpen = useSelector(selectIsOpen);

  const dispatch = useDispatch();

  const btnName = useSelector(selectBtnName);

  const handleClickModalDelete = id => {
    setCurrentId(id);
    setIsModalDeleteOpen(true);
  };

  const handleModalClose = () => {
    setCurrentId('');
    setIsModalDeleteOpen(false);
  };

  const handleClickModalEdit = transaction => {
    dispatch(openModalEditTransaction());
  };
  return (
    <>
      <ul className={style.transaction_list}>
        {transactions.map(transaction => {
          return (
            <li key={transaction.id} className={style.transaction_item}>
              <div className={style.date}>{transaction.transactionDate}</div>
              <div className={style.type}>{transaction.type}</div>
              <div className={style.category}>{transaction.categoryId}</div>
              <div className={style.comment}>{transaction.comment}</div>
              <div className={style.sum}>777.00</div>
              <div className={style.btns_wrapper}>
                <button
                  onClick={() => {
                    handleClickModalEdit(transaction);
                    dispatch(setBtnEdit());
                  }}
                  type="button"
                  className={style.edit_btn}
                  name="edit"
                >
                  edit
                </button>
                <button
                  onClick={e => {
                    handleClickModalDelete(transaction.id);
                  }}
                  type="button"
                  className={style.delete_btn}
                >
                  delete
                </button>
              </div>
            </li>
          );
        })}
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
      {isOpen && <ModalWindow btnName={btnName} />}
    </>
  );
};

export default TransactionList;
