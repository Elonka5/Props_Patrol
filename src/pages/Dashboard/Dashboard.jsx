import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <main>
        <h1> Hello World</h1>
        <Suspense fallback={null}>
          <Header />
          <Sidebar />
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Dashboard;
