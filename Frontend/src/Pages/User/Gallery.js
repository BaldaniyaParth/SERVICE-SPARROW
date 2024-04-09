import React from "react";
import Navbar from "../../Component/User/Navbars";
import Footer from "../../Component/User/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userHomeService } from "../../store/action/user.action";

import { Link } from "react-router-dom";

const Gallery = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);

  //console.log(userHomeSubservice, "jujuj");
  console.log(data, "home--");

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    dispatch(userHomeService());
  }, [dispatch]);
  //console.log("service data succes", serviceData);

  console.log(
    "serviceData?.serviceCategories",
    data?.userHomeService?.data?.serviceCategories
  );

  return (
    <>
      <Navbar />
      <section>
        <div className="min-h-screen bg-[#344955] rounded-br-[600px] dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h2 className="font-bold text-[#fff] text-2xl  mt-10 sm:text-3xl md:text-4xl lg:text-4xl">
              Why to choose US?
            </h2>

            <div class="container mx-auto flex flex-col mt-10 md:flex-row space-y-8 md:space-y-0 text-center md:justify-center md:items-center">
              <div class="md:w-full lg:w-1/2 px-4 md:order-last">
                <img
                  src="../images/about.jpg"
                  alt="servicesimage"
                  class=" object-cover mx-auto rounded-bl-[200px] rounded-tr-[200px] w-96 h-[300px]"
                />
              </div>

              <div class="w-full md:w-[600px] space-y-4 md:pl-4">
                <div class="mb-6 leading-7 text-left text-[#fff]">
                  <h3 className="font-bold mt-8  text-[#dec2ba] md:mt-0 sm:text-3xl">
                    Service Sparrow
                  </h3>
                  <p className="sm:text-[18px] text-[#fff] mt-6">
                    We are one of best cleaning services provider in India. We
                    knew what is take to maintain a healthier lifestyle, and
                    therefore, staying in a clean atmosphere is essential.
                    Without spending any time on nonsense things, a highly
                    reliable and efficient cleaning company like us can be
                    booked in under a minute!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-600 body-font rounded-3xl ">
          <div className="container px-5 py-24 mx-auto m-5 ">
            <div className="flex flex-col mt-3">
              <h2 className="pb-4 text-4xl font-bold text-center text-[#264c63] dark:text-gray-400">
                Elevate Your Home with Our Services
              </h2>
              <div className="mx-auto mb-16 border-b border-[#344955] w-[280px] dark:border-gray-400"></div>
            </div>

            <div className="font-normal text-teal-900 text-xl px-5 py-7 md:mx-[110px] ">
              <p>
                At ServiceSparrow, we understand the importance of a clean and
                tidy home. Our professional home cleaning services are designed
                to give you peace of mind and a spotless living environment.
                Whether you need a one-time deep cleaning or regular
                maintenance, our team of experienced cleaners will leave your
                home sparkling from top to bottom. We use eco-friendly cleaning
                products and state-of-the-art equipment to ensure a thorough and
                safe cleaning process.
              </p>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              {data?.userHomeService?.data?.serviceCategories?.map(
                (servicecard, index) => (
                  <div className="p-4 xl:w-1/3 md:w-1/2 w-full  duration-500 hover:shadow-xl hover:rounded-3xl hover:-translate-y-6">
                    <div className="h-full p-6 rounded-3xl bg-slate-50 border-gray-300 flex flex-col relative overflow-hidden">
                      <div
                        key={index}
                        className="rounded-3xl  h-64 overflow-hidden "
                      >
                        <Link to={`/servicedetail/${servicecard?._id}`}>
                          <img
                            alt={`${servicecard.name}`}
                            className="object-cover object-center  cursor-pointer h-full w-full hover:scale-125 ... duration-300"
                            src={servicecard.imageUrl[0]}
                            onClick={scrollToTop}
                          />
                        </Link>
                      </div>

                      <Link
                        to={`/servicedetail/${servicecard?._id}`}
                        className="text-xl font-medium cursor-pointer title-font text-blue-900 mt-5"
                        onClick={scrollToTop}
                      >
                        {servicecard.name}
                      </Link>
                      <p className="text-base text-green-900 leading-relaxed mt-2 ">
                        {servicecard.description}
                      </p>
                      <Link
                        to={`/servicedetail/${servicecard?._id}`}
                        className="inline-flex items-center mt-3 text-blue-900 "
                        id="learnmore"
                        onClick={scrollToTop}
                        // href={`/servicedetail/${servicecard.serviceProviders}`}
                      >
                        View More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <h1 className="text-center text-[40px] font-bold -mt-14 text-[#344955]">
            Customer Satisfaction!!
          </h1>
          <div className="font-normal text-teal-900 text-xl my-10 md:mx-[100px] ">
            <p>
              At Service Sparrow, we understand the importance of attention to
              detail and customer satisfaction. That's why we work closely with
              each client to understand their vision and tailor our services to
              meet their specific requirements. Our home services are designed
              to exceed your expectations and elevate your living experience.
              With a dedicated team of professionals, we take pride in
              delivering exceptional service.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
