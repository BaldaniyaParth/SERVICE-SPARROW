import { USER_SIGNUP, USER_LOGIN, USER_FORGOTTPASSWORD, USER_RESETPASSWORD, USER_PROFILE, USER_PROFILE_UPDATE, USER_HOME_SUBSERVICE, USER_PROFILE_PASSWORD_UPDATE, USER_HOME_SERVICE, USER_CONTACTUS, USER_PROFILE_IMAGE, USER_STATUS_SERVICEPROVIDER, BOOK_NOW, USER_ADD_SERVICE, SERVICEPROVIDER_NOTIFICATION, SERVICETAKER_NOTIFICATION, SERVICETAKER_CONFIRM_NOTIFICATION, SERVICETAKER_PAYMENT, SERVICETAKER_REVIEW, USER_REVIEWS_VIEW,   SERVICETAKER_REJECT_NOTIFICATION,   USER_DELETE_NOTIFICATION,} from "../action/user.action";

export const initialState = {
    userSignup: "",
    userLogin: "",
    userForgottpassword: "",
    userResetpassword: "",
    userProfile: "",
    userProfileUpdate: "",
    userProfilePasswordUpdate: "",
    userHomeService: "",
    userContactus: "",
    userHomeSubservice: "",
    userProfileImage: "",
    userStatusserviceprovider: "",
    serviceTakerNotification: "",
    serviceConfirmTakerNotification: "",
    booknow: "",
    userAddService: "",
    serviceProviderNotification: "",
    serviceTakerPayment: "",
    serviceTakerReview:"",
    userReviewsView: "",
    serviceRejectTakerNotification: "",
    userdeletenofication:"",
}

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGNUP:
            return { ...state, userSignup: action.payload };
        case USER_LOGIN:
            return { ...state, userLogin: action.payload };
        case USER_FORGOTTPASSWORD:
            return { ...state, userForgottpassword: action.payload };
        case USER_RESETPASSWORD:
            return { ...state, userResetpassword: action.payload };
        case USER_PROFILE:
            return { ...state, userProfile: action.payload };
        case USER_PROFILE_UPDATE:
            return { ...state, userProfileUpdate: action.payload };
        case USER_PROFILE_PASSWORD_UPDATE:
            return { ...state, userProfilePasswordUpdate: action.payload };
        case USER_HOME_SERVICE:
            return { ...state, userHomeService: action.payload };
        case USER_CONTACTUS:
            return { ...state, userContactus: action.payload };
        case USER_HOME_SUBSERVICE:
            return { ...state, userHomeSubservice: action.payload };
        case USER_PROFILE_IMAGE:
            return { ...state, userProfileImage: action.payload };
        case USER_STATUS_SERVICEPROVIDER:
            return { ...state, userStatusserviceprovider: action.payload };
        case BOOK_NOW:
            return { ...state, booknow: action.payload };
        case USER_ADD_SERVICE:
            return { ...state, userAddService: action.payload };
        case SERVICEPROVIDER_NOTIFICATION:
            return { ...state, serviceProviderNotification: action.payload };
        case SERVICETAKER_NOTIFICATION:
            return { ...state, serviceTakerNotification: action.payload };
        case SERVICETAKER_CONFIRM_NOTIFICATION:
            return { ...state, serviceConfirmTakerNotification: action.payload };
        case SERVICETAKER_PAYMENT:
            return { ...state, serviceTakerPayment: action.payload };
        case SERVICETAKER_REVIEW:
            return { ...state, serviceTakerReview: action.payload };
        case USER_REVIEWS_VIEW:
            return { ...state, userReviewsView: action.payload };
        case SERVICETAKER_REJECT_NOTIFICATION:
            return { ...state, serviceRejectTakerNotification: action.payload };
        case USER_DELETE_NOTIFICATION:
            return { ...state, userdeletenofication: action.payload };
        default:
            return state;
    }
}
export default signUpReducer