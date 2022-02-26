import { combineReducers } from 'redux';
import user from '../modules/user/reducer';

const reducer = combineReducers({ user });

export default reducer;
