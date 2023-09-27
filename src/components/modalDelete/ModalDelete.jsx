import React from 'react';
import style from './ModalDelete.module.css';
import { useDispatch } from 'react-redux';
import { deleteTransactionThunk } from 'redux/transactionsOperations';

const ModalDelete = ({ itemId, handleModalClose, transactions }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (itemId) dispatch(deleteTransactionThunk(itemId));
    handleModalClose();
  };
  return (
    <div className={style.backdrop}>
      <div className={style.modal_delete}>
        <h2 className={style.modal_delete_text}>
          Are you sure you want to delete transaction?
        </h2>
        <button className={style.modal_delete_btn} onClick={handleDelete}>
          delete
        </button>
        <button
          className={style.modal_delete_btn_cancel}
          onClick={handleModalClose}
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default ModalDelete;
