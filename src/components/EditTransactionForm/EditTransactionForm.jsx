import { Button } from 'components/Button/Button';
import css from './EditTransactionForm.module.css';
import { useState } from 'react';

export default function Modal({ onClick = () => {} }) {
  const [add, setAdd] = useState(false);

  return (
    <>
      <h3 className={css.title}>Edit transaction</h3>
      <div className={css.wrapper} onClick={() => setAdd(!add)}>
        <p
          className={`${css.add_transaction} ${add && css.active_income}`}
          name="income"
        >
          Income
        </p>
        <span className={css.span}>/</span>
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
        <select className={css.select}></select>
        <select className={css.select}></select>
      </div>
      <textarea className={css.selector}></textarea>

      <Button type="button" variant="primary" text="Save" />
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
