import useToggleModal from './TransactionsFormToggle';
import Modal from '../Modal/Modal';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';

export const TansactionsForm = ({ item }) => {
  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();

  return (
    <div>
      <button onClick={() => openModal()}>Open Modal</button>

      {isOpen && (
        <ModalBackdrop
          closeModal={() => closeModal}
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
        >
          <Modal onClick={closeModal} item={item}>
            Close
          </Modal>
        </ModalBackdrop>
      )}
    </div>
  );
};
