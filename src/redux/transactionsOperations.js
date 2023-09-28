import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addNewTransaction,
  deleteTransaction,
  fetchCategories,
  fetchCurrencyRates,
  fetchTransactionsSummary,
  getTransaction,
  updateTransaction,
} from 'services/api/api';

export const addNewTransactionThunk = createAsyncThunk(
  'transactions/addNewTransaction',
  async transaction => {
    try {
      const { data } = await addNewTransaction(transaction);
      return data;
    } catch (error) {
      console.error('error add new contact', error);
    }
  }
);

export const getTransactionsThunk = createAsyncThunk(
  'transactions/getTransactions',
  async () => {
    try {
      const data = await getTransaction();
      return data;
    } catch (error) {
      console.error('error add new contact', error);
    }
  }
);

export const updateTransactionThunk = createAsyncThunk(
  'transactions/updateTransaction',
  async ({ transactionId, transaction }) => {
    try {
      const { data } = await updateTransaction();
      return data;
    } catch (error) {
      console.error('error add new contact', error);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'transactions/deleteTransaction',
  async transactionId => {
    try {
      await deleteTransaction(transactionId);
      return transactionId;
    } catch (error) {
      console.error('error add new contact', error);
    }
  }
);

export const fetchCategoriesThunk = createAsyncThunk(
  'transactions/fetchCategoriesTransaction',
  async () => {
    try {
      const data = await fetchCategories();
      return data;
    } catch (error) {
      console.error('error add new contact', error);
    }
  }
);

export const fetchTransactionsSummaryThunk = createAsyncThunk(
  'transactions/fetchTransactionsSummary',
  async ({ year, month }) => {
    try {
      const { data } = await fetchTransactionsSummary({ year, month });
      return data;
    } catch (error) {
      console.error('error add new contact', error);
    }
  }
);

export const fetchCurrencyRatesThunk = createAsyncThunk(
  'transactions/fetchCurrencyRates',
  async () => {
    try {
      const data = await fetchCurrencyRates();
      return data;
    } catch (error) {
      console.error('error add new contact', error);
    }
  }
);
