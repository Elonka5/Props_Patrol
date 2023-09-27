import Header from 'components/Header/Header';
import React, { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';
import Currency from 'pages/Currency/Currency';
import { Navigation } from '../../components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import css from './Dashboard.module.css';

const Dashboard = () => {
  const isMobilesize = useMediaQuery({ query: '(max-width:767px)' });
  return (
    <div className={css.background}>
      <main>
    <Suspense fallback={null}>
     <Header />
        {isMobilesize && <NavLink to="/currency">Currency</NavLink>}
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
