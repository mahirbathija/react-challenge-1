import * as constants from 'ducks/types';

// ------ MODALS ACTIONS ------ //
export const setModal = modal => ({
  type: constants.SET_MODAL,
  payload: modal,
});

// ------ SETTINGS ACTIONS ------ //
export const setLoading = loading => ({
  type: constants.SET_LOADING,
  payload: loading,
});

// ------ USER ACTIONS ------ //
export const setUser = user => {
  const values = new Uint32Array(1);
  const key = window.crypto.getRandomValues(values);
  return {
    type: constants.SET_USER,
    payload: { user, key },
  };
};

export const removeUser = () => ({
  type: constants.REMOVE_USER,
  payload: { user: '', key: '' },
});
