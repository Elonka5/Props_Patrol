import useToggleModal from './TransactionsFormToggle';
import Modal from '../Modal/Modal';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';
import { AiOutlinePlus } from 'react-icons/ai';
import css from './TransactionsForm.module.css';

export const TansactionsForm = ({ item }) => {
  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();

  return (
    <div>
      <button onClick={() => openModal()}>
        <AiOutlinePlus className={css.plus} />
      </button>

      {isOpen && (
        <ModalBackdrop
          closeModal={() => closeModal}
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
        >
          <Modal onClick={closeModal} item={item}></Modal>
        </ModalBackdrop>
      )}
    </div>
  );
};
