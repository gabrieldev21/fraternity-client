export type IAction<T> = {
  type: string,
  payload?: T,
};
