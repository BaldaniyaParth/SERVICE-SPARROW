import React from "react";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userProfilePasswordUpdate } from "../../store/action/user.action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Changepassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  console.log("all user data", formData);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.user.userProfilePasswordUpdate);
  console.log(data, "userid");
  useEffect(() => {
    if (data && data.user) {
      setFormData(data.user);
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePasswordUpdate = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New password and confirm password do not match");
      return;
    }

    if (!formData.newPassword || formData.newPassword.length < 8) {
      toast.error("New password must be at least 8 characters long");
      return;
    }

    dispatch(userProfilePasswordUpdate(formData))
      .then(() => {
        toast.success("Password updated successfully!");
        setFormData({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        navigate("/Userprofiles");
      })
      .catch(() => {
        toast.error("Password update failed. Please try again.");
      });
  };
  const handleCancel = () => {
    // Navigate to the user profile page
    navigate("/Userprofiles");
  };

  return (
    <div>
      <ToastContainer />

      <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-focus:border-[#77a1ba] focus:ring-[#344955] ">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Reset password?
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                forget your password?
                <Link to="forgottpassword"
                  className="text-blue-600 decoration-2 hover:underline font-medium"

                >
                  click here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <form>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="oldPassword"
                      className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                    >
                      Old Password
                    </label>
                    <input
                      type="password"
                      id="oldPassword"
                      name="oldPassword"
                      value={formData.oldPassword}
                      onChange={handleInputChange}
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-[#77a1ba] focus:ring-[#344955] shadow-sm"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="newPassword"
                      className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-[#77a1ba] focus:ring-[#344955] shadow-sm"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-[#77a1ba] focus:ring-[#344955] shadow-sm"
                      required
                    />
                  </div>

                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                    <button
                      class="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-[15px] font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      onClick={handlePasswordUpdate}
                    >
                      Update password
                    </button>
                    <button
                      className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-[15px] font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Changepassword;