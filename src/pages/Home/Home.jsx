import React, { useEffect } from 'react';
import style from './HomePage.module.css';
import TransactionList from 'components/TransactionList/TransactionList';
import { TansactionsForm } from 'components/TransactionForm/TransactionsForm';
import {
  fetchCategoriesThunk,
  getTransactionsThunk,
} from 'redux/transactionsOperations';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTransactionsThunk());
  }, [dispatch]);

  return (
    <section className={style.home_section}>
      <div className={style.transaction_main_wrapper}>
        <div className={style.list_header}>
          <div>Date</div>
          <div>Type</div>
          <div>Category</div>
          <div>Comment</div>
          <div>Sum</div>
        </div>
        <div className={style.transaction_list_wrapper}>
          <TransactionList />
        </div>
      </div>
      <TansactionsForm />
    </section>
  );
};

export default Home;
