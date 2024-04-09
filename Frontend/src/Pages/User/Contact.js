import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Component/User/Navbars";
import Footer from "../../Component/User/Footer";
import { userContactus } from "../../store/action/user.action";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.user.userContactus);
  console.log("data--", data);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const contactus = (e) => {
    e.preventDefault();
    // Check if any field is empty
    if (!contactData.name || !contactData.email || !contactData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    dispatch(userContactus(contactData));
    navigate("/Thankyou");
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted && data?.status === 200) {
      toast.success("message sent succesfulyy ");
      setContactData({
        name: "",
        email: "",
        message: "",
      });
      navigate("/Thankyou");
    }
  }, [isSubmitted, navigate, data]);
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="md:flex flex  md:pl-32 bg-[#344955] h-[85vh] rounded-br-[1000px]">
        <div className="container px-6 py-10 mx-auto">
          <div className="mt-16 dark:bg-gray-800">
            <div class="container mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 text-center md:justify-center md:items-center">
              <div class="md:w-full lg:w-1/2 px-4 md:order-last">
                <img
                  src="./images/contact.jpg"
                  alt="contactimage"
                  class=" object-cover mx-auto rounded-bl-[200px] rounded-tr-[200px] w-96 h-[300px]"
                />
              </div>

              <div class="w-full md:max-w-[600px] space-y-4 md:pl-4">
                <div class="mb-6 text-lg md:text-xl lg:text-2xl leading-7 text-left text-[#fff]">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#dec2ba] text-left dark:text-white">
                    Get in Touch for Superior
                  </h1>

                  <p className="mt-5 text-[19px] md:text-[20px] lg:text-lg text-white mx-auto leading-relaxed">
                    Welcome to{" "}
                    <span className="font-bold text-[20px] text-[#dec2ba]">Service Sparrow</span>!
                    We're delighted that you've chosen us as your partner in creating a better
                    home. Whether you have questions about our services, need assistance with
                    a project, or simply want to discuss your ideas, our dedicated team is here
                    to help.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div
        id="contact-us"
        className="overflow-hidden  py-16 px-4 dark:bg-slate-900 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="relative mx-auto max-w-xl ">
          <svg
            className="absolute left-full translate-x-1/2 transform "
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200 dark:text-slate-600"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="404"
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            ></rect>
          </svg>
          <svg
            className="absolute right-full bottom-0 -translate-x-1/2 transform"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200 dark:text-slate-800"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="404"
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            ></rect>
          </svg>
          <div className="text-center">
            <h1 className="mt-5 text-3xl font-semibold text-[#344955] md:text-3xl dark:text-white">
              Connect With Us.
            </h1>
            <p className="mt-3 text-lg text-[#dec2ba] dark:text-gray-400">
              Chat to our friendly team.
            </p>
            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-slate-400">
              Please use the form below to contact us. Thank you!
            </p>
          </div>
          <div className="mt-12">
            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div className="sm:col-span-2">
                <label
                  for="name"
                  className="block text-lg text-left font-medium text-gray-700 dark:text-slate-400"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    name="name"
                    type="text"
                    id="name"
                    value={contactData.name}
                    onChange={handleInputChange}
                    required=""
                    className="border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="email"
                  className="block text- text-left font-medium text-gray-700 dark:text-slate-400"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    id="email"
                    value={contactData.email}
                    onChange={handleInputChange}
                    required=""
                    type="email"
                    className="border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block text- text-left font-medium text-gray-700 dark:text-slate-400"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    required=""
                    name="message"
                    id="message"
                    value={contactData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end sm:col-span-2">
                <button
                  type="submit"
                  name="submit"
                  onClick={contactus}
                  className="inline-flex items-center rounded-md text-[#dec2ba] px-4 py-2 font-medium focus:outline-none focus-visible:ring focus-visible:ring-sky-500 shadow-sm sm:text-sm transition-colors duration-75  border border-[#344955] hover:bg-sky-50 active:bg-sky-100 disabled:bg-sky-100 dark:hover:bg-gray-900 dark:active:bg-gray-800 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
                >
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 mt-8 mb-10 lg:grid-cols-3 sm:grid-cols-2 ">
        <div className="p-4 rounded-lg bg-[#344955] md:p-6 hover:-translate-y-6 hover:shadow-lg duration-300  dark:bg-gray-800">
          <span className="inline-block p-3 text-black rounded-lg bg-white dark:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </span>

          <h2 className="mt-4 text-base font-medium text-[#dec2ba] dark:text-white">
            Chat To Inquire
          </h2>
          <p className="mt-2 text-sm text-white dark:text-gray-400">
            Speak to our friendly team.
          </p>
          <p className="mt-2 text-sm text-white dark:text-blue-400">
            servicesparrow@gmail.com
          </p>
        </div>

        <div className="p-4 rounded-lg bg-white md:p-6 hover:-translate-y-6 hover:shadow-lg shadow-lg duration-300  dark:bg-gray-800">
          <span className="inline-block p-3 text-white rounded-lg bg-[#344955] dark:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </span>

          <h2 className="mt-4 text-base font-medium text-[#dec2ba] dark:text-white">
            Visit us
          </h2>
          <p className="mt-2 text-sm text-[#344955] dark:text-gray-400">
            Visit our office HQ..
          </p>
          <p className="mt-2 text-sm text-[#344955] dark:text-blue-400">
            100 Smith Street Collingwood VIC 3066 AU
          </p>
        </div>

        <div className="p-4 rounded-lg bg-[#344955] md:p-6 hover:-translate-y-6 hover:shadow-lg duration-300  dark:bg-gray-800">
          <span className="inline-block p-3 text-black rounded-lg bg-white dark:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </span>

          <h2 className="mt-4 text-base font-medium text-[#dec2ba] dark:text-white">
            Call us
          </h2>
          <p className="mt-2 text-sm text-white dark:text-gray-400">
            Mon-Fri from 8am to 5pm.
          </p>
          <p className="mt-2 text-sm text-white dark:text-blue-400">
            +91 4734583223
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
