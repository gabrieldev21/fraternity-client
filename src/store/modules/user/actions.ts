/* eslint-disable @typescript-eslint/ban-types */
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import api from 'utils/api';
import { DispatchType } from '../types';
import { LOGOUT_USER, SET_USER, UserAuthResponse, UserCredential } from './types';

// Action Creators
const setUser = (payload: UserAuthResponse) => ({ type: SET_USER, payload });
const logoutUser = () => ({ type: LOGOUT_USER });

export const authentication =
  ({ email, password }: UserCredential): ThunkAction<Promise<boolean>, {}, {}, AnyAction> =>
  async (dispatch: DispatchType) => {
    try {
      const { data } = await api.post<UserAuthResponse>('auth/token', { email, password });
      localStorage.setItem('user', JSON.stringify(data));
      dispatch(setUser(data));
      return true;
    } catch (e) {
      return false;
    }
  };

export const logout = () => (dispatch: DispatchType) => {
  localStorage.removeItem('user');
  dispatch(logoutUser());
};
