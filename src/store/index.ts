import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './reducers';
import Middlewares from './middlewares';

// eslint-disable-next-line prettier/prettier
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default createStore(rootReducer, composeEnhancers(applyMiddleware(...Middlewares)));
