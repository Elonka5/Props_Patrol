import { createSlice } from '@reduxjs/toolkit';
import {
  addNewTransactionThunk,
  deleteTransactionThunk,
  fetchCategoriesThunk,
  fetchCurrencyRatesThunk,
  fetchTransactionsSummaryThunk,
  getTransactionsThunk,
  updateTransactionThunk,
} from './transactionsOperations';

const initialState = {
  transactions: [],
  transactionsCategories: null,
  currencyRates: [],
  transactionSummary: [],
  isLoading: false,
  isError: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.transactions.push(payload);
};

const handleRejected = state => {
  state.isLoading = false;
  state.isError = true;
};

const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;

  state.transactions = payload;
};

const handleFulfilledDelete = (state, { payload }) => {
  console.log(payload);
  state.isLoading = false;
  state.transactions = state.transactions.filter(
    transaction => transaction.id !== payload
  );
};

const handleFulfilledUpdate = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const updatedItem = payload;
  const index = state.transactions.findIndex(
    item => item._id === updatedItem._id
  );
  if (index !== -1) {
    state.transactions[index] = updatedItem;
  }
};

const handleFulfilledCategories = (state, { payload }) => {
  state.isLoading = false;
  state.transactionsCategories = payload;
};

const handleFulfilledTransactionsSummary = (state, { payload }) => {
  state.isLoading = false;
  state.transactionSummary.push(payload);
};

const handleFulfilledCurrencyRates = (state, { payload }) => {
  state.isLoading = false;
  state.currencyRates.push(payload);
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addNewTransactionThunk.pending, handlePending)
      .addCase(addNewTransactionThunk.fulfilled, handleFulfilled)
      .addCase(addNewTransactionThunk.rejected, handleRejected)
      .addCase(getTransactionsThunk.pending, handlePending)
      .addCase(getTransactionsThunk.fulfilled, handleFulfilledGet)
      .addCase(getTransactionsThunk.rejected, handleRejected)
      .addCase(updateTransactionThunk.pending, handlePending)
      .addCase(updateTransactionThunk.fulfilled, handleFulfilledUpdate)
      .addCase(updateTransactionThunk.rejected, handleRejected)
      .addCase(deleteTransactionThunk.pending, handlePending)
      .addCase(deleteTransactionThunk.fulfilled, handleFulfilledDelete)
      .addCase(deleteTransactionThunk.rejected, handleRejected)
      .addCase(fetchCategoriesThunk.pending, handlePending)
      .addCase(fetchCategoriesThunk.fulfilled, handleFulfilledCategories)
      .addCase(fetchCategoriesThunk.rejected, handleRejected)
      .addCase(fetchTransactionsSummaryThunk.pending, handlePending)
      .addCase(
        fetchTransactionsSummaryThunk.fulfilled,
        handleFulfilledTransactionsSummary
      )
      .addCase(fetchTransactionsSummaryThunk.rejected, handleRejected)
      .addCase(fetchCurrencyRatesThunk.pending, handlePending)
      .addCase(fetchCurrencyRatesThunk.fulfilled, handleFulfilledCurrencyRates)
      .addCase(fetchCurrencyRatesThunk.rejected, handleRejected);
  },
});

export const transactionReducer = transactionSlice.reducer;
