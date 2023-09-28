import React from 'react';
import css from './Balance.module.css';
import { useSelector } from 'react-redux';

export function formatMoney(num) {
  const arr = Number(num)
    .toLocaleString('en', {
      useGrouping: true,
    })
    .replace(',', ' ')
    .split(' ');
  if (arr[arr.length - 1].includes('.')) {
    if (arr[arr.length - 1].length > 6) {
      arr[arr.length - 1] = arr[arr.length - 1].slice(0, 6);
      return arr.join(' ');
    }
    if (arr[arr.length - 1].length === 6) {
      return arr.join(' ');
    }
    if (arr[arr.length - 1].length === 5) {
      arr[arr.length - 1] = arr[arr.length - 1] + '0';
      return arr.join(' ');
    }
  }
  arr[arr.length - 1] = arr[arr.length - 1] + '.00';
  return arr.join(' ');
}

export const Balance = () => {
  const balance = useSelector(state => state.auth.user.balance);

  return (
    <>
      <div className={css.balanceBox}>
        <p className={css.balanceTitle}>Your balance</p>
        <p className={css.balance}>
          <span className={css.uah}>&#8372;</span> {formatMoney(balance)}
        </p>
      </div>
    </>
  );
};
