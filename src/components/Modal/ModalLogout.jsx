import { useDispatch } from 'react-redux';
import { logOutThunk } from 'redux/authOperations';
import { closeModalLogout } from 'redux/globalSlice';
import logout from './ModalLogout.module.css';
import { useEffect } from 'react';
import moneyLogo from 'assets/images/moneyGuardLogo.svg';

// const modalContainer = document.querySelector('modal-logout');

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

  return (
    <div onClick={onCloseModal} className={logout.wrap_modal_logout}>
      <div className={logout.modal_logout}>
        <button
          onClick={handleCloseModal}
          className={logout.btn_close_modal}
        ></button>
        <img
          className={logout.header_logo}
          src={moneyLogo}
          alt="MoneyGuard Logo"
        />
        <h3 className={logout.modal_text}>Money Guard</h3>
        <p className={logout.modal_text}>Are you sure you want to log out?</p>
        <button onClick={handlerLogout} className={logout.btn_logout}>
          Logout
        </button>
        <button
          onClick={() => dispatch(closeModalLogout())}
          className={logout.btn_cancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
