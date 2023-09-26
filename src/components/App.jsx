import { Navigate, Route, Routes } from 'react-router-dom';
import PublicRoute from '../routes/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const Login = lazy(() => import('../pages/Login/Login'));
const Registration = lazy(() => import('../pages/Registration/Registration'));
const Statistics = lazy(() => import('../pages/Statistics/Statistics'));

export const App = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute redirectTo="/home">
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute redirectTo="/home">
            <Registration />
          </PublicRoute>
        }
      />
      <Route path="/" element={<Dashboard />}>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/statistics"
          element={
            <PrivateRoute>
              <Statistics />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};
