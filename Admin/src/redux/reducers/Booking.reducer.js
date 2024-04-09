import { SERVICEPROVIDERPAYMENT_LIST,SERVICEPROVIDERPAYMENT } from "../actions/Booking.action";

const initialState = {
    ServiceproviderpaymentList: "",
    Serviceproviderpayment:""
}


const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICEPROVIDERPAYMENT_LIST:
            return { ...state, ServiceproviderpaymentList: action.payload };
        case SERVICEPROVIDERPAYMENT:
            return { ...state, Serviceproviderpayment: action.payload };
          
        default:
            return state;
    }
}

export default bookingReducer;