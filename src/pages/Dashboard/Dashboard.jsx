import Header from 'components/Header/Header';
import Home from 'pages/Home/Home';
import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <main>
        <Suspense fallback={null}>
          <Header />
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
          <Home />
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Dashboard;
