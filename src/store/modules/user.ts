import { createReducer } from 'utils/redux-utils';

// Action Types
const LOGOUT = 'USER/LOGOUT';

// Action Creators
export const logout = () => ({ type: LOGOUT });

// Initial State
export interface State {
  authenticated: boolean;
}

const initialState: State = { authenticated: false };

// Reducer
export default createReducer(initialState, {
  [LOGOUT]: () => initialState,
});
