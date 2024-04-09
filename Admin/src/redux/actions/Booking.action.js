import axios from "axios";
import { BASEURL } from '../baseurl';
export const SERVICEPROVIDERPAYMENT_LIST="SERVICEPROVIDERPAYMENT_LIST ";
export const SERVICEPROVIDERPAYMENT = "SERVICEPROVIDERPAYMENT ";

const ServiceproviderpaymentListAction = (payload) => ({ type: SERVICEPROVIDERPAYMENT_LIST, payload: payload });
const ServiceproviderpaymentAction = (payload) => ({ type: SERVICEPROVIDERPAYMENT, payload: payload });

export const ServiceproviderpaymentList= (id) => {
    const token = localStorage.getItem("token");
    return async (dispatch) => {
        try {
            console.log("tokennnnn", token);
          
      
            await axios.get(`${BASEURL}/api/notification/admin/${id}`, {
                headers: {
                    authorization: token,
                }
            })
                .then((res) => {
                    console.log("rees", res);
                    dispatch(ServiceproviderpaymentListAction(res))
                }).catch((error) => {
                    console.log("error", error);
                    dispatch(ServiceproviderpaymentListAction(error?.response))
                });
            console.log("response");

        } catch (error) {
            console.log("error", error)
        }
    }
}

export const Serviceproviderpayment = (notificationId, serviceProviderId, payload) => {
    // console.log("id...", id, payload);
    const token = localStorage.getItem("token");
    return async (dispatch) => {
      try {
        await axios
          .post(
            `${BASEURL}/api/payment/adminpay/${notificationId}/${serviceProviderId}`,
            payload,
            {
              headers: {
                authorization: token,
              },
            }
          )
          .then((res) => {
            console.log("res", res);
            dispatch(ServiceproviderpaymentAction(res.data));
          })
          .catch((error) => {
            console.log("error".error);
            dispatch(ServiceproviderpaymentAction(error?.response));
          });
      } catch (error) {
        console.log("error course update", error);
      }
    };
  };