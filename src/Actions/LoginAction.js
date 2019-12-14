import {
    loginService,
    RegisterService
  } from '../Services/LoginService';
  import {
    LOGIN,
    REGISTER
    
  } from '../Reducers/LoginReducer'

import {history} from '../Store/store';

export const login = loginData => {
 
  // return dispatch =>{
  //   dispatch ({type: LOGIN, payload:"data"});
  // }

    return dispatch => {
    
      loginService (loginData)
      .then (res => {
        console.log(res);
        dispatch ({type: LOGIN, payload: res.data});
          alert("Wirking")
       

      })
      .catch (err => {
        throw err;
      });
    console.log ('Login is running');
   };
};

export const register = registerData => {
 

    return dispatch => {
    
      RegisterService (registerData)
      .then (res => {
        console.log(res);
        dispatch ({type: REGISTER, payload: res.data});
          alert("Wirking")
       

      })
      .catch (err => {
        throw err;
      });
    console.log ('Login is running');
   };
};

