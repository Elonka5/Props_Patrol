import useToggleModal from './TransactionsFormToggle';
// import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';
import EditTransactionForm from '../EditTransactionForm/EditTransactionForm';
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
          <EditTransactionForm onClick={closeModal} item={item} />
        </ModalBackdrop>
      )}
    </div>
  );
};
