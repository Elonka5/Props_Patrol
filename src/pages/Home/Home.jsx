import React from 'react';
import style from './HomePage.module.css';
import TransactionList from 'components/TransactionList/TransactionList';

const Home = () => {
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
    </section>
  );
};

export default Home;
