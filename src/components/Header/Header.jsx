import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { closeModalLogout, openModalLogout } from 'redux/globalSlice';
import { selectIsModalLogOut } from 'redux/selectors';
import styledheader from '../Header/Header.module.css';
import { ModalLogout } from 'components/Modal/ModalLogout';
import { IoExitOutline } from 'react-icons/io5';
import moneyLogo from 'assets/images/moneyGuardLogo.svg';

const Header = () => {
  const isModalShow = useSelector(selectIsModalLogOut);
  console.log(isModalShow);
  const isMobilesize = useMediaQuery({ query: '(max-width:767px)' });
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(openModalLogout());
  };

  return (
    <>
      <header className={styledheader.header}>
        <div className={styledheader.wrap_header}>
          <img
            className={styledheader.header_logo}
            src={moneyLogo}
            alt="MoneyGuard Logo"
          />
          <p className={styledheader.header_text}>Money Guard</p>
        </div>
        <div className={styledheader.wrap_btn}>
          <span className={styledheader.user_name_header}>Name</span>
          <button onClick={handleLogout} className={styledheader.header_btn}>
            <IoExitOutline className={styledheader.header_svg} />
            {isMobilesize ? '' : 'Exit'}
          </button>
        </div>
      </header>
      {/* <ModalLogout /> */}

      {/* {isModalShow && (
        <ModalBackLog closeReducer={closeModalLogout}>
          <ModalLogout />
        </ModalBackLog>
      )} */}
      {isModalShow && (
        <ModalLogout closeReducer={() => dispatch(closeModalLogout())} />
      )}
    </>
  );
};

export default Header;
