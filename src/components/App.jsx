import { Navigate, Route, Routes } from 'react-router-dom';
import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUserThunk } from 'redux/authOperations';
import { selectIsRefreshing } from 'redux/authSelectors';
import { Layout } from './Layout/Layout';
import { useMediaQuery } from 'react-responsive';

const Home = lazy(() => import('../pages/Home/Home'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const Login = lazy(() => import('../pages/Login/Login'));
const Registration = lazy(() => import('../pages/Registration/Registration'));
const Statistics = lazy(() => import('../pages/Statistics/Statistics'));
const Currency = lazy(() => import('../pages/Currency/Currency'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  const isMobilesize = useMediaQuery({ query: '(max-width:767px)' });
  console.log(isMobilesize);
  useEffect(() => {
    dispatch(fetchCurrentUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="login"
          element={
            <PublicRoute redirectTo="/">
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute redirectTo="/">
              <Registration />
            </PublicRoute>
          }
        />
        <Route
          element={
            <PrivateRoute redirectTo="login">
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route
            index
            element={
              <PrivateRoute redirectTo="login">
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="statistics"
            element={
              <PrivateRoute redirectTo="login">
                <Statistics />
              </PrivateRoute>
            }
          />

          <Route
            path="currency"
            element={
              <PrivateRoute redirectTo="login">
                {isMobilesize ? <Currency /> : <Navigate to="/" />}
              </PrivateRoute>
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
