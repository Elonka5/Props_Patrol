import Header from 'components/Header/Header';
import React, { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const isMobilesize = useMediaQuery({ query: '(max-width:767px)' });
  return (
    <div>
      <main>
        <Header />
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/statistics">Statistics</NavLink>
        {isMobilesize && <NavLink to="/currency">Currency</NavLink>}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Dashboard;
