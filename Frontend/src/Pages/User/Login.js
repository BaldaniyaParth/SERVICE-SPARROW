import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navbar from "../../Component/User/Navbars";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/action/user.action";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "", // Default role selection
  });

  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
    role: "",
  });

  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  console.log("data######", data);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("formData.role", formData.role);
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
      valid = false;
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
      valid = false;
    } else if (formData.password.trim().length < 8) {
      errors.password = "Password must be at least 8 characters";
      valid = false;
    }
    // Validation for role selection
    if (!formData.role.trim()) {
      errors.role = "Role selection is required";
      valid = false;
    }

    setValidationErrors(errors);
    return valid;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(userLogin(formData));
    }
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="dark:bg-gray-800 bg-[#344955] min-h-screen overflow-hidden flex items-center justify-center ">
        <div className="bg-white lg:w-4/12 md:6/12 w-8/12 shadow-2xl rounded-xl">
          <form className="p-6 md:p-12">
            <div className="flex justify-center mb-5 text-[30px]">
              <IoPersonCircleSharp />
            </div>
            <div className="flex justify-center">
              <h1 className="font-bold text-2xl mb-5  text-[#344955]">
                Sign In To Your Account
              </h1>
            </div>
            <div className="flex items-center text-lg mb-5">
              <div className="absolute ml-3 text-2xl">
                <MdOutlineMailOutline />
              </div>
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleInputChange}
                value={formData.email}
                className="rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Enter Email"
              />
            </div>
            <p className="text-red-600 text-left mb-2">
              {validationErrors.email}
            </p>
            <div className="flex items-center text-lg mb-5">
              <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
              </svg>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleInputChange}
                value={formData.password}
                className="rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Password"
              />
            </div>
            <p className="text-red-600 text-left mb-2">
              {validationErrors.password}
            </p>

            <div className="flex justify-center text-lg mb-5">
              <div>
                <label className="m-2">
                  <input
                    type="radio"
                    name="role"
                    value="Service Taker"
                    checked={formData.role === "Service Taker"}
                    onChange={handleInputChange}
                  />
                  Service Taker
                </label>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="Service Provider"
                    checked={formData.role === "Service Provider"}
                    onChange={handleInputChange}
                  />{" "}
                  Service Provider
                </label>
                <p className="text-red-600 text-left mb-2">
                  {validationErrors.role}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogin}
              className="bg-[#344955] from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded"
            >
              Login
            </button>
          </form>
          <div className="flex justify-center items-center mb-5">
            <Link
              to="/registration"
              className="inline-flex items-center   font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
            >
              <span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </span>
              <span className="ml-2">You don't have an account?</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
 