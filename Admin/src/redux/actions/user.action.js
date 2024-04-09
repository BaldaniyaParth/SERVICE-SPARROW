import axios from "axios";
import { BASEURL } from '../baseurl';
export const USER_LIST = "USER_LIST";
export const DELETE_USERLIST = "DELETE_USERLIST";

const userListAction = (payload) => ({ type: USER_LIST, payload: payload });
const DeleteuserListAction = (payload) => ({ type: DELETE_USERLIST, payload: payload });

export const userList = () => {
    const token = localStorage.getItem("token");
    return async (dispatch) => {
        try {
            console.log("tokennnnn", token);
            await axios.get(`${BASEURL}/api/admin/registered-taker`, {
                headers: {
                    authorization: token,
                }
            })
                .then((res) => {
                    console.log("rees", res);
                    dispatch(userListAction(res))
                }).catch((error) => {
                    console.log("error", error);
                    dispatch(userListAction(error?.response))
                });
            console.log("response");

        } catch (error) {
            console.log("error", error)
        }
    }
}

export const DeleteuserList = (id) => {
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
                dispatch(userList())
                dispatch(DeleteuserListAction(res.data));
                // dispatch(categoryList());
            })).catch((error) => {
                console.log(error);
                dispatch(DeleteuserListAction(error?.response));
            });
        } catch (error) {
            console.log('Error category insert:', error);
        }
    }
}