import { Button } from 'components/Button/Button';
import css from './Modal.module.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export default function Modal({ onClick = () => {} }) {
  return (
    <>
      <h3 className={css.title}>Add transaction</h3>
      <div className={css.wrapper}>
        <p className={css.add_transaction}>Income</p>
        <span className={css.switch_btn}>
          <AiOutlinePlus className={css.plus} />
          <AiOutlineMinus className={css.minus} />
        </span>
        <p className={css.add_transaction}>Expense</p>
      </div>
      <select className={css.selector} placeholder="Select a category">
        <input />
      </select>
      <div className={css.select_wrapper}>
        <select className={css.select}></select>
        <select className={css.select}></select>
      </div>
      <textarea className={css.selector}></textarea>

      <Button type="button" variant="primary" text="Add" />
      <span className={css.btn_wrapper}></span>
      <Button
        type="button"
        onClick={onClick}
        variant="secondary"
        text="Cancel"
      />
    </>
  );
}
