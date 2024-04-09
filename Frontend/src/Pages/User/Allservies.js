import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Component/User/Navbars";
import Footer from "../../Component/User/Footer";
import { IoMdCloseCircle } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";
import { booknow } from "../../store/action/user.action";
import { userHomeService } from "../../store/action/user.action";
import { userHomeSubservice } from "../../store/action/user.action";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Allservies = () => {
  const data = useSelector((state) => state.user);
  console.log(data, "data1");

  const data2 = useSelector((state) => state.user.userHomeService);
  console.log(data2, "data2");

  const { id } = useParams();
  console.log("id::", id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userHomeSubservice(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(userHomeService());
  }, [dispatch]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [categoryId, setCategoryId] = useState();
  const [providerId, setProviderId] = useState();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const openModal = (worker) => {
    setSelectedWorker(worker);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const serviceproviderId = localStorage.getItem("user");
  const userData = JSON.parse(serviceproviderId);

  console.log("userDatauserDatauserDatauserDatauserData", userData?._id);
  const validateDates = (startDate, endDate) => {
    // Convert start and end dates to Date objects for comparison
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    const currentDate = new Date();

    // Check if the selected start date is before the current date
    if (startDateObj < currentDate) {
      toast.error("Please select a valid date in the future.");
      return; // Exit booking process if validation fails
    }
    if (endDateObj < currentDate) {
      toast.error("Please select a valid end date in the future.");
      return; // Exit booking process if validation fails
    }

    // Check if end date is greater than start date
    if (endDateObj < startDateObj) {
      toast.error("End date must be greater than start date.");
      return false;
    }

    return true;
  };

  const validateTimes = (startTime, endTime) => {
    // Check if end time is greater than start time

    if (endTime <= startTime) {
      toast.error("End time must be greater than start time.");
      return false;
    }

    return true;
  };
  const handleBooking = (formData) => {
    dispatch(booknow(formData));
    toast.success("Booking succesfull");
    console.log("Booking Data:", formData);
    closeModal();
  };
  // const handleBooking = (formData) => {
  //   // Check if user is logged in
  //   if (!token) {
  //     toast.error("Please log in to book a service.");
  //     navigate("/login"); // Redirect to login page
  //     return;
  //   }

  // // Format dates to YYYY-MM-DD format
  // const formattedStartDate = formatDate(formData.startDate);
  // const formattedEndDate = formatDate(formData.endDate);

  // Update formData with formatted dates
  // const updatedFormData = {
  //   ...formData,
  //   startDate: formattedStartDate,
  //   endDate: formattedEndDate,
  // };

  // User is logged in, proceed with booking
  //   dispatch(booknow(updatedFormData));
  //   toast.success("Booking successful");
  //   console.log("Booking Data:", updatedFormData);
  //   closeModal();
  // };

  // Function to format date to YYYY-MM-DD format
  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, "0");
  //   const day = String(date.getDate()).padStart(2, "0");

  //   return `${day}-${month}-${year}`;
  // };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <section className="md:flex flex  md:pl-32 bg-[#344955] h-[85vh] rounded-br-[1000px] ">
        <div className=" container justify-center flex-1 px-4 py-6 mx-auto  mt-24 max-w-7xl lg:py-4 md:px-6">
          <div className="grid gap-7 lg:grid-cols-1 grid-cols-1">
            {data?.userHomeSubservice?.data?.categoryDetail && (
              <div className="lg:w-4/1 md:ml-[-90px] mx-auto flex flex-wrap">
                <img
                  alt="Homecleaning"
                  className="lg:w-1/2 w-full lg:h-[400px] md:mt-0 h-56 rounded-[70px] object-cover object-center "
                  src={data?.userHomeSubservice?.data?.categoryDetail?.image[1]}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 ">
                  <h1 className=" text-white text-[35px] title-font font-medium mb-4">
                    {
                      data?.userHomeSubservice?.data?.categoryDetail
                        ?.description1
                    }
                  </h1>
                  <p className="leading-relaxed text-white  text-center mx-16 text-xl">
                    {
                      data?.userHomeSubservice?.data?.categoryDetail
                        ?.description2
                    }
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className=" text-blue-900 mt-5">
        <h1 className="text-[40px] font-bold container mx-auto ">
          {data?.userHomeSubservice?.data?.categoryDetail?.description3}
        </h1>

        <div className="container mx-40 flex flex-col items-start mb-8 font-medium text-2xl">
          {data?.userHomeSubservice?.data?.categoryDetail?.description4
            .split("✔")
            .map((part, idx) => (
              <div key={idx} className="mb-2 text-center">
                {idx > 0 && <span className="mr-2">✔</span>}
                {part.trim()}
              </div>
            ))}
        </div>
        <p className="leading-relaxed text-blue-900 font-medium mx-32 text-2xl">
          <div className="container mx-auto mb-8">
            {data?.userHomeSubservice?.data?.categoryDetail?.description5}
          </div>
        </p>
      </div>
      <div className="text-blue-900 text-[40px] my-7 font-bold">
        {data?.userHomeSubservice?.data?.categoryDetail?.description6}
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {data?.userHomeSubservice?.data?.serviceProvider?.length === 0 ? (
            <div className="text-center text-red-900 font-bold mx-auto">
              No service providers available.
            </div>
          ) : (
            data?.userHomeSubservice?.data?.serviceProvider?.map(
              (allworker, index) => (
                <div key={index} class="w-full sm:w-1/3 lg:w-1/3 p-4">
                  {console.log("allworker", allworker?._id === userData?._id)}
                  {console.log(
                    "allworker.availability",
                    allworker.availability
                  )}
                  <div className="flex flex-col mb-4 overflow-hidden rounded dark:bg-gray-800">
                    <div className="w-full overflow-hidden h-80 mb-3">
                      <img
                        className="object-cover w-full h-full transition-all"
                        src={allworker.profileImage}
                        alt={`${allworker.name}`}
                      />
                    </div>
                    <div className="flex flex-col  overflow-hidden p-8 md:p-6  justify-center  md:mx-6 sm:mx-2 lg:mx-auto -mt-16 bg-white border rounded shadow lg:w-[400px] dark:border-gray-700 dark:bg-gray-700">
                      <div>
                        <h2 className="mb-1 text-xl  font-bold text-[#344955]">
                          {allworker.name} ({allworker.city})
                        </h2>
                        <h2 className="mb-1 text-x  font-bold text-[#344955]">
                          {allworker.availability}
                        </h2>
                        <h2 className="mb-1 text-xl  font-bold text-[#344955]">
                          {allworker.experience} year experience
                        </h2>
                        <p className="mb-1 text-xl ">
                          ₹{allworker.expectedfees} 1-hour fees
                        </p>
                        <p className="mb-1 text-xl ">{allworker.salary}</p>
                        <div className="mb-4">
                          <span className="mb-3 text-xl text-gray-700">
                            {allworker.mobile}
                          </span>
                        </div>
                        <div className="flex justify-center mt-5">
                          {allworker.availability === "Available" &&
                            allworker?._id !== userData?._id && (
                              <>
                                <button
                                  className="bg-[#344955] hover:bg-blue-700 text-white text-center hover:cursor-pointer font-bold py-2 px-4 rounded-full"
                                  onClick={() => {


                                    // Check if user is logged in
                                    if (!token) {
                                      toast.error(
                                        "Please log in to book a service."
                                      );
                                      navigate("/login"); // Redirect to login page
                                      return;
                                    }
                                    // User is logged in, proceed to open modal and set category/provider IDs
                                    openModal(allworker);
                                    setCategoryId(allworker?.serviceCategoryId);
                                    setProviderId(allworker?._id);
                                  }}
                                >
                                  Book Now
                                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </button>
                              </>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>  
      <div className="flex justify-center">
          <div className="text-center text-2xl mb-5">
            If you're unfamiliar with the booking process, please click on the
            link for further information.
            <button>
              <u>
                {" "}
                <Link to="/BookHelp" className="text-blue-600 text-xl">BookHelp</Link>
              </u>
            </button>
          </div>
        </div>
    
      <Footer />
      {isModalOpen && selectedWorker && (
        <div className="fixed inset-0 z-50  overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 max-w-md mx-auto rounded-lg">
            <div className="flex justify-between items-center mb-6 ">
              <h2 className="text-xl font-bold ">
                Book Now - {selectedWorker.name}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-600 cursor-pointer text-bold text-[30px] hover:text-red-600 pl-10"
              >
                <IoMdCloseCircle />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const startDate = e.target.startDate.value;
                const endDate = e.target.endDate.value;
                const startTime = e.target.startTime.value;
                const endTime = e.target.endTime.value;
                const description = e.target.description.value;

                if (
                  !validateDates(startDate, endDate) ||
                  !validateTimes(startTime, endTime)
                ) {
                  return; // Exit if validation fails
                }

                const formData = {
                  startDate,
                  endDate,
                  startTime,
                  endTime,
                  description,
                  categoryId,
                  serviceProviderId: providerId,
                  userId: token,
                };

                handleBooking(formData);
              }}
            >
              <div className="mb-4 flex justify-between">
                <div className="w-48">
                  <label
                    htmlFor="startDate"
                    className="block text-lg text-left font-medium text-gray-700"
                  >
                    Start Date:
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                  />
                </div>
                <div className="w-48 ml-4">
                  <label
                    htmlFor="endDate"
                    className="block text-lg text-left font-medium text-gray-700"
                  >
                    End Date:
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                  />
                </div>
              </div>
              <div className="mb-4 flex justify-between">
                <div className="w-48">
                  <label
                    htmlFor="startTime"
                    className="block text-lg text-left font-medium text-gray-700"
                  >
                    Start Time:
                  </label>
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                  />
                </div>
                <div className="w-48 ml-4">
                  <label
                    htmlFor="endTime"
                    className="block text-lg text-left font-medium text-gray-700"
                  >
                    End Time:
                  </label>
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    className="mt-1 p-2 border rounded-md w-full"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-lg text-left font-medium text-gray-700"
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#344955] text-white py-2 px-4 rounded-full"
                >
                  Book
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Allservies;
