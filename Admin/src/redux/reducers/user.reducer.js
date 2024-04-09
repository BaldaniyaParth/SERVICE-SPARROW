import { USER_LIST,DELETE_USERLIST } from '../actions/user.action';

const initialState = {
    Listuser: "",
    Deleteuserlist:""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LIST:
            return { ...state, Listuser: action.payload };
            case DELETE_USERLIST:
                return { ...state, Deleteuserlist: action.payload };
        default:
            return state;
    }
}

export default userReducer;