import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { openModalLogout } from 'redux/globalSlice';
import { selectIsModalLogOut } from 'redux/selectors';
import styledheader from '../Header/Header.module.css';
import { ModalLogout } from 'components/Modal/ModalLogout';

const Header = () => {
  const isModalShow = useSelector(selectIsModalLogOut);
  const isMobilesize = useMediaQuery({ query: '(max-width:767px)' });
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(openModalLogout());
  };

  return (
    <>
      <header className={styledheader.header}>
        <div className={styledheader.wrap_header}>
          <p className={styledheader.header_text}>Money Guard</p>
        </div>
        <div>
          <span className={styledheader.user_name_header}></span>
          <button onClick={handleLogout}>{isMobilesize ? '' : 'Exit'}</button>
        </div>
      </header>
      {isModalShow && <ModalLogout />}
    </>
  );
};

export default Header;
