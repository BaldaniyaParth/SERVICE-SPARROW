import { COUNT_DATA } from "../actions/Dashboard.action";

const initialState={
    dashboardCount:""
}

const dashboardReducer  = (state = initialState,action) =>{
    switch (action.type){
        case COUNT_DATA:
            return {...state,dashboardCount:action.payload};
        default:
            return state;
    }
}

export default dashboardReducer;