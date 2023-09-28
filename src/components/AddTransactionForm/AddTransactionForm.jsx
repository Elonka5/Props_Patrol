import { Button } from 'components/Button/Button';
import css from './AddTransactionForm.module.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTransactionThunk } from 'redux/transactionsOperations';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Modal({ onClick = () => {} }) {
  const [add, setAdd] = useState(false);
  const categories = useSelector(
    state => state.transaction.transactionsCategories
  );
  const [startDate, setStartDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const [expenseTransaction, setExpenseTransaction] = useState({
    transactionDate: startDate.toISOString(),
    type: 'EXPENSE',
    categoryId: '',
    comment: '',
    amount: amount,
  });

  const handleChangeDate = date => {
    setStartDate(date);
  };

  const HandleChangeAmount = e => {
    setAmount(e.target.value);
  };
  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name);
    setExpenseTransaction(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmitAdd = e => {
    e.preventDefault();
    const amountNumber = parseFloat(expenseTransaction.amount);
    const updatedExpenseTransaction = {
      ...expenseTransaction,
      amount: amountNumber,
    };
    console.log(updatedExpenseTransaction);
    dispatch(addNewTransactionThunk(updatedExpenseTransaction));
  };

  return (
    <div>
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
      <form onChange={handleChange}>
        <select
          name="categoryId"
          className={`${css.select_category} ${
            add && css.select_category_none
          }`}
          placeholder="Select a category"
        >
          {categories.map(category => {
            return (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        <div className={css.select_wrapper}>
          <textarea
            name="amount"
            onChange={HandleChangeAmount}
            className={css.select_text}
          ></textarea>
          <DatePicker
            name="transactionDate"
            className={css.select_text}
            selected={startDate}
            onChange={handleChangeDate}
            value={startDate}
          />
        </div>
        <textarea name="comment" className={css.selector}></textarea>
        <Button
          type="submit"
          variant="primary"
          text="Add"
          onClick={handleSubmitAdd}
        />
        <span className={css.btn_wrapper}></span>
        <Button
          type="button"
          onClick={onClick}
          variant="secondary"
          text="Cancel"
        />
      </form>
    </div>
  );
}
