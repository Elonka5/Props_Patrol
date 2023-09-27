import Header from 'components/Header/Header';
import Currency from 'pages/Currency/Currency';
import { Navigation } from '../../components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={css.background}>
      <main>
        <Suspense fallback={null}>
          <Header />
          <Navigation />
          <Balance />
          <Currency />
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Dashboard;
