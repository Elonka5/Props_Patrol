import { Button } from 'components/Button/Button';
import css from './AddTransactionForm.module.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';

export default function Modal({ onClick = () => {} }) {
  const [add, setAdd] = useState(false);

  return (
    <>
      <h3 className={css.title}>Add transaction</h3>
      <div className={css.wrapper}>
        <p
          className={`${css.add_transaction} ${add && css.active_income}`}
          name="income"
        >
          Income
        </p>
        <span className={css.switch_btn} onClick={() => setAdd(!add)}>
          <AiOutlinePlus className={`${css.plus} ${add && css.plus_active}`} />
          <AiOutlineMinus
            className={`${css.minus} ${!add && css.minus_active}`}
          />
        </span>
        <p
          className={`${css.add_transaction} ${!add && css.active_expense}`}
          name="expense"
        >
          Expense
        </p>
      </div>
      <select
        className={`${css.select_category} ${add && css.select_category_none}`}
        placeholder="Select a category"
      >
        <option>"Select a category1"</option>
        <option>"Select a category2"</option>
        <option>"Select a category3"</option>
      </select>
      <div className={css.select_wrapper}>
        <textarea className={css.select_text}></textarea>
        <textarea className={css.select_text}></textarea>
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
