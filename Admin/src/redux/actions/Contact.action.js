import axios from "axios";
import { BASEURL } from '../baseurl';
export const CONTACT_LIST = "CONTACT_LIST";
export const CONTACT_UPDATE = "CONTACT_UPDATE";

const ContactListAction = (payload) => ({ type: CONTACT_LIST, payload: payload });
const ContactupdateListAction = (payload) => ({ type: CONTACT_UPDATE , payload: payload });

export const ContactList = () => {
    const token = localStorage.getItem("token");
    return async (dispatch) => {
        try {
            console.log("tokennnnn", token);
            await axios.get(`${BASEURL}/api/admin/message`, {
                headers: {
                    authorization: token,
                }
            })
                .then((res) => {
                    console.log("rees", res);
                    dispatch(ContactListAction(res))
                }).catch((error) => {
                    console.log("error", error);
                    dispatch(ContactListAction(error?.response))
                });
            console.log("response");

        } catch (error) {
            console.log("error", error)
        }
    }
}

export const ContactupdateList = (id,payload) => {
    const token = localStorage.getItem("token");
    return async (dispatch) => {
        try {
            await axios.put(`${BASEURL}/api/admin/message/${id}`, payload, {
                headers: {
                    authorization: token,
                }
            })
                .then((res) => {
                    console.log("res", res);
                    dispatch(ContactList())
                dispatch(ContactupdateListAction(res));
            }).catch((error) => {
                console.log("error".error);
                dispatch(ContactupdateListAction(error?.response));
            });

        } catch (error) {
            console.log("error contact update", error)
        }
    }
}