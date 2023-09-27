export const selectIsModalAddTransactionOpen = state =>
  state.global.isModalAddTransactionOpen;

export const selectIsModalLogoutOpen = state => state.global.isModalLogoutOpen;

export const selectIsLoadingGlobal = state => state.global.isLoading;

export const selectIsModalEditTransactionOpen = state =>
  state.global.isModalEditTransactionOpen;

export const selectEditTransaction = state => state.global.editTransaction;

export const selectIsModalDeleteTransactionOpen = state =>
  state.global.isModalDeleteTransactionOpen;

export const selectIsModalAddOpen = state => state.global.isModalAddOpen;

export const selectIsModalEditOpen = state => state.global.isModalEditOpen;
