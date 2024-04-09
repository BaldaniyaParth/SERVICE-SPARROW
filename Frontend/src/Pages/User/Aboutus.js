import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../../Component/User/Navbars";
import Footer from "../../Component/User/Footer";
import { serviceTakerReview } from "../../store/action/user.action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";

const Aboutus = () => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [comment, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [starRating, setRating] = useState(0);

  // Function to handle form submission
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      comment:comment,
      email: email,
      starRating: starRating
    };
    try {
      await dispatch(serviceTakerReview(payload));
      setShowPopup(false);
      setName("");
      setDescription("");
      setEmail("");
      setRating(0);
      // Show toaster notification on success
      toast.success("Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };
  // Function to handle star rating selection
  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  const Details = [
    {
      id: "1",
      image: "./assets/img/uldesiner1.jpg",
      title: "Sachin K.C",
      name: "Sachin K.C",
      profetion: "Senior Product Designer",
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffe  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronu  adaptogen squid fanny pack vaporware.",
    },
    {
      id: "2",
      image: "./assets/img/boyu.jpg",
      title: " Venky raman",
      name: " Venky raman",
      profetion: "UI Designer",
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffe  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronu  adaptogen squid fanny pack vaporware.",
    },
    {
      id: "3",
      image: "./assets/img/girl.jpg",
      name: "  pitar nirisha",
      title: " pitar nitisha",
      profetion: "Senior Product Designer",
      description:
        "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffe  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronu  adaptogen squid fanny pack vaporware.",
    },
  ];
  return (
    <>
      <ToastContainer/>
      <Navbar />
      <div className="md:flex flex  md:pl-32 bg-[#344955] h-[85vh] rounded-br-[1000px]">
        <div className=" container px-6 py-10 mx-auto">
          <div className="fixed bottom-8 right-4  z-50  p-8 mt-4  w-[96%] md:w-1/3 lg:w-1/4">
            <div className="cursor-pointer " onClick={() => setShowPopup(true)}>
              <div className="relative">
                <img
                  src="./assets/img/rating4.jpg"
                  className="h-24 w-24 md:h-24 md:w-24 hover:scale-150 hover:rounded-full duration-500 rounded-full absolute mix-blend-overlay"
                  style={{ bottom: "0", right: "0" }}
                  alt="rating"
                />
              </div>
            </div>

            {showPopup && (
              <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-md">
                  <div className="flex">
                    <h2 className="text-xl font-bold mb-4">Provide Feedback</h2>
                    <button
                      className=" mt-[-10px] ml-3 text-gray-600 hover:text-red-800"
                      onClick={() => setShowPopup(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="text"
                        value={name}
                        placeholder="Enter Your Name:"
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="email"
                        value={email}
                        placeholder="Enter Your Email:"
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      {/* <label className="block text-gray-700">
                        Your comments here:
                      </label> */}
                      <textarea
                        value={comment}
                        name="text"
                        placeholder="Your comments here:"
                        onChange={(e) => setDescription(e.target.value)}
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <p className="block text-gray-700">Rating:</p>

                      <div>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            name="number"
                            className={`cursor-pointer text-4xl ${star <= starRating
                                ? "text-yellow-300"
                                : "text-gray-300"
                              }`}
                            onClick={() => handleStarClick(star)}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#344955] text-white px-4 py-2 rounded-md hover:bg-[#526977]"
                    >
                      Leave comments
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>

          <div class="container mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 text-center md:justify-center md:items-center mt-14">
            <div class="md:w-full lg:w-1/2 px-4 md:order-last">
              <img
                 src="./images/about1.jpg"
                alt="aboutimage"
                class=" object-cover mx-auto rounded-bl-[200px] rounded-tr-[200px] w-96 h-[300px]"
              />
            </div>

            <div class="w-full md:w-[600px] space-y-4 md:pl-4">
              <div class="mb-6 text-lg leading-7 text-left text-[#fff]">
                <h3 class="font-medium text-[#dec2ba] text-3xl md:text-4xl">
                  Successfully Providing services from 14 years
                </h3>
                <p class="mt-6">
                  Your trusted partner for all your home service needs. With a
                  commitment to excellence and a passion for customer
                  satisfaction, we strive to make your life easier by providing
                  reliable, professional, and affordable home services tailored
                  to your unique requirements.
                </p>
                <div class="mt-6">
                  <a
                    href="/contact"
                    class="px-4 py-2 bg-[#fff] text-[#344955] rounded hover:bg-[#344955] hover:text-white"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-10 text-[45px] font-black text-[#344955]  dark:text-gray-300">
        Who we are
      </h1>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0">
              <img src="./images/story.png" alt="storyimg"></img>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-2xl title-font font-medium mb-2">
                Our story
              </h2>
              <p className="leading-relaxed text-base">
                Our company was founded in the Baltimore-Washington metro area
                in 2010 as one of the first whole house cleaning services in the
                region.
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-2xl title-font font-medium mb-2">
                Our Misson
              </h2>
              <p className="leading-relaxed text-base">
                At ServiceSparrow, our mission is to redefine the standard of
                home services by providing exceptional quality, reliability, and
                convenience to our valued customers. We believe that a
                well-maintained home is the foundation of a happy and fulfilling
                life.
              </p>
            </div>
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0">
              <img src="./images/mission1.png" alt="storyimg"></img>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
              <img src="./images/custo.jpg" alt="cust"></img>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-2xl title-font font-medium mb-2">
                Our Customer Satisfaction
              </h2>
              <p className="leading-relaxed text-base">
                At ServiceSparrow, our mission is to redefine the standard of
                home services by providing exceptional quality, reliability, and
                convenience to our valued customers. We believe that a
                well-maintained home is the foundation of a happy and fulfilling
                life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container">
          <div className="flex flex-col md:ml-5 text-center mt-10 w-full mb-20">
            <h1 className="text-[50px] font-bold text-center title-font mb-4 text-[#344955]">
              Our professional Team
            </h1>
            <p className="lg:w-2/3 mx-auto w-full px-4 bg-purple-200 leading-relaxed text-base"></p>
          </div>
          <div className="flex flex-wrap w-full -m-4">
            {Details.map((person, index) => (
              <div
                key={index}
                className="w-full h-full px-4 mb-10 sm:w-1/2 m-0 lg:w-1/3 xl:w-1/3 "
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="inline-block mb-3 overflow-hidden text-xs justify-center md:ml-[110px] text-white bg-[#344955] rounded-full w-44 h-44 sm:w-64 sm:h-64">
                    <img
                      className="object-cover w-full h-full transition-all hover:scale-110"
                      src={person.image}
                      alt=""
                    />
                  </div>
                  <h2 className="text-xl font-bold text-center md:ml-[110px] dark:text-gray-400">
                    {person.name}
                  </h2>
                  <p className="mt-2 text-sm text-center text-blue-500 md:ml-[110px] dark:text-blue-400">
                    {person.profetion}
                  </p>
                  <div className="flex items-center justify-center mt-4 md:ml-[110px]">
                    <span className="inline-block mr-2 text-gray-700 dark:text-gray-400 hover:text-blue-500">
                      {person.phonenumber}
                    </span>
                    <div className="flex">
                      <p
                        className="inline-block mr-3 text-blue-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400"

                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-6 h-6 bi bi-facebook "
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                        </svg>
                      </p>
                      <p
                        className="inline-block mr-3 text-green-800 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-400"

                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-6 h-6 bi bi-twitter"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                        </svg>
                      </p>
                      <p
                        className="inline-block text-pink-400 dark:text-gray-400 hover:text-pink-400 dark:hover:text-pink-400 "

                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-6 h-6 bi bi-instagram"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Aboutus;
