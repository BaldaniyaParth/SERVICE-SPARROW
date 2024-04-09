import React from "react";
import Navbar from "../../Component/User/Navbars";
import Footer from "../../Component/User/Footer";

const Cooking = () => {
  const Cook = [
    {
      image: "./assets/img/chefboy1.jpg",
      title: "chef",
      cookname: " varma raj ",
      cityname: "delhi",
      phonenumber: "91+5674567089",
      experienceyear: " 1 year  experience",
      href: "/booknow",
    },
    {
      image: "./assets/img/chef1.jpg",
      title: "chef",
      cookname: " patel kiran",
      cityname: "surat",
      phonenumber: "91+8970043212",
      experienceyear: "2 year  experience",
      href: "/booknow",
    },
    {
      image: "./assets/img/chef2.jpg",
      title: "chef",
      cookname: "suhan jeri",
      cityname: "chennai",
      phonenumber: "91+7865435603",
      experienceyear: "3 year experience",
      href: "/booknow",
    },
  ];
  return (
    <div>
      <Navbar />
      <section className="flex items-center py-24 font-poppins min-h-screen bg-[#344955]  rounded-br-[1000px] dark:bg-gray-900 ">
        <div className=" container justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
          <div className="grid gap-7 lg:grid-cols-1 grid-cols-1">
            <div className="lg:w-4/1 md:ml-[-90px] mx-auto flex flex-wrap">
              <img
                alt="chef"
                className="lg:w-1/2 w-full lg:h-[400px] md:mt-0 h-56 rounded-[70px] object-cover object-center "
                src="./assets/img/chef.jpg"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 ">
                <h1 className=" text-white text-[35px] title-font font-medium mb-4">
                  Cooking
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
                  A service services website offering cooking services provides
                  professionally prepared meals tailored to customers'
                  preferences. It includes chef profiles, customizable menus,
                  pricing details, booking options, and reviews. Additional
                  services like grocery shopping or cooking classes may also be
                  available.
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
          ✔ Our chefs are highly trained professionals, dedicated to delivering
          delicious and satisfying meals.
          <br />✔ We bring all necessary ingredients and equipment to each
          cooking session.
          <br />
          ✔ Enjoy transparent pricing with no hidden fees.
          <br />✔ We are fully bonded and insured for your peace of mind.
          <br />
          ✔ Conveniently schedule and pay online, making booking a cooking
          session hassle-free.
          <br />✔ No contracts or hidden fees, just straightforward and
          delightful culinary experiences.
        </div>
        <p className="leading-relaxed text-blue-900 font-medium mx-32 text-2xl">
          <div className="container mx-auto mb-8">
            To book your chef at your doorstep you can visit our Service Sparrow
            centre, or you can also book your chef service by calling at our
            contact number. Our toll free number is available 24*7 to help the
            customer. The Service Sparrow customer care assistant is friendly
            who resolve all kinds of issues related to the chef in India.
          </div>
        </p>
      </div>
      <div className="text-blue-900 text-[40px] my-7 font-bold">
        PurePride Cleaners
      </div>

      {/* //worked  successs*/}
      <div className="flex flex-wrap">
        {Cook.map((cook, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col mb-4 overflow-hidden rounded dark:bg-gray-800">
              <div className="w-full overflow-hidden h-60 mb-3">
                <img
                  className="object-cover w-[450px] h-full transition-all hover:scale-110"
                  src={cook.image}
                  alt={`${cook.title}`}
                />
              </div>
              <div className="relative flex flex-col p-8 md:p-6 md:mx-auto sm:mx-2 lg:ml-7 -mt-16 bg-white border rounded shadow lg:w-[400px] dark:border-gray-700 dark:bg-gray-700">
                <div>
                  <h2 className="mb-2 text-xl text-center font-bold text-[#344955]">
                    {cook.cookname}({cook.cityname})
                  </h2>
                  <p className="mb-1 text-xl text-center">
                    {cook.experienceyear}
                  </p>
                  <div className="flex justify-center">
                    <span className="inline-block mr-5 text-xl text-gray-700 ">
                      {cook.phonenumber}
                    </span>
                  </div>
                  <div className="flex mt-3 justify-center">
                    <a
                      href={`${cook.href}`}
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
    </div>
  );
};

export default Cooking;
