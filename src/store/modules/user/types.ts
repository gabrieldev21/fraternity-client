// Action Types
export const SET_USER = 'SET_USER';
export const LOGOUT_USER = 'USER/LOGOUT';

export interface State {
  token?: string;
}

export interface UserCredential {
  email: string;
  password: string;
}

export interface UserAuthResponse {
  _id: string;
  token: string;
  photo: string;
  role: string;
}
