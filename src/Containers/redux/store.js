import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';
import { save, load } from "redux-localstorage-simple";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWhitMiddleware = applyMiddleware(
    save(),
)(createStore);

const store = createStoreWhitMiddleware(
    reducer,
    load(),
    composeEnhancers()
);

export default store;