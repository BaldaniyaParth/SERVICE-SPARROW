import { CARRICULUM_INSERT, CARRICULUM_LIST, CARRICULUM_DELETE, CARRICULUM_UPDATE, QUESTION_INSERT, GET_QUESTION, UPDATE_QUESTION, DELETE_QUESTION, CARRICULUM_REMOVE_STATE } from "../actions/Curriculum.action";

const initialState = {
    InsertCarriculum: "",
    ListCarriculum: "",
    DeleteCarriculum: "",
    UpdateCarriculum: "",
    InsertQuestion: "",
    GetQuestion: "",
    UpdateQuestion: "",
    deleteQuestion: ""
}

const carriculumReducer = (state = initialState, action) => {
    switch (action.type) {
        case CARRICULUM_INSERT:
            return { ...state, InsertCarriculum: action.payload };
        case CARRICULUM_LIST:
            return { ...state, ListCarriculum: action.payload };
        case CARRICULUM_DELETE:
            return { ...state, DeleteCarriculum: action.payload };
        case CARRICULUM_UPDATE:
            return { ...state, UpdateCarriculum: action.payload };
        case QUESTION_INSERT:
            return { ...state, InsertQuestion: action.payload };
        case GET_QUESTION:
            return { ...state, GetQuestion: action.payload };
        case UPDATE_QUESTION:
            return { ...state, UpdateQuestion: action.payload };
        case DELETE_QUESTION:
            return { ...state, deleteQuestion: action.payload };
        case CARRICULUM_REMOVE_STATE:
            return { ...state, InsertCarriculum: "", UpdateCarriculum: "", DeleteCarriculum: "",InsertQuestion:"",UpdateQuestion:"",deleteQuestion:"" };
        default:
            return state;
    }
}

export default carriculumReducer;