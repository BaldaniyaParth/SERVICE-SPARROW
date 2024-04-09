import axios from "axios";
import { BASEURL } from '../baseurl';
export const USER_REVIEWLIST = "USER_REVIEWLIST";
export const DELETE_USERREVIEWLIST = "DELETE_USERREVIEWLIST";

const userreviewListAction = (payload) => ({ type: USER_REVIEWLIST, payload: payload });
const DeleteuserreviewListAction = (payload) => ({ type: DELETE_USERREVIEWLIST, payload: payload });

export const userreviewList = () => {
    const token = localStorage.getItem("token");
    return async (dispatch) => {
        try {
            console.log("tokennnnn", token);
            await axios.get(`${BASEURL}/api/review/allreview`, {
                headers: {
                    authorization: token,
                }
            })
                .then((res) => {
                    console.log("rees", res);
                    dispatch(userreviewListAction(res))
                }).catch((error) => {
                    console.log("error", error);
                    dispatch(userreviewListAction(error?.response))
                });
            console.log("response");

        } catch (error) {
            console.log("error", error)
        }
    }
}

export const DeleteuserreviewList = (id) => {
    const token = localStorage.getItem("token");
    return async (dispatch) => {
        try {
            console.log("Deleting user with ID:", id);
            await axios.delete(`${BASEURL}/api/review/deleteReview/${id}`, {
                headers: {
                    authorization: token,
                }
            }).then(((res) => {
                console.log("res", res);
                dispatch(userreviewList())
                dispatch(DeleteuserreviewListAction(res.data));
            })).catch((error) => {
                console.log(error);
                dispatch(DeleteuserreviewListAction(error?.response));
            });
        } catch (error) {
            console.log('Error category insert:', error);
        }
    }
}