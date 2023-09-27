export const selectIsModalAddTransactionOpen = state =>
  state.global.isModalAddTransactionOpen;

export const selectIsModalLogoutOpen = state => state.global.isModalLogoutOpen;

export const selectIsLoadingGlobal = state => state.global.isLoading;

export const selectIsOpen = state => state.global.isOpen;

export const selectEditTransaction = state => state.global.editTransaction;

export const selectIsModalDeleteTransactionOpen = state =>
  state.global.isModalDeleteTransactionOpen;

export const selectBtnName = state => state.global.btnName;
