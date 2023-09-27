import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
  isLoading: false,
  isOpen: false,
  editTransaction: null,
  isModalDeleteTransactionOpen: false,
  btnName: '',
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
      state.isModalLogoutOpen = true;
    },
    closeModalLogout(state) {
      state.isModalLogoutOpen = false;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    unsetIsLoading(state) {
      state.isLoading = false;
    },
    openModalEditTransaction(state) {
      state.isOpen = true;
    },
    closeModalEditTransaction(state) {
      state.isOpen = false;
    },
    setBtnAdd(state) {
      state.btnName = 'add';
    },
    setBtnEdit(state) {
      state.btnName = 'edit';
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
  setBtnAdd,
  setBtnEdit,
} = globalSlice.actions;
