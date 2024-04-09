import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASEURL } from "../baseurl";
export const USER_SIGNUP = "USER_SIGNUP";
export const USER_LOGIN = "USER_LOGIN";
export const USER_FORGOTTPASSWORD = "FORGOTT_PASSWORD";
export const USER_RESETPASSWORD = "RESETPASSWORD";
export const USER_PROFILE = "USER_PROFILE";
export const USER_PROFILE_UPDATE = "USER_PROFILE_UPDATE";
export const USER_PROFILE_PASSWORD_UPDATE = "USER_PROFILE_PASSWORD_UPDATE"
export const USER_HOME_SERVICE = "USER_HOME_SERVICE";
export const USER_CONTACTUS = "USER_CONTACTUS";
export const USER_HOME_SUBSERVICE = "USER_HOME_SUBSERVICE";
export const USER_PROFILE_IMAGE = "USER_PROFILE_IMAGE";
export const USER_STATUS_SERVICEPROVIDER = "USER_STATUS_SERVICEPROVIDER";
export const BOOK_NOW = "BOOK_NOW";
export const USER_ADD_SERVICE = "USER_ADD_SERVICE";
export const SERVICEPROVIDER_NOTIFICATION = "SERVICEPROVIDER_NOTIFICATION";
export const SERVICETAKER_NOTIFICATION = "SERVICETAKER_NOTIFICATION";
export const SERVICETAKER_CONFIRM_NOTIFICATION = "SERVICETAKER_CONFIRM_NOTIFICATION";
export const SERVICETAKER_PAYMENT = "SERVICETAKER_PAYMENT";
export const SERVICETAKER_REVIEW = "SERVICETAKER_REVIEW";
export const USER_REVIEWS_VIEW = "USER_REVIEWS_VIEW";
export const SERVICETAKER_REJECT_NOTIFICATION =
  "SERVICETAKER_REJECT_NOTIFICATION";
export const USER_DELETE_NOTIFICATION = "USER_DELETE_NOTIFICATION";

const userSignupAction = (payload) => ({ type: USER_SIGNUP, payload: payload });
const userLoginAction = (payload) => ({ type: USER_LOGIN, payload: payload });
const userForgottpasswordAction = (payload) => ({ type: USER_FORGOTTPASSWORD, payload: payload });
const userResetpasswordAction = (payload) => ({ type: USER_RESETPASSWORD, payload: payload });
const userProfileAction = (payload) => ({ type: USER_PROFILE, payload: payload, });
const userProfileUpdateAction = (payload) => ({ type: USER_PROFILE_UPDATE, payload: payload, });
const userProfilePasswordUpdateAction = (payload) => ({ type: USER_PROFILE_PASSWORD_UPDATE, payload: payload, });
const userHomeServiceAction = (payload) => ({ type: USER_HOME_SERVICE, payload: payload, });
const userContactusAction = (payload) => ({ type: USER_CONTACTUS, payload: payload, });
const userHomeSubserviceAction = (payload) => ({ type: USER_HOME_SUBSERVICE, payload: payload, });
const userProfileImageAction = (payload) => ({ type: USER_PROFILE_IMAGE, payload: payload, });
const userStatusserviceproviderAction = (payload) => ({ type: USER_STATUS_SERVICEPROVIDER, payload: payload, });
const booknowAction = (payload) => ({ type: BOOK_NOW, payload: payload, });
const serviceProviderNotificationAction = (payload) => ({ type: SERVICEPROVIDER_NOTIFICATION, payload: payload, });
const userAddServiceAction = (payload) => ({ type: USER_ADD_SERVICE, payload: payload, });
const serviceTakerNotificationAction = (payload) => ({ type: SERVICETAKER_NOTIFICATION, payload: payload, });
const serviceConfirmTakerNotificationAction = (payload) => ({ type: SERVICETAKER_CONFIRM_NOTIFICATION, payload: payload, });
//Reject servitaker  notification
const serviceRejectTakerNotificationAction = (payload) => ({
  type: SERVICETAKER_REJECT_NOTIFICATION,
  payload: payload,
});
const serviceTakerPaymentAction = (payload) => ({ type: SERVICETAKER_PAYMENT, payload: payload, });
const serviceTakerReviewAction = (payload) => ({ type: SERVICETAKER_REVIEW, payload: payload, });
const userReviewsViewAction = (payload) => ({
  type: USER_REVIEWS_VIEW,
  payload: payload,
});
// serice provider reject's response done
const userdeletenoficationAction = (payload) => ({
  type: USER_DELETE_NOTIFICATION,
  payload: payload,
});




