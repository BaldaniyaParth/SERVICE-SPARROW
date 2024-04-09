import { SERVICES_INSERT, SERVICES_LIST,SERVICES_DELETE, SERVICES_UPDATE, COUSRE_REMOVE_STATE} from "../actions/Services.Action";
const initialState = {
    ServicesCourse: "",
    ServicesInsert: "",
    servicesDelete: "",
    servicesUpdate: ""
}

const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICES_LIST:
            return { ...state, ServicesCourse: action.payload };
        case SERVICES_INSERT:
            return { ...state, ServicesInsert: action.payload };
        case SERVICES_DELETE:
            return { ...state, servicesDelete: action.payload };
        case SERVICES_UPDATE:
            return { ...state, servicesUpdate: action.payload };
        case COUSRE_REMOVE_STATE:
            return { InsertCourse: "", UpdateCourse: "", DeleteCourse: "" };
        default:
            return state;
    }
}

export default servicesReducer;