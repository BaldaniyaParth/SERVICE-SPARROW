import axios from "axios";
import { BASEURL } from '../baseurl';
export const SERVICEPROVIDER_LIST = "SERVICEPROVIDER_LIST";
export const DELETE_SERVICEPROVIDERLIST = "DELETE_SERVICEPROVIDERLIST";


const ServiceproviderListAction = (payload) => ({ type: SERVICEPROVIDER_LIST, payload: payload });
const DeleteserviceproviderListAction = (payload) => ({ type: DELETE_SERVICEPROVIDERLIST, payload: payload });
 


export const ServiceproviderList = () => {
    const token = localStorage.getItem("token");
    return async (dispatch) => {
        try {
            console.log("tokennnnn", token);
            await axios.get(`${BASEURL}/api/admin/registered-provider`, {
                headers: {
                    authorization: token,
                }
            })
                .then((res) => {
                    console.log("rees", res);
                    dispatch(ServiceproviderListAction(res))
                }).catch((error) => {
                    console.log("error", error);
                    dispatch(ServiceproviderListAction(error?.response))
                });
            console.log("response");

        } catch (error) {
            console.log("error", error)
        }
    }
}

export const DeleteserviceproviderList = (id) => {
    const token = localStorage.getItem("token");
    return async (dispatch) => {
        try {
            console.log("Deleting user with ID:", id);
            await axios.delete(`${BASEURL}/api/admin/user/${id}`, {
                headers: {
                    authorization: token,
                }
            }).then(((res) => {
                console.log("res", res);
                dispatch(ServiceproviderList())
                dispatch(DeleteserviceproviderListAction(res.data));

            })).catch((error) => {
                console.log(error);
                dispatch(DeleteserviceproviderListAction(error?.response));
            });
        } catch (error) {
            console.log('Error category insert:', error);
        }
    }
}

