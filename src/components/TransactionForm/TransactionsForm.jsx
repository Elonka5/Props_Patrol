import { AiOutlinePlus } from 'react-icons/ai';
import css from './TransactionsForm.module.css';
import ModalWindow from '../ModalWindow/ModalWindow';
import { useDispatch, useSelector } from 'react-redux';
import { openModalEditTransaction, setBtnAdd } from 'redux/Global/globalSlices';
import { selectBtnName, selectIsOpen } from 'redux/Global/globalSelectors';

export const TansactionsForm = () => {
  const btnName = useSelector(selectBtnName);

  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);

  return (
    <div>
      <AiOutlinePlus
        className={css.plus}
        onClick={e => {
          dispatch(openModalEditTransaction());
          dispatch(setBtnAdd());
        }}
        name="add"
      />

      {isOpen && <ModalWindow btnName={btnName} />}
    </div>
  );
};
