import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Trust = () => {
 
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 ">
          <h2 className="mb-4 text-center text-4xl  text-[#344955] font-Courier New font-bold italic md:mb-8 lg:text-3xl">
            Trusted by the best
          </h2>

          <div className="slider-container mx-auto flex justify-evenly">
              <div>
                <div className="flex  justify-center  text-indigo-500 hover:scale-110">
                  <img
                    alt="gallery"
                    className="md:h-40 h-20 rounded-md hover:scale-100 hover:shadow-lg duration-300 "
                    src="./images/tc.jpg"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-center text-indigo-500 hover:scale-110">
                  <img
                    alt="gallery"
                    className="md:h-40  h-20 rounded-md hover:scale-100 hover:shadow-xl duration-300 "
                    src="./images/tc1.jpg"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-center  text-indigo-500 hover:scale-110">
                  <img
                    alt="gallery"
                    className="md:h-40  h-20 rounded-md hover:scale-100 hover:shadow-xl duration-300 "
                    src="./images/tc5.jpg"
                  />
                </div>
              </div>
              <div className="flex justify-center text-indigo-500 hover:scale-110">
                <img
                  alt="gallery"
                  className="md:h-40  h-20 rounded-md hover:scale-100 hover:shadow-xl duration-300 "
                  src="./images/tc4.jpg"
                />
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trust;