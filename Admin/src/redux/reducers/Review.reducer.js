import { USER_REVIEWLIST,DELETE_USERREVIEWLIST } from "../actions/Review.action";
const initialState = {
    Listreviewuser: "",
    Deleteuserreviewlist:""
}

const userreviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REVIEWLIST:
            return { ...state, Listreviewuser: action.payload };
            case DELETE_USERREVIEWLIST:
                return { ...state, Deleteuserreviewlist: action.payload };
        default:
            return state;
    }
}

export default userreviewReducer;