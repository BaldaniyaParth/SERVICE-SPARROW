import { CATEGORY_DELETE, CATEGORY_GET_BY_ID, CATEGORY_INSERT, CATEGORY_LIST, CATEGORY_UPDATE, REMOVE_STATE } from "../actions/Category.action";


const initialState = {
    InsertCategory: "",
    UpdateCategory: "",
    DeleteCategory: "",
    GetByIdCategory: "",
    ListCategory: ""
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_INSERT:
            return { ...state, InsertCategory: action.payload };
        case CATEGORY_UPDATE:
            return { ...state, UpdateCategory: action.payload };
        case CATEGORY_DELETE:
            return { ...state, DeleteCategory: action.payload };
        case CATEGORY_GET_BY_ID:
            return { ...state, GetByIdCategory: action.payload };
        case CATEGORY_LIST:
            return { ...state, ListCategory: action.payload };
        case REMOVE_STATE:
            return { InsertCategory: "", UpdateCategory: "", DeleteCategory: "" }
        default:
            return state;
    }
};

export default categoryReducer;