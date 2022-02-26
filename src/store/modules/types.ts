import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type IAction<T> = {
  type: string,
  payload?: T,
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type DispatchType = ThunkDispatch<{}, {}, AnyAction>;
