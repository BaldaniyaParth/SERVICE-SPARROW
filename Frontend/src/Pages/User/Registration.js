import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Component/User/Navbars";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../../store/action/user.action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
    role: "Service Taker", // default value set to "Service Taker"
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationErros, setvalidationErros] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
    role: "Service Taker", // default value set to "Service Taker"
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const data = useSelector((state) => state.user.userSignup);
  console.log("data", data);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // If the field is mobile, validate input as numbers
    if (name === "mobile") {
      const regex = /^[0-9]*$/; // Regex to allow only numbers
      // Check if the input value matches the regex pattern
      if (!regex.test(value)) {
        // If input doesn't match, set value to empty string (prevents non-numeric characters)
        setFormData((prevData) => ({
          ...prevData,
          [name]: "",
        }));
      } else {
        // If input matches, update the formData directly
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      // For other fields, update the formData directly
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  const validateForm = () => {
    let valid = true;
    const errors = {};
    //validations
    if (!formData["name"] || !formData.name.trim()) {
      errors.name = "Name is required";
      valid = false;
    }
    if (!formData["email"] || !formData.email.trim()) {
      errors.email = "email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "invalid email format";
      valid = false;
    }
    if (!formData["mobile"] || !formData.mobile.trim()) {
      errors.mobile = "mobile is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = "invalid mobile format";
      valid = false;
    } else if (!/^[789]\d{9}$/.test(formData.mobile)) {
      // Check if mobile number starts with 7, 8, or 9
      errors.mobile = "Mobile number should start with 7, 8, or 9";
      valid = false;
    }

    if (!formData["address"] || !formData.address.trim()) {
      errors.address = "address is required";
      valid = false;
    }
    if (!formData["password"] || !formData.password.trim()) {
      errors.password = "password is required";
      valid = false;
    } else if (formData.password.trim().length < 8) {
      errors.password = "enter at least 8 character";
      valid = false;
    }

    //add similer validation for other field
    setvalidationErros(errors);
    return valid;
  };

  const Registere = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(userSignup(formData));
      setIsSubmitted(true);
    } else {
      toast.error("please fill all require feilds with all valid validation");
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      if (data?.status === 201) {
        toast.success("Registration successful");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          address: "",
          password: "",
          role: "Service Taker",
        });
        setRegistrationSuccess(true);
      } else if (data?.status === 400) {
        toast.error(data?.message || "Email id already exits");
      }
    }
  }, [isSubmitted, data]);

  useEffect(() => {
    if (registrationSuccess) {
      setTimeout(() => {
        setIsSubmitted(false);
        setRegistrationSuccess(false);
        navigate("/login");
      }, 500);
    }
  }, [registrationSuccess, navigate]);


  return (
    <>
      <ToastContainer />
      <Navbar />
      <section className="flex flex-col bg-[#344955]  items-center pt-10 pb-10">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#344955] md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
                >
                  Your full name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  id="name"
                  value={formData.name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter You Name"
                  required=""
                />
                <span className="text-red-600">{validationErros.name}</span>
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Your email"
                  className="bg-gray-50 border border-gray-300 text-gray-900  sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                <span className="text-red-600">{validationErros.email}</span>
              </div>

              <div>
                <label
                  for="mno"
                  className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
                >
                  Mobile No
                </label>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="Enter Your Phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  maxLength={10}
                />
                <span className="text-red-600">{validationErros.mobile}</span>
              </div>

              <div className="mb-5 pt-3">
                <label className="mb-5 block text-base text-left font-semibold text-[#07074D] sm:text-sm">
                  Address Details
                </label>
                <textarea
                  type="text"
                  name="address"
                  id="address"
                  value={formData.addresss}
                  onChange={handleInputChange}
                  placeholder="Enter Your Address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                <span className="text-red-600">{validationErros.address}</span>
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="psw"
                  value={formData.password}
                  placeholder="Enter Your Password"
                  className="bg-gray-50 border  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={handleInputChange}
                />
                <span className="text-red-600">{validationErros.password}</span>
              </div>
              <div className="mb-5 pt-3">
                <div className="flex justify-between mb-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="serviceTaker"
                      name="role"
                      value="Service Taker"
                      checked={formData.role === "Service Taker"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="serviceTaker" className="ml-2">
                      Service Taker
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="serviceProvider"
                      name="role"
                      value="Service Provider"
                      checked={formData.role === "Service Provider"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="serviceProvider" className="ml-2">
                      Service Provider
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                onClick={(e) => {
                  Registere(e);
                }}
                className="w-full text-white bg-[#344955]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create an account
              </button>
              <p className="text-sm  text-[#344955] dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  className="font-medium text-[#344955] hover:underline dark:text-blue-500"
                  to="/login"
                >
                  Sign in here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
