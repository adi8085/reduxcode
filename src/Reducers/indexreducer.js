import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import LoginReducer from './LoginReducer';


// import List from './list';
// import HOMECONTENT from './homecontent';
// import GETSERVICEDATA from './servicedata';
// import GETGALLERYDATA from './servicedata';


export default combineReducers({
    LoginReducer,
});