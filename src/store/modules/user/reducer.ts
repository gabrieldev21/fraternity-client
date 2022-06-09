import { createReducer } from 'utils/redux-utils';

import { IAction } from '../types';
import { LOGOUT_USER, SET_USER, State, UserAuthResponse } from './types';

const initialState: State = { ...JSON.parse(localStorage.getItem('user') || '{}') };

export default createReducer(initialState, {
  [SET_USER]: (state, action: IAction<UserAuthResponse>) => ({
    ...state,
    // eslint-disable-next-line no-underscore-dangle
    id: action.payload?._id,
    token: action.payload?.token,
    ...action.payload,
  }),
  [LOGOUT_USER]: () => ({}),
});
