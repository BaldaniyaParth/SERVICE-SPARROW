import React from "react";
import Navbar from "../../Component/User/Navbars";
import { IoNotifications } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { RiImageAddFill } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../../store/action/user.action";
import { userProfileUpdate } from "../../store/action/user.action";
import { userProfileImage } from "../../store/action/user.action";
import { serviceProviderNotification } from "../../store/action/user.action";
import { serviceTakerPayment } from "../../store/action/user.action";
import { userdeletenofication } from "../../store/action/user.action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Userprofiles = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    country: "",
    city: "",
    zipcode: "",
    aboutme: "",
  });

  const data = useSelector((state) => state.user.userProfile);
  const data2 = useSelector((state) => state.user);
  console.log(data2, "userprofile");
  const [amountfinal, setAmountFinal] = useState();

  useEffect(() => {
    if (data2?.serviceProviderNotification?.data?.notifications) {
      const filteredNotifications =
        data2.serviceProviderNotification.data.notifications.filter(
          (notification) => notification.status === 4
        );

      const payments = filteredNotifications
        .map((notification) => notification.payment)
        .filter((payment) => payment); // Filter out undefined payments

      const amount = payments.length > 0 ? payments[0] : 0;

      setAmountFinal(amount);
      setPaymentData((prevPaymentData) => ({
        ...prevPaymentData,
        amount: amount,
      }));

      console.log("Amount :", amount);
    }
  }, [data2]); // Only re-run this effect when data2 changes

  console.log("amountfinal", amountfinal);

  const userId = JSON.parse(localStorage.getItem("user"));
  // const notification = data2?.serviceProviderNotification?.data?.notifications;
  const [paymentData, setPaymentData] = useState({
    amount: amountfinal,
    currency: "INR",
    userId: userId._id,
  });

  console.log("all user data", formData);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false); // State to track edit mode
  const [paymentMade, setPaymentMade] = useState(false);
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
  const handleProfileUpdate = () => {
    dispatch(userProfileUpdate(formData));
    toast.success("Profile updated successfully!");
    setEditMode(false);
  };

  useEffect(() => {
    dispatch(userProfile());
    dispatch(serviceProviderNotification());
  }, [dispatch]);
  console.log(data?.user?.id);

  const inputRef = useRef(null);
  const [image] = useState(null);

  const handleImageClick = () => {
    // Automatically trigger file input when component mounts
    inputRef.current.click();
  };

  console.log("dataaa", data);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("profileImage", file);
      dispatch(userProfileImage(data.user.id, formData));
    }
  };
  
  useEffect(() => {
    // Check if paymentMade is set in local storage
    const isPaymentMade = localStorage.getItem("paymentMade");
    if (isPaymentMade) {
      setPaymentMade(true);
    }
  }, []);
  useEffect(() => {
    // Reset paymentMade when a new service is booked
    setPaymentMade(false);
  }, []);

  const options = {
    key: "your razpay",
    key_secret: "your razpay",
    amount: "100",
    name: "Parth",
    description: "some description",
    theme: {
      color: "#344955",
      hide_topbar: false,
    },
  };

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Set notifications only if data is available
    if (data2?.serviceProviderNotification?.data?.notifications) {
      setNotifications(data2.serviceProviderNotification.data.notifications);
    }
  }, [data2?.serviceProviderNotification?.data?.notifications]);

  const booknow = (id) => {
    // Dispatch serviceTakerPayment action first
    dispatch(serviceTakerPayment(id, paymentData));

    let tempOptions = {
      ...options,
      amount: amountfinal * 100,
      currency: "INR",
      name: "Service-Sparrow",
      handler: async function () {
        // Handle notification and removal logic here
        // Dispatch action to send notifications

        setNotifications((prevNotifications) =>
          prevNotifications.filter((notification) => notification._id !== id)
        );
      },
    };

    setPaymentMade(true);
    // Store paymentMade in local storage
    localStorage.setItem("paymentMade", "true");
    openPayModal(tempOptions);
  };
  const booknow1 = (id) => {
    // Dispatch serviceTakerPayment action first
    dispatch(userdeletenofication(id));
  };

  const openPayModal = (options) => {
    try {
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log("errr", error);
    }
  };
  console.log("form::", formData);

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="bg-[#344955] w-full h-44" />
      <div className="container mx-auto -mt-28 ">
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-8 md:col-span-6 rounded-lg shadow-lg  bg-gray-100">
            <div className="flex flex-col">
              <div className="py-4 bg-[#fff] rounded-lg">
                <div className="container px-4">
                  <h2 className="flex justify-between items-center text-3xl font-semibold py-4 bg-[#fff] rounded-lg text-gray-700 capitalize text-left dark:text-white">
                    <span className="ml-4 flex items-center">
                      <ImProfile className="mr-2" />
                      My Profile
                    </span>
                    {!editMode ? (
                      <button
                        onClick={() => setEditMode(true)}
                        className="bg-[#344955] text-white text-lg px-4 py-2 rounded-lg"
                      >
                        Edit Profile
                      </button>
                    ) : (
                      <button
                        onClick={handleProfileUpdate}
                        className="bg-[#344955] text-white text-lg px-4 py-2 rounded-lg"
                      >
                        Save
                      </button>
                    )}
                  </h2>
                </div>
              </div>
              <div className=" bg-[#f9fafc] py-8">
                <div className="container mx-auto  flex flex-col  bg-[#f9fafc]  md:flex-row">
                  <div className="w-full md:w-3/4 ">
                    <section className="max-w-4xl p-6 bg-[#f9fafc] rounded-lg  ml-10 shadow-md dark:bg-gray-800 ">
                      <div className="container ">
                        <h1 className="text-left py-1  text-[#344955] text-lg font-medium  mb-2">
                          YOUR PERSONAL INFROMATION
                        </h1>
                        <hr className="bg-gray-300 h-[1px] w-full" />
                        <form>
                          <div className="grid grid-cols-1 gap-6 mt-5 ml-7 text-left font-medium sm:grid-cols-2">
                            <div>
                              <label
                                className="text-gray-500 text-lg dark:text-gray-200"
                                htmlFor="username"
                              >
                                Full Name
                              </label>
                              <input
                                type="text"
                                onChange={handleInputChange}
                                name="name"
                                value={formData.name}
                                readOnly={!editMode}
                                className="block w-full px-4 py-3 mt-2 text-gray-500 bg-white border-2 shadow border-gray-300 rounded-md  "
                              />
                            </div>
                            <div>
                              <label
                                className="text-gray-500 text-lg  dark:text-gray-200"
                                htmlFor="emailAddress"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                onChange={handleInputChange}
                                name="email"
                                value={formData.email}
                                readOnly={!editMode}
                                className="block w-full px-4 py-3 mt-2 text-gray-500 bg-white border-2 shadow border-gray-300 rounded-md"
                              />
                            </div>

                            <div>
                              <label
                                className="text-gray-500 text-lg dark:text-gray-200"
                                htmlFor="address"
                              >
                                Address
                              </label>
                              <textarea
                                type="text"
                                onChange={handleInputChange}
                                name="address"
                                value={formData.address}
                                readOnly={!editMode}
                                className="block w-full px-4 py-3 mt-2 text-gray-500 bg-white border-2 shadow border-gray-300 rounded-md"
                              />
                            </div>

                            <div>
                              <label
                                className="text-gray-500 text-lg dark:text-gray-200"
                                htmlFor="mobile"
                              >
                                mobile
                              </label>
                              <input
                                type="text"
                                onChange={handleInputChange}
                                name="mobile"
                                maxLength={10}
                                value={formData.mobile}
                                readOnly={!editMode}
                                className="block w-full px-4 py-3 mt-2 text-gray-500 bg-white border-2 shadow border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          <div className="text-lg text-right">
                            <Link
                              to="/Changepassword"
                              className="flex-shrink-0 text-indigo-600 border-0 rounded text-medium mt-10 sm:mt-0"
                            >
                              <h2>Change Password</h2>
                            </Link>
                          </div>
                          <hr className="bg-gray-300 h-[1px] mt-10 mb-6 w-full"></hr>
                          <h1 className="text-left py-1 text-[#344955] text-lg font-medium mb-2">
                            YOUR CONTACT INFROMATION
                          </h1>
                          <div className="grid grid-cols-1 gap-6 mt-6 ml-6 text-left font-medium sm:grid-cols-3">
                            <div>
                              <label
                                className="text-gray-500 text-lg dark:text-gray-200"
                                htmlFor="city"
                              >
                                City
                              </label>
                              <input
                                type="text"
                                onChange={handleInputChange}
                                name="city"
                                value={formData.city}
                                readOnly={!editMode}
                                className="block w-full px-4 py-3 mt-2 text-gray-500 bg-white border-2 shadow border-gray-300 rounded-md  "
                              />
                            </div>
                            <div>
                              <label
                                className="text-gray-500 text-lg dark:text-gray-200"
                                htmlFor="country"
                              >
                                Country
                              </label>
                              <input
                                type="text"
                                onChange={handleInputChange}
                                name="country"
                                value={formData.country}
                                readOnly={!editMode}
                                className="block w-full px-4 py-3 mt-2 text-gray-500 bg-white border-2 shadow border-gray-300 rounded-md"
                              />
                            </div>
                            <div>
                              <label
                                className="text-gray-500 text-lg dark:text-gray-200"
                                htmlFor="zipcode"
                              >
                                Zipcode
                              </label>
                              <input
                                type="text"
                                onChange={handleInputChange}
                                name="zipcode"
                                value={formData.zipcode}
                                readOnly={!editMode}
                                className="block w-full px-4 py-3 mt-2 text-gray-500 bg-white border-2 shadow border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          <hr className="bg-gray-300 h-[1px] mt-10 mb-6 w-full"></hr>
                          <h1 className="text-left py-1 text-[#344955] text-lg font-medium mb-2">
                            ABOUT ME
                          </h1>
                          <div className="grid grid-cols-1 gap-6 mt-6 ml-6 text-left font-medium sm:grid-cols-1">
                            <div>
                              <label
                                className="text-gray-500 text-lg dark:text-gray-200"
                                htmlFor="aboutme"
                              >
                                About me
                              </label>
                              <textarea
                                type="text"
                                onChange={handleInputChange}
                                name="aboutme"
                                value={formData.aboutme}
                                readOnly={!editMode}
                                className="block w-full px-4 py-3 mt-2 text-gray-500 bg-white border-2 shadow border-gray-300 rounded-md  "
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </section>
                  </div>
                  <div className="w-full md:w-1/4 px-4">
                    <div className="rounded-lg ">
                      <div className="font-bold bg-white rounded-lg flex text-[#344955] justify-center py-5 mb-4">
                        <h1 className="ml-6 text-xl">Profile Image</h1>
                        <RiImageAddFill className="mt-1 ml-2" />
                      </div>

                      <div className="flex flex-col" onClick={handleImageClick}>
                        <input
                          className="bg-[#0675e8] text-white hidden"
                          type="file"
                          ref={inputRef}
                          id="profileImage"
                          name="profileImage"
                          onChange={handleImageChange} 
                          accept="image/*"
                        />
                        {data2?.userProfileImage?.user?.profileImage ? (
                          <img
                            alt="YourImage"
                            className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                            src={data2?.userProfileImage?.user?.profileImage}
                            style={{
                              maxWidth: "300px",
                              maxHeight: "300px",
                              overflow: "hidden",
                            }}
                          />
                        ) : (
                          <img
                            className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                            src={formData.profileImage}
                            name="profileImage"
                            alt="profile your"
                            style={{
                              maxWidth: "300px",
                              maxHeight: "300px",
                              overflow: "hidden",
                            }}
                          />
                        )}
                      </div>

                      <div className="text-center p-1 bg-transparent border-none text-[#344955] text-xl font-medium  " />
                      <h1 className="text-[#344955]  text-3xl font-medium -mt-5">
                        {formData.name}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-8 md:col-span-2 -mt-5">
            <div className="  text-center">
              <div className="py-6 px-3  sm:mt-0">
                <div className="bg-[#f9fafc] dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                  <div className="border-b pb-6">
                    <div className=" ontainer mx-auto">
                      <h1
                        className="bg-white py-6 text-2xl font-semibold md:text-[18px] lg:text-xl text-[#344955] flex items-center justify-center
                      "
                      >
                        Notifications
                        <IoNotifications className="ml-5 " />
                      </h1>
                    </div>
                  </div>
                  <div className="p-4">
                    {notifications && notifications.length > 0 ? (
                      notifications.map((notires) => {
                        return (
                          <>
                            <div className="border-b -mt-7">
                              <div key={notires._id} className="text-center">
                                <div className="py-2">
                                  <h3
                                    className="font-bold text-2xl text-[#344955] dark:text-white mb-1"
                                    style={{ textTransform: "capitalize" }}
                                  >
                                    {notires?.name}
                                  </h3>
                                  <h3 className="font-bold text-xl text-gray-500 dark:text-white mb-5">
                                    {notires?.message}
                                  </h3>
                                </div>
                              </div>
                              {notires.status !== 9 ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => booknow(notires._id)}
                                    className="bg-[#344955] text-white mb-5 py-2 px-4 rounded-full"
                                  >
                                    Make Payment
                                  </button>
                                </>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => booknow1(notires._id)} // Assuming you have a handleDone function
                                  className="bg-[#344955] text-white mb-5 py-2 px-4 rounded-full"
                                >
                                  Done
                                </button>
                                
                              )}
                            </div>
                          </>
                        );
                      })
                    ) : (
                      <div className="container text-center py-6 mb-4">
                        <p className="text-[#344955] text-lg">
                          No notifications
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Userprofiles;