import axios from "axios";
import { BASEURL } from '../baseurl';
export const SERVICES_LIST = "SERVICES_LIST";
export const SERVICES_INSERT = "SERVICES_INSERT";
export const SERVICES_DELETE = "SERVICES_DELETE";
export const SERVICES_UPDATE = "COURSE_UPDATE";
export const COUSRE_REMOVE_STATE = "COUSRE_REMOVE_STATE";


const servicesListAction = (payload) => ({ type: SERVICES_LIST, payload: payload });
const servicesInsertAction = (payload) => ({ type: SERVICES_INSERT, payload: payload });
const servicesDeleteAction = (payload) => ({ type: SERVICES_DELETE, payload: payload });
const servicesUpdateAction = (payload) => ({ type: SERVICES_UPDATE, payload: payload });
const removeCourseStateAction = (payload) => ({ type: COUSRE_REMOVE_STATE, payload: payload });


export const servicesList = () => {
    const token = localStorage.getItem("token");
    return async (dispatch) => {
        try {
            await axios.get(`${BASEURL}/api/serviceCategory/serviceCategories`, {
                headers: {
                    authorization: token,
                }
            })
                .then((res) => {
                console.log("res", res);
                dispatch(servicesListAction(res))
            }).catch((error) => {
                console.log("error", error);
                dispatch(servicesListAction(error?.response))
            })
        } catch (error) {
            console.log("Error", error);
        }
    }
}

export const servicesInsert = (payload) => {
    const token = localStorage.getItem("token");
    return async (dispatch) => {
        try {
            await axios.post(`${BASEURL}/api/serviceCategory/service-category`, payload, {
                headers: {
                    authorization: token,
                }
            })
                .then((res) => {
                    console.log("res", res);
                    dispatch(servicesList())
                dispatch(servicesInsertAction(res));
            }).catch((error) => {
                console.log("error", error);
                dispatch(servicesInsertAction(error?.response));
            })
        } catch (error) {
            console.log('Error', error);
        }
    }
}

export const servicesDelete = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`${BASEURL}/api/serviceCategory/serviceCategories/${id}`).then((res) => {
                console.log("res", res);
                dispatch(servicesDeleteAction(res));
                dispatch(servicesList());
            }).catch((error) => {
                console.log("error", error);
                dispatch(servicesList())
                dispatch(servicesDeleteAction(error?.response));
            })
        } catch (error) {
            console.log("error", error);
        }
    }
}

export const servicesUpdate = (id,payload) => {
    const token = localStorage.getItem("token");
    return async (dispatch) => {
        try {
            await axios.put(`${BASEURL}/api/serviceCategory/serviceCategories/${id}`, payload, {
                headers: {
                    authorization: token,
                }
            })
                .then((res) => {
                    console.log("res", res);
                    dispatch(servicesList())
                dispatch(servicesUpdateAction(res));
            }).catch((error) => {
                console.log("error".error);
                dispatch(servicesUpdateAction(error?.response));
            });

        } catch (error) {
            console.log("error course update", error)
        }
    }
}

export const removeCourseState = (payload) => {
    return async (dispatch) => {
        try {
            dispatch(removeCourseStateAction());
        } catch (error) {
            console.log('Error category insert:', error);
        }
    }
}