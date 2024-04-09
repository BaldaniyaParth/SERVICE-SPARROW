import axios from "axios";

export const CARRICULUM_INSERT = "CARRICULUM_INSERT";
export const CARRICULUM_LIST = "CARRICULUM_LIST";
export const CARRICULUM_DELETE = "CARRICULUM_DELETE";
export const CARRICULUM_UPDATE = "CARRICULUM_UPDATE";
export const QUESTION_INSERT = "QUESTION_INSERT";
export const GET_QUESTION = "GET_QUESTION";
export const UPDATE_QUESTION = "UPDATE_QUESTIION";
export const DELETE_QUESTION = "DELETE_QUESTION";
export const CARRICULUM_REMOVE_STATE = "CARRICULUM_REMOVE_STATE";

const carriculumInnsertAction = (payload) => ({ type: CARRICULUM_INSERT, payload: payload });
const carriculumListAction = (payload) => ({ type: CARRICULUM_LIST, payload: payload });
const carriculumDeleteAction = (payload) => ({ type: CARRICULUM_DELETE, payload: payload });
const carriculumUpdateAction = (payload) => ({ type: CARRICULUM_UPDATE, payload: payload });
const addQuestionAction = (payload) => ({ type: QUESTION_INSERT, payload: payload });
const getQuestionAction = (payload) => ({ type: GET_QUESTION, payload: payload });
const updateQuestionAction = (payload) => ({ type: UPDATE_QUESTION, payload: payload });
const deleteQuestionAction = (payload) => ({ type: DELETE_QUESTION, payload: payload });
const removeCarriculumStateAction = (payload) => ({ type: CARRICULUM_REMOVE_STATE, payload: payload });

export const carriculumInnsert = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post("http://192.168.29.87:3000/api/curriculum/createCurriculum", payload).then((res) => {
                console.log("response", res);
                dispatch(carriculumInnsertAction(res));
            }).catch((error) => {
                console.log("error", error);
                dispatch(carriculumInnsertAction(error?.response))
            })
        } catch (error) {
            console.log("carriculumInnsert error", error);
        }
    }
}

export const carriculumList = () => {
    return async (dispatch) => {
        try {
            await axios.get("http://192.168.29.87:3000/api/curriculum/getCurriculum").then((res) => {
                console.log("res", res);
                dispatch(carriculumListAction(res));
            }).catch((error) => {
                console.log("error", error);
                dispatch(carriculumListAction(error?.response));
            })
        } catch (error) {
            console.log("error", error);
        }
    }
}

export const carriculumDelete = (carriculumId) => {
    return async (dispatch) => {
        try {
            await axios.delete(`http://192.168.29.87:3000/api/curriculum/deleteCurriculum/${carriculumId}`).then((res) => {
                console.log("res", res);
                dispatch(carriculumDeleteAction(res));
            }).catch((error) => {
                console.log("error", error);
                dispatch(carriculumDeleteAction(error?.response))
            })
        } catch (error) {

        }
    }
}

export const carriculumUpdate = (payload) => {
    return async (dispatch) => {
        try {
            await axios.put(`http://192.168.29.87:3000/api/curriculum/updateCurriculum/${payload.carriculumId}`, payload).then((res) => {
                console.log("res", res);
                dispatch(carriculumUpdateAction(res));
            }).catch((error) => {
                console.log("error", error);
                dispatch(carriculumUpdateAction(error?.response));
            })
        } catch (error) {
            console.log("error carriculum update", error);
        }
    }
}

export const addCarriculumQuestion = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post("http://192.168.29.87:3000/api/lesson/createLesson", payload).then((res) => {
                console.log("res", res);
                dispatch(addQuestionAction(res));
            }).catch((error) => {
                console.log("error", error);
                dispatch(addQuestionAction(error?.response));
            })
        } catch (error) {
            console.log("error", error);
        }
    }
}

export const getCarriculumById = (carriculumId) => {
    return async (dispatch) => {
        try {
            await axios.get(`http://192.168.29.87:3000/api/lesson/getAllLesson/${carriculumId}`).then((res) => {
                console.log("res", res);
                dispatch(getQuestionAction(res));
            }).catch((error) => {
                console.log("error", error);
                dispatch(getQuestionAction(error?.response));
            })
        } catch (error) {
            console.log("error", error);
        }
    }
}

export const updateQuestion = (payload) => {
    return async (dispatch) => {
        try {
            await axios.put(`http://192.168.29.87:3000/api/lesson/updatelesson/${payload.lessonId}`, payload).then((res) => {
                console.log("res", res);
                dispatch(updateQuestionAction(res));
            }).catch((error) => {
                console.log("error", error);
                dispatch(updateQuestionAction(error?.response));
            })
        } catch (error) {
            console.log("error", error);
        }
    }
}

export const deleteQuestion = (lessonId) => {
    return async (dispatch) => {
        try {
            await axios.delete(`http://192.168.29.87:3000/api/lesson/deletelesson/${lessonId}`).then((res) => {
                console.log("res", res);
                dispatch(deleteQuestionAction(res));
            }).catch((error) => {
                console.log("error", error);
                dispatch(deleteQuestionAction(error?.response));
            })
        } catch (error) {
            console.log("error", error);
        }
    }
}

export const removeCarriculumState = (payload) => {
    return async (dispatch) => {
        try {
            dispatch(removeCarriculumStateAction());
        } catch (error) {
            console.log("remove carriculum state", error);
        }
    }
}