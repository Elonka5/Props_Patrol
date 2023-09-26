import { useDispatch } from 'react-redux';
import { logOutThunk } from 'redux/authOperations';
import { closeModalLogout } from 'redux/globalSlice';

export const ModalLogout = () => {
  const dispatch = useDispatch();

  const handlerLogout = () => {
    dispatch(logOutThunk());
    dispatch(closeModalLogout());
  };

  return (
    <div>
      <div>
        <h3>Money Guard</h3>
        <p>Are you sure you want to log out?</p>
        <button onClick={handlerLogout}>Logout</button>
        <button onClick={() => dispatch(closeModalLogout())}>Cancel</button>
      </div>
    </div>
  );
};
