import React from 'react';


import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';



import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, { persistor } from './Store/store';
import Login from './login/Login'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>,
    document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
