import { combineReducers } from "redux";
import adminReducer from "./Admin.reducer";
import categoryReducer from "./Category.reducer";
import servicesReducer from "./Services.reducer";
import userReducer from "./user.reducer";
import serviceproviderReducer from "./Serviceprovider.reducer";
import dashboardReducer from "./Dashboard.reducer";
import carriculumReducer from "./Curriculum.reducer";
import contactReducer from "./Contact.reducer";
import bookingReducer from "./Booking.reducer";
import userreviewReducer from "./Review.reducer";


const rootReducer = combineReducers({
    admin: adminReducer,
    category: categoryReducer,
    services: servicesReducer,
    user: userReducer,
    contact: contactReducer,
    booking: bookingReducer,
    serviceprovider:serviceproviderReducer,
    dashboard: dashboardReducer,
    carriculum: carriculumReducer,
    userreview: userreviewReducer
})

export default rootReducer; 