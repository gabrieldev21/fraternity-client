/* eslint-disable @typescript-eslint/ban-types */
import { createReducer } from 'utils/redux-utils';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import api from 'utils/api';
// import { IAction } from './types';

// Action Types
const SET_USER = 'SET_USER';
const LOGOUT_USER = 'USER/LOGOUT';

// Action Creators
const setUser = (payload: UserAuthResponse) => ({ type: SET_USER, payload });
const logoutUser = () => ({ type: LOGOUT_USER });

interface UserCredential {
  email: string;
  password: string;
}

type IAction<T> = {
  type: string,
  payload?: T,
};

interface UserAuthResponse {
  token: string;
}

export const authentication =
  ({ email, password }: UserCredential): ThunkAction<Promise<boolean>, {}, {}, AnyAction> =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const { data } = await api.post<UserAuthResponse>('auth/token', { email, password });
      localStorage.setItem('email', JSON.stringify(data));
      dispatch(setUser(data));
      console.log(data);
      return true;
    } catch (e) {
      alert('Deu merda');
      return false;
    }
  };

export const logout = () => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  localStorage.removeItem('token');
  dispatch(logoutUser());
};

// Initial State
export interface State {
  authenticated: boolean;
  token?: string;
}

const initialState: State = { authenticated: false };

// Reducer
// export default createReducer(initialState, {
//   [LOGOUT_USER]: () => initialState,
// });

export default createReducer(initialState, {
  [SET_USER]: (state, action: IAction<UserAuthResponse>) => ({
    ...state,
    authenticated: true,
    token: action.payload?.token,
  }),
});
