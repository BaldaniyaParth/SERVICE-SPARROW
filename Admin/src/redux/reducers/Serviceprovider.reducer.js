import { SERVICEPROVIDER_LIST,DELETE_SERVICEPROVIDERLIST} from "../actions/Serviceprovideraction";

const initialState = {
    Listserviceprovider: "",
    Deleteserviceproviderlist: "",
  
}

const serviceproviderReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SERVICEPROVIDER_LIST:
            return { ...state, Listserviceprovider: action.payload };
         case DELETE_SERVICEPROVIDERLIST:
            return { ...state, Deleteserviceproviderlist: action.payload };
      
        default:
            return state;
    }
}

export default serviceproviderReducer;