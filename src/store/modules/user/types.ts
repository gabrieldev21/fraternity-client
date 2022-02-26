export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCESS = 'USER_LOGIN_SUCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';

export interface IUserState {
  loading?: boolean;
  error?: string;
  userInfo: { email?: string, password?: string };
}
