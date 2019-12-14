import axios from 'axios';
import store,{history} from '../Store/store';


export const baseURL = "https://jsonplaceholder.typicode.com/posts/";
const baseService = axios.create({baseURL:baseURL});

baseService.interceptors.request.use((config)=>{
const currentState = store.getState();
const { Authreducer } = currentState;

// console.log('authentication token ***** ',Authreducer.authToken)

// if(
// Authreducer &&
// Authreducer.authToken
// ) {
// config.headers['Authorization'] = "Bearer " + Authreducer.authToken;
// }
// return config;
// }, error => {
// return Promise.reject(error);
// });

// baseService.interceptors.response.use((config)=>{
// return config;
// },error => {
// if(error.response && error.response.status === 401){

// if(error.response.data && error.response.data.error){
// createNotification('error', error.response.data.error.message);
// }
// }
});
export default baseService;