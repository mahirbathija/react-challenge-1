import { SET_USER, REMOVE_USER } from 'ducks/types';

const userState = {
  authenticated: false,
  key: '',
  user: '',
};
export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case SET_USER:
    case REMOVE_USER:
      return { ...state, authenticated: true, key: action.payload.key, user: action.payload.user };
    default:
      return state;
  }
};
