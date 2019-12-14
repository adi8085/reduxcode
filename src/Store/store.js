

import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import browserHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import IndexReducer from '../Reducers/indexreducer';



export const history = browserHistory();
const enhancers=[];

const persistConfig = {
key: 'root',
storage,
}

const persistedReducer = persistReducer(persistConfig, IndexReducer)

const middleware=[
thunk,
routerMiddleware(history),
];
if (process.env.NODE_ENV === 'development') {
const devToolsExtension = window.devToolsExtension;

if (typeof devToolsExtension === 'function') {
enhancers.push(devToolsExtension())
}
}
const composeEnhancers = compose(
applyMiddleware(...middleware),
...enhancers
);

const store = createStore(persistedReducer,composeEnhancers);
export const persistor = persistStore(store);

export default store;