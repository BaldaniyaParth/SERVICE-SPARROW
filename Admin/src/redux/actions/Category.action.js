import axios from 'axios';

export const CATEGORY_INSERT = 'CATEGORY_INSERT';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DELETE = "CATEGORY_DELETE";
export const CATEGORY_GET_BY_ID = "CATEGORY_GET_BY_ID";
export const CATEGORY_LIST = "CATEGORY_LIST";
export const REMOVE_STATE = "REMOVE_STATE";

const categoryInsertAction = (payload) => ({ type: CATEGORY_INSERT, payload: payload });
const categoryUpdateAction = (payload) => ({ type: CATEGORY_UPDATE, payload: payload });
const categoryDeleteActoiion = (payload) => ({ type: CATEGORY_DELETE, payload: payload });
const categoryGetByIdAction = (payload) => ({ type: CATEGORY_GET_BY_ID, payload: payload });
const categoryListAction = (payload) => ({ type: CATEGORY_LIST, payload: payload });
const removeStateAction = (payload) => ({ type: REMOVE_STATE, payload: payload });


export const categoryInsert = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post('http://192.168.29.87:3000/api/category/createCategory', payload).then(((res) => {
                console.log("res", res);
                dispatch(categoryInsertAction(res));
            })).catch((error) => {
                console.log(error);
                dispatch(categoryInsertAction(error?.response));
            });
        } catch (error) {
            console.log('Error category insert:', error);
        }
    }
}

export const categoryUpdate = (payload) => {
    console.log("ayload", payload);
    return async (dispatch) => {
        try {
            await axios.put(`http://192.168.29.87:3000/api/category/updateCategory/${payload.categoryId}`, payload).then(((res) => {
                console.log("res", res);
                dispatch(categoryUpdateAction(res));
            })).catch((error) => {
                console.log(error);
                dispatch(categoryUpdateAction(error?.response));
            });
        } catch (error) {
            console.log('Error category insert:', error);
        }
    }
}

export const categoryDelete = (categoryId) => {
    return async (dispatch) => {
        try {
            await axios.delete(`http://192.168.29.87:3000/api/category/deleteCategory/${categoryId}`).then(((res) => {
                console.log("res", res);
                dispatch(categoryDeleteActoiion(res));
                dispatch(categoryList());
            })).catch((error) => {
                console.log(error);
                dispatch(categoryDeleteActoiion(error?.response));
            });
        } catch (error) {
            console.log('Error category insert:', error);
        }
    }
}

export const categoryGetById = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`http://192.168.29.87:3000/api/category/getCategoryById/${payload.categoryId}`).then(((res) => {
                console.log("res", res);
                dispatch(categoryGetByIdAction(res));
            })).catch((error) => {
                console.log(error);
                dispatch(categoryGetByIdAction(error?.response));
            });
        } catch (error) {
            console.log('Error category insert:', error);
        }
    }
}

export const categoryList = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get('http://192.168.29.87:3000/api/category/getCategory').then(((res) => {
                console.log("res", res);
                dispatch(categoryListAction(res));
            })).catch((error) => {
                console.log(error);
                dispatch(categoryListAction(error?.response));
            });
        } catch (error) {
            console.log('Error category insert:', error);
        }
    }
}


export const removeState = (payload) => {
    return async (dispatch) => {
        try {
            dispatch(removeStateAction());
        } catch (error) {
            console.log('Error category insert:', error);
        }
    }
}

