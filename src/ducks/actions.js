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
  const key = values[0];
  return {
    type: constants.SET_USER,
    payload: { authenticated: true, user, key },
  };
};

export const removeUser = () => ({
  type: constants.REMOVE_USER,
  payload: { authenticated: false, user: '', key: '' },
});
