import React from "react";
import Navbar from "../../Component/User/Navbars";

import Footer from "../../Component/User/Footer";
const BookHelp = () => {
  return (
    <div>
      <Navbar />

      <section className="text-gray-600 body-font">
        <h1 className="mt-10 text-4xl text-[#344955] font-bold">
          Booking Steps
        </h1>
        <div className="container px-5 py-16 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-[#344955] rounded-full inline-flex items-center justify-center">
                <img src="./assets/img/calender.png" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <p className="leading-relaxed text-[18px]">
                  Please select the start date for the service and the end date
                  for its completion.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src="./assets/img/time.png" alt="confrim" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <p className="leading-relaxed text-[18px]">
                  Please select the start time for the service and the end time
                  for its completion. For example: Start Time: 09:00 End Time:
                  10:00, Start Time: 11:00 End Time: 13:00.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24  rounded-full inline-flex items-center justify-center">
                <img
                  className=""
                  src="./assets/img/confirm1.png"
                  alt="confrim"
                />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <p className="leading-relaxed text-[18px]">
                  After booking, the service provider will confirm your request,
                  and then you'll need to make the payment. If the service
                  provider rejects the request, you'll receive a rejection
                  message.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 rounded-full inline-flex items-center justify-center">
                <img className="" src="./assets/img/money1.png" alt="confrim" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <p className="leading-relaxed text-[18px]">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BookHelp;
