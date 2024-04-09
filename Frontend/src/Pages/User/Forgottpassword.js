import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { userForgottpassword } from '../../store/action/user.action';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forgottpassword = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const dispatch = useDispatch()
  const data = useSelector((state) => state.user.userForgottpassword);
  console.log("data", data)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Forgottpassword = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    dispatch(userForgottpassword(formData));
  };

  useEffect(() => {
    if (isSubmitted && data?.status === 200) {
      toast.success("Email Send");
    } else if (isSubmitted && data?.status === 404) {
      toast.error('Invalid email address');
    }
  }, [isSubmitted, data])

  return (
    <>
      <ToastContainer />
      <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
        <div className="mt-40 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
          <div className="p-4 sm:p-7 ">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Remember your password?
                <Link to="/login" className="text-blue-600 decoration-2 hover:underline font-medium" >
                  Login here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <form >
                <div className="grid gap-y-4">
                  <div>
                    <label for="email" className="block text-sm font-bold ml-1 mb-2 dark:text-white">Email address</label>
                    <div className="relative">
                      <input type="email" id="email" name="email"
                        onChange={handleInputChange}
                        value={formData.email} className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                    </div>
                    {/* <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p> */}
                    <p className="text-xs text-red-600 mt-2">{emailError}</p>
                  </div>
                  <button type="submit" onClick={Forgottpassword} className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset password</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <p className="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">

          <Link to="/contact" className="pl-3 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200" >

            Contact us!
          </Link>
        </p>
      </main>
    </>
  )
}

export default Forgottpassword