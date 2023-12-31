import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './ModalBackdrop.module.css';
import { RxCross1 } from 'react-icons/rx';

const modalRoot = document.querySelector('#modal-root');

export default function ModalBackdrop({
  children = '',
  handleKeyDown = () => {},
  handleBackdropClick = () => {},
  closeModal = () => {},
}) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
    <div onClick={handleBackdropClick} className={css.backdrop}>
      <div className={css.modal}>
        <button
          type="button"
          onClick={closeModal()}
          aria-label="close modal"
          className={css.close_btn}
        >
          <RxCross1 className={css.cross_btn} />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}
