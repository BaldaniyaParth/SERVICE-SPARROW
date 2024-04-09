import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userResetpassword } from '../../store/action/user.action';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from 'react-router-dom';

const Resetpassword = () => {
  const { token } = useParams();
  const param = useParams()
  console.log("", param)
  const [formData, setFormData] = useState(
    {
      password: "",
      confirmPassword: ""
    });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const dispatch = useDispatch()
  const data = useSelector((state) => state.user.userResetpassword);
  console.log("data", data)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const Resetpassword = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }

    if (formData.confirmPassword !== formData.password) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }

    setPasswordError("");
    setConfirmPasswordError("");
    dispatch(userResetpassword(formData, token));
    setIsSubmitted(true);
  }

  useEffect(() => {
    if (isSubmitted && data?.status === 200) {
      toast.success("Password Reset Sucessfully");
    } else if (isSubmitted && data?.status === 400) {
      toast.error("Password Not Reset");
    }
  }, [isSubmitted, data])

  return (
    <>
      <ToastContainer />
      <div className="w-full max-w-xs md:ml-[500px] ml-32 md:mt-48 mt-32">
        <form className="bg-blue-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              New Password
            </label>
            <input
              onChange={handleInputChange}
              value={formData.password} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="new password" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Confirm  Password
            </label>
            <input onChange={handleInputChange}
              value={formData.confirmPassword} className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="confirmPassword" id="confirmPassword" type="password" placeholder="Confirm Password" />
          </div>
          {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}

          <div class=" justify-between">
            <button onClick={Resetpassword} className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-3 px-2 rounded focus:outline-none focus:shadow-outline" type="submit">
              Reset Password
            </button>
          </div>
          {confirmPasswordError && <p className="text-red-500 text-xs italic">{confirmPasswordError}</p>}
        </form>
      </div>
    </>
  )
}

export default Resetpassword
