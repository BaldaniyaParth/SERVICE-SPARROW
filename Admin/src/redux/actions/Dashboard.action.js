import axios from 'axios';
import { BASEURL } from '../baseurl';
export const COUNT_DATA = "COUNT_DATA";

const dashboardCountAction = (payload) => ({ type: COUNT_DATA, payload: payload });

export const dashboardCount = () => {
    const token = localStorage.getItem("token");
    return async (dispatch) => {
        try {
            await axios.get(`${BASEURL}/api/admin/registeredcounts`, {
                headers: {
                    authorization: token,
                }
            })
                .then((res) => { console.log("rews!@#", res); dispatch(dashboardCountAction(res)) })
                .catch((error) => { console.log("error1", error); dispatch(dashboardCountAction(error?.response)) });
        } catch (error) {
            console.log("error", error)
        }
    }
}