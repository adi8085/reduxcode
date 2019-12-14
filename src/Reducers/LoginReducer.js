
let initialState = {
    user:{},
};

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';



export default (state=initialState,action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, user:action.payload,userRole: action.payload};
        case REGISTER:
            return {...state, user:action.payload,userRole: action.payload};
       
        default:
            return state;
    }
};