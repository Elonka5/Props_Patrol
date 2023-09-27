import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalAddTransactionOpen: false,
  isModalLogout: false,
  isLoading: false,
  isModalEditTransactionOpen: false,
  editTransaction: null,
  isModalDeleteTransactionOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalAddTransaction(state) {
      state.isModalAddTransactionOpen = true;
    },
    closeModalAddTransaction(state) {
      state.isModalAddTransactionOpen = false;
    },
    openModalLogout(state) {
      state.isModalLogout = true;
    },
    closeModalLogout(state) {
      state.isModalLogout = false;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    unsetIsLoading(state) {
      state.isLoading = false;
    },
    openModalEditTransaction(state) {
      state.isModalEditTransactionOpen = true;
    },
    closeModalEditTransaction(state) {
      state.isModalEditTransactionOpen = false;
    },
    setUpdatedTransaction: (state, { payload }) => {
      state.editTransaction = payload;
    },
    openModalDeleteTransaction(state) {
      state.isModalDeleteTransactionOpen = true;
    },
    closeModalDeleteTransaction(state) {
      state.isModalDeleteTransactionOpen = false;
    },
  },
});

export const globalReducer = globalSlice.reducer;
export const {
  openModalAddTransaction,
  closeModalAddTransaction,
  openModalLogout,
  closeModalLogout,
  setIsLoading,
  unsetIsLoading,
  openModalEditTransaction,
  closeModalEditTransaction,
  setUpdatedTransaction,
  openModalDeleteTransaction,
  closeModalDeleteTransaction,
} = globalSlice.actions;
