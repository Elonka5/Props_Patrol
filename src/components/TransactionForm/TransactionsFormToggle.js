import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModalEditTransaction } from 'redux/Global/globalSlices';

export default function useToggleModal() {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (path = '/') => {
    dispatch(closeModalEditTransaction());
  };
  const toggleModal = () => setIsOpen(isOpen => !isOpen);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      setIsOpen(() => closeModal());
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setIsOpen(() => closeModal());
    }
  };

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
    handleKeyDown,
    handleBackdropClick,
  };
}
