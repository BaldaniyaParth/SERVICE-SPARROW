import { LOGIN_ADMIN} from "../actions/Admin.action";

const initialState = {
    LoginAdmin: "",
  
  };

const adminReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_ADMIN: 
            return { ...state, LoginAdmin: action.payload };
        default:
            return state;
    }   
};

export default adminReducer;