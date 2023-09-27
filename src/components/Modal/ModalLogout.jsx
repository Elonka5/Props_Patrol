import { useDispatch } from 'react-redux';
import { logOutThunk } from 'redux/authOperations';
import { closeModalLogout } from 'redux/globalSlice';
import logout from './ModalLogout.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export const ModalLogout = ({ closeReducer }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onCloseModalEsc = evt => {
      if (evt.code === 'Escape') {
        dispatch(closeReducer());
      }
    };

    window.addEventListener('keydown', onCloseModalEsc);
    return () => {
      window.removeEventListener('keydown', onCloseModalEsc);
    };
  }, [closeReducer, dispatch]);

  const onCloseModal = evt => {
    if (evt.currentTarget === evt.target) {
      dispatch(closeReducer());
    }
  };
  const handleCloseModal = () => {
    dispatch(closeReducer());
  };
  const handlerLogout = () => {
    dispatch(logOutThunk());
    dispatch(closeModalLogout());
  };

  return createPortal(
    <div onClick={onCloseModal} className={logout.wrap_modal_logout}>
      <div className={logout.modal_logout}>
        <button onClick={handleCloseModal}></button>
        <h3>Money Guard</h3>
        <p>Are you sure you want to log out?</p>
        <button onClick={handlerLogout}>Logout</button>
        <button onClick={() => dispatch(closeModalLogout())}>Cancel</button>
      </div>
    </div>
  );
};
