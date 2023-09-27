import useToggleModal from '../TransactionForm/TransactionsFormToggle';
import EditTransactionForm from '../EditTransactionForm/EditTransactionForm';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';

const ModalWindow = ({ btnName }, { item }) => {
  const { closeModal, handleKeyDown, handleBackdropClick } = useToggleModal();

  return (
    <ModalBackdrop
      closeModal={() => closeModal}
      handleKeyDown={handleKeyDown}
      handleBackdropClick={handleBackdropClick}
    >
      {btnName === 'edit' && (
        <EditTransactionForm onClick={closeModal} item={item} />
      )}
      {btnName === 'add' && <AddTransactionForm onClick={closeModal} />}
    </ModalBackdrop>
  );
};

export default ModalWindow;
