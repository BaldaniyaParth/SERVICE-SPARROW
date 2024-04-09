import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASEURL } from '../baseurl';

export const LOGIN_ADMIN = 'LOGIN_ADMIN';


const adminLoginAction = (payload) => ({ type: LOGIN_ADMIN, payload: payload });


export const adminLogin = (payload) => {
    return async (dispatch) => {
        try {
            await axios.post(`${BASEURL}/api/admin/login`, payload).then(((res) => {
                console.log("res::::::::::::", res);
                localStorage.setItem("token", res?.data?.token);
          
                localStorage.setItem('adminId', res?.data?.user?._id);
                console.log(res?.data?.user?._id,"id lo");

                if (res?.data?.token ) {
                    
                    toast.success("Admin login successfully!");
                    window.location.href = "/admin/dashboard"
                } 
                dispatch(adminLoginAction(res));
            })).catch((error) => {
                console.log(error);
                toast.error("Invalid Email Or Password!")
                dispatch(adminLoginAction(error?.response));
            });
        } catch (error) {
            console.log('Error login user:', error);
        }
    }
}


