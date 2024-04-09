import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../../redux/actions/Admin.action";
import { MdEmail } from "react-icons/md";

import { RiLockPasswordFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
   
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();
    const usersState = useSelector((state) => state.admin);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogin = () => {
        // Check if email or password is empty
        if (!formData.email || !formData.password) {
            toast.error('Please fill in all required fields');
            return;
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Invalid email format');
            return;
        }

        // Password length validation
        if (formData.password.length < 8) {
            toast.error('Password must be at least 8 characters long');
            return;
        }

        // Dispatch adminLogin action if validations pass
        dispatch(adminLogin(formData));
    };
    console.log("usersState", usersState);

    return (
        <>
            <ToastContainer />
            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure><img src={require('../../assets/img/signup-image.jpg')} alt="sing in" /></figure>
                        </div>

                        <div className="signin-form">
                            <h2 className="form-title">Sign In</h2>
                            <div className="register-form" id="login-form">
                                <div className="form-group">
                                    <label htmlFor="your_name"><MdEmail /></label>
                                    <input type="text" name="email" value={formData.email} onChange={handleInputChange} id="your_name" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="your_pass"><RiLockPasswordFill /></label>
                                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} id="your_pass" placeholder="Password" />
                                </div>
                                <div className="form-group flex justify-items-center mt-5">
                                    <button onClick={handleLogin} name="signin" id="signin" className="form-submit text-center" value="Log in" >Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignIn;
