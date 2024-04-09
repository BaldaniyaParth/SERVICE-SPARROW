import React from "react";
import Navbar from "../../Component/User/Navbars";
import Footer from "../../Component/User/Footer";

const Homecleaning = () => {
  const Home = [
    {
      image: "./assets/img/boyclean.jpg",
      title: "Homemaid",
      Homemidename: "pandy taran",
      cityname: "delhi",
      phonenumber: "91+9124568089",
      experienceyear: " 1 year  experience",
      href: "/booknow",
    },
    {
      image: "./assets/img/boyserices.jpg",
      title: "Homemaid",
      Homemidename: " patil suresh ",
      cityname: "surat",
      phonenumber: "91+8976543202",
      experienceyear: "2 year  experience",
      href: "/booknow",
    },
    {
      image: "./assets/img/girlcleaning.jpg",
      title: "Homemaid",
      Homemidename: " moni roy ",
      cityname: "chennai",
      phonenumber: "91+7985435673",
      experienceyear: "3 year experience",
      href: "/booknow",
    },
  ];
  return (
    <>
      <Navbar />
      <section className="flex items-center py-24 font-poppins min-h-screen bg-[#344955]  rounded-br-[1000px] dark:bg-gray-900 ">
        <div className=" container justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
          <div className="grid gap-7 lg:grid-cols-1 grid-cols-1">
            <div className="lg:w-4/1 md:ml-[-90px] mx-auto flex flex-wrap">
              <img
                alt="Homecleaning"
                className="lg:w-1/2 w-full lg:h-[400px] md:mt-0 h-56 rounded-[70px] object-cover object-center "
                src="./assets/img/home-cleaning.jpg"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 ">

                <h1 className=" text-white text-[35px] title-font font-medium mb-4">
                  Homecleaning
                </h1>
                <div className="flex  justify-center mb-4">
                  <span className="flex ">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-yellow-500 "
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-yellow-400 "
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-yellow-300 "
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-yellow-200 "
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-yellow-100 "
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-100 -mt-2 ml-3">4 Reviews</span>
                  </span>
                </div>
                <p className="leading-relaxed text-white  text-center mx-16 text-xl">
                  Our home cleaning service offers professionally executed
                  cleaning sessions tailored to our customers' preferences. Our
                  website provides comprehensive details including cleaner
                  profiles, customizable cleaning packages, transparent pricing,
                  easy booking options, and customer reviews. Additionally, we
                  may offer supplementary services such as grocery shopping or
                  organizing sessions to enhance your home's cleanliness and
                  organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" text-blue-900 mt-5">
        <h1 className="text-[40px] font-bold container mx-auto ">
          You do the relaxing,When we do the cleaning.
        </h1>

        <div className=" flex justify-center text-left mb-8 font-medium text-2xl">
          <br />
          ✔ Our cleaners are highly trained professionals, committed to
          delivering exceptional cleaning services.
          <br />✔ We bring all necessary supplies and equipment to every
          cleaning session.
          <br />
          ✔ Enjoy transparent pricing with no hidden fees.
          <br />✔ We are fully bonded and insured for your peace of mind.
          <br />
          ✔ Conveniently schedule and pay online, making booking a cleaning
          appointment hassle-free.
          <br />✔ No contracts or hidden fees, just straightforward and thorough
          cleaning services.
        </div>
        <p className="leading-relaxed text-blue-900 font-medium mx-32 text-2xl">
          <div className="container mx-auto mb-8">
            To book your Homemid at your doorstep you can visit our Service
            Sparrow centre, or you can also book your Homemid service by calling
            at our contact number. Our toll free number is available 24*7 to
            help the customer. The Service Sparrow customer care assistant is
            friendly who resolve all kinds of issues related to the Homemid in
            India.
          </div>
        </p>
      </div>
      <div className="text-blue-900 text-[40px] my-7 font-bold">
        PurePride Cleaners
      </div>

      {/* //worked  successs*/}
      <div className="flex flex-wrap">
        {Home.map((home, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col mb-4 overflow-hidden rounded dark:bg-gray-800">
              <div className="w-full overflow-hidden h-60 mb-3">
                <img
                  className="object-cover w-[450px] h-full transition-all"
                  src={home.image}
                  alt={`${home.title}`}
                />
              </div>
              <div className="relative flex flex-col p-8 md:p-6 md:mx-auto sm:mx-2 lg:ml-7 -mt-16 bg-white border rounded shadow lg:w-[400px] dark:border-gray-700 dark:bg-gray-700">
                <div>
                  <h2 className="mb-2 text-xl text-center font-bold text-[#344955]">
                    {home.Homemidename}({home.cityname})
                  </h2>
                  <p className="mb-1 text-xl text-center">
                    {home.experienceyear}
                  </p>
                  <div className="flex justify-center">
                    <span className="inline-block mr-5 text-xl text-gray-700 ">
                      {home.phonenumber}
                    </span>
                  </div>
                  <div className="flex mt-3 justify-center">
                    <a
                      href={`${home.href}`}
                      className="bg-[#344955] hover:bg-[#49616f] text-white text-xl text-center font-bold py-3 px-6 rounded-full"
                    >
                      Book Now
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Homecleaning;
