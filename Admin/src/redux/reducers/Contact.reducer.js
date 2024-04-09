import { CONTACT_LIST,CONTACT_UPDATE } from "../actions/Contact.action";

const initialState = {
    Listcontact: "",
    ContactupdateList:""
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case  CONTACT_LIST:
            return { ...state, Listcontact: action.payload };
         case CONTACT_UPDATE:
                return { ...state, ContactupdateList: action.payload };
        default:
            return state;
    }
}

export default contactReducer;