export const userSignup = (payload) => {
  console.log("payload", payload);
  return async (dispatch) => {
    try {
      const response = await axios
        .post(`${BASEURL}/api/user/register`, payload)
        .then((res) => {
          console.log("res!@#", res);
          dispatch(userSignupAction(res));
        })
        .catch((error) => {
          console.log("error", error);
          dispatch(userSignupAction(error?.response));
        });

      console.log("responser", response);
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const userLogin = (payload) => {
  console.log("payload", payload);
  return async (dispatch) => {
    try {
      const response = await axios
        .post(`${BASEURL}/api/user/login`, payload)
        .then((res) => {
          console.log("res!@#");
          localStorage.setItem("token", res?.data?.token);
          localStorage.setItem("user", JSON.stringify(res?.data?.user));
          localStorage.setItem("role", res?.data?.user?.role);
          console.log("ress======", res?.data?.user);
          toast.success("Login Successfully!");
          window.location.href = "/";
          dispatch(userLoginAction(res));
        })
        .catch((error) => {
          console.log("error", error);
          // toast.error("Please Enter valid information");
          const errorMessage =
            error?.response?.data?.message || "An error occurred";
          toast.error(errorMessage);
          dispatch(userLoginAction(error?.response));
        });
      console.log("responser", response);
    } catch (error) {
      console.log("error of login", error);
    }
  };
};

export const userForgottpassword = (payload) => {
  console.log("payload", payload);
  return async (dispatch) => {
    try {
      const response = await axios
        .post(`${BASEURL}/api/user/password/forgot`, payload)
        .then((res) => {
          console.log("res!@#", res);
          dispatch(userForgottpasswordAction(res));
        })
        .catch((error) => {
          console.log("error", error);
          dispatch(userForgottpasswordAction(error?.response));
        });

      console.log("responser", response);
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const userResetpassword = (payload, token) => {
  console.log("payload", payload);
  return async (dispatch) => {
    try {
      const response = await axios
        .put(`${BASEURL}/api/user/password/reset/${token}`, payload)
        .then((res) => {
          console.log("res!@#", res);
          dispatch(userResetpasswordAction(res));
        })
        .catch((error) => {
          console.log("error", error);
          dispatch(userResetpasswordAction(error?.response));
        });

      console.log("responser", response);
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const userProfile = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  return async (dispatch) => {
    try {
      const response = await axios
        .get(`${BASEURL}/api/user/me/${user?._id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("res!@#", res);
          dispatch(userProfileAction(res.data));
        })
        .catch((error) => {
          console.log("error", error);
          dispatch(userProfileAction(error?.response));
        });

      console.log(" response", response);
    } catch (error) {
      console.log("error of the userprofile", error);
    }
  };
};

export const userProfileUpdate = (payload) => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const response = await axios
        .put(`${BASEURL}/api/user/me/update`, payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("res!@#", res);
          dispatch(userProfileUpdateAction(res.data));
        })
        .catch((error) => {
          console.log("error", error);
          dispatch(userProfileUpdateAction(error?.response));
        });

      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const userProfilePasswordUpdate = (payload) => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const response = await axios
        .put(`${BASEURL}/api/user/password/update`, payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("res!@#", res);
          dispatch(userProfilePasswordUpdateAction(res.data));
        })
        .catch((error) => {
          console.log("error", error);
          dispatch(userProfilePasswordUpdateAction(error?.response));
        });

      console.log(" pass update response", response);
    } catch (error) {
      console.log(" no password update error", error);
    }
  };
};

export const userHomeService = () => {
  const token = localStorage.getItem("token");
  //const user = JSON.parse(localStorage.getItem("user"));
  return async (dispatch) => {
    try {
      const response = await axios
        .get(`${BASEURL}/api/serviceCategory/serviceCategories`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("res!@#", res);
          dispatch(userHomeServiceAction(res));
        })
        .catch((error) => {
          console.log("error", error);

          dispatch(userHomeServiceAction(error?.response));
        });

      console.log(" response", response);
    } catch (error) {
      console.log("error of the userprofile", error);
    }
  };
};

export const userContactus = (payload) => {
  const token = localStorage.getItem("token");
  // const user = JSON.parse(localStorage.getItem("user"));
  return async (dispatch) => {
    try {
      const response = await axios
        .post(`${BASEURL}/api/contact/submit`, payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("res of contact us", res);
          dispatch(userContactusAction(res.data));
          toast.success("succesfully");
        })
        .catch((error) => {
          console.log("error", error);
          dispatch(userContactusAction(error?.response));
        });

      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const userProfileImage = (id, payload) => {
  const token = localStorage.getItem("token");
  // const user = JSON.parse(localStorage.getItem("user"));

  return async (dispatch) => {
    try {
      const response = await axios
        .put(`${BASEURL}/api/user/me/updateimage/${id}`, payload, {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: token,
          },
        })
        .then((res) => {
          console.log("res!@#", res);
          dispatch(userProfileImageAction(res.data));
        })
        .catch((error) => {
          console.log("error", error);
          dispatch(userProfileImageAction(error?.response));
        });

      console.log(" pass update response", response);
    } catch (error) {
      console.log(" no password update error", error);
    }
  };
};

export const userHomeSubservice = (id) => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const response = await axios
        .get(`${BASEURL}/api/user/service-providers/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("res!@#", res);
          dispatch(userHomeSubserviceAction(res));
        })
        .catch((error) => {
          console.log("error", error);

          dispatch(userHomeSubserviceAction(error?.response));
        });

      console.log(" response of subservices ", response);
    } catch (error) {
      console.log("subservie eror", error);
    }
  };
};

export const userStatusserviceprovider = (id, payload) => {
  console.log("id----------------------", id, payload);
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    try {
      await axios
        .put(
          `${BASEURL}/api/serviceProvider/updateAvailability/${id}`,
          payload,
          {
            headers: {
              authorization: token,
            },
          }
        )
        .then((res) => {
          console.log("res::::::::::::::::::::", res);
          dispatch(userStatusserviceproviderAction(res.data));
        })
        .catch((error) => {
          console.log("error".error);
          dispatch(userStatusserviceproviderAction(error?.response));
        });
    } catch (error) {
      console.log("error course update", error);
    }
  };
};

export const booknow = (payload) => {
  const token = localStorage.getItem("token");
  console.log("payload", payload);
  return async (dispatch) => {
    try {
      const response = await axios
        .post(`${BASEURL}/api/book/booknow`, payload,
          {
            headers: {
              authorization: token,
            },
          }
        )
        .then((res) => {
          console.log("res!@#", res);
          // toast.success("Booking succesfull");
          dispatch(booknowAction(res));
        })
        .catch((error) => {
          console.log("error", error);
          toast.error("Somthing went wrong!");
          dispatch(booknowAction(error?.response));
        });

      console.log("responser", response);
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const userAddService = (payload) => {
  const token = localStorage.getItem("token");
  // const user = JSON.parse(localStorage.getItem("user"));
  return async (dispatch) => {
    try {
      const response = await axios
        .put(`${BASEURL}/api/serviceProvider/details`, payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("res of add services", res);
          dispatch(userAddServiceAction(res.data));
          toast.success("Add Detail Succesfully");
        })
        .catch((error) => {
          console.log("error", error);
          dispatch(userAddServiceAction(error?.response));
          toast.error("Something Went Wrong");
        });

      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const serviceProviderNotification = () => {
  const token = localStorage.getItem("token");
  //const user = JSON.parse(localStorage.getItem("user"));
  return async (dispatch) => {
    try {
      const response = await axios
        .get(`${BASEURL}/api/notification/serviceTaker`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("res!@#", res);
          dispatch(serviceProviderNotificationAction(res));
        })
        .catch((error) => {
          console.log("error", error);

          dispatch(serviceProviderNotificationAction(error?.response));
        });

      console.log(" response ofhhh ", response);
    } catch (error) {
      console.log("subservie eror", error);
    }
  };
};

export const serviceTakerNotification = () => {
  const token = localStorage.getItem("token");
  //const user = JSON.parse(localStorage.get4Item("user"));
  return async (dispatch) => {
    try {
      const response = await axios
        .get(`${BASEURL}/api/notification/serviceProvider`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("res!@#", res);
          dispatch(serviceTakerNotificationAction(res));
        })
        .catch((error) => {
          console.log("error", error);
          dispatch(serviceTakerNotificationAction(error?.response));
        });

      console.log(" response", response);
    } catch (error) {
      console.log("error of the userprofile", error);
    }
  };
};

export const serviceConfirmTakerNotification = (notificationId, payload) => {
  const token = localStorage.getItem("token");
  //const user = JSON.parse(localStorage.getItem("user"));
  return async (dispatch) => {
    try {
      const response = await axios
        .post(
          `${BASEURL}/api/notification/processNotification/${notificationId}/accept`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        )
        .then((res) => {
          console.log("res!@#", res);
          dispatch(serviceConfirmTakerNotificationAction(res));
        })
        .catch((error) => {
          console.log("error", error);

          dispatch(serviceConfirmTakerNotificationAction(error?.response));
        });

      console.log(" response confirm", response);
    } catch (error) {
      console.log("error of the confrim noti", error);
    }
  };
};

export const serviceRejectTakerNotification = (notificationId, payload) => {
  const token = localStorage.getItem("token");
  //const user = JSON.parse(localStorage.getItem("user"));
  return async (dispatch) => {
    try {
      const response = await axios
        .post(
          `${BASEURL}/api/notification/processNotification/${notificationId}/reject`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        )
        .then((res) => {
          console.log("res!@#", res);
          dispatch(serviceRejectTakerNotificationAction(res));
        })
        .catch((error) => {
          console.log("error", error);

          dispatch(serviceRejectTakerNotificationAction(error?.response));
        });

      console.log(" response confirm", response);
    } catch (error) {
      console.log("error of the confrim noti", error);
    }
  };
};

export const serviceTakerPayment = (id, payload) => {
  const token = localStorage.getItem("token");
  console.log(payload, "payload000");
  console.log(id, "idkrins");
  //const user = JSON.parse(localStorage.getItem("user"));
  return async (dispatch) => {
    try {
      const response = await axios
        .post(`${BASEURL}/api/payment/order/${id}`, payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("res!@#", res);

          dispatch(serviceTakerPaymentAction(res));
        })
        .catch((error) => {
          console.log("error", error);

          dispatch(serviceTakerPaymentAction(error?.response));
        });

      console.log(" response confirm", response);
    } catch (error) {
      console.log("error of the confrim noti", error);
    }
  };
};

//service taker feedback
export const serviceTakerReview = (payload) => {
  console.log("payload", payload);
  return async (dispatch) => {
    try {
      const response = await axios
        .post(`${BASEURL}/api/review/reviews`, payload)
        .then((res) => {
          console.log("res!@#", res);
          dispatch(serviceTakerReviewAction(res));
        })
        .catch((error) => {
          console.log("error", error);
          dispatch(serviceTakerReviewAction(error?.response));
        });

      console.log("responser", response);
    } catch (error) {
      console.log("error", error);
    }
  };
};


//user review view
export const userReviewsView = () => {
  const token = localStorage.getItem("token");
  //const user = JSON.parse(localStorage.getItem("user"));
  return async (dispatch) => {
    try {
      const response = await axios
        .get(`${BASEURL}/api/review/allreview`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("res!@#", res);
          dispatch(userReviewsViewAction(res));
        })
        .catch((error) => {
          console.log("error", error);

          dispatch(userReviewsViewAction(error?.response));
        });

      console.log(" response", response);
    } catch (error) {
      console.log("error of the userprofile", error);
    }
  };
};

export const userdeletenofication = (id) => {
  const token = localStorage.getItem("token");
  console.log(id, "krinsss");
  //const user = JSON.parse(localStorage.getItem("user"));
  return async (dispatch) => {
    try {
      const response = await axios
        .delete(`${BASEURL}/api/notification/delete/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("res!@#", res);
          dispatch(userdeletenoficationAction(res));
        })
        .catch((error) => {
          console.log("error", error);

          dispatch(userdeletenoficationAction(error?.response));
        });

      console.log(" response", response);
    } catch (error) {
      console.log("error of the userprofile", error);
    }
  };
};
