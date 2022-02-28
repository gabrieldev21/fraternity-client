import { createReducer } from 'utils/redux-utils';

import { IAction } from '../types';
import { LOGOUT_USER, SET_USER, State, UserAuthResponse } from './types';

const initialState: State = { ...JSON.parse(localStorage.getItem('user') || '{}') };

export default createReducer(initialState, {
  [SET_USER]: (state, action: IAction<UserAuthResponse>) => ({
    ...state,
    token: action.payload?.token,
  }),
  [LOGOUT_USER]: () => ({}),
});
