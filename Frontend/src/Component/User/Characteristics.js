import React from "react";

const Functionality = () => {
  return (
    <>
      <div className="container mx-auto  max-w-7xl  px-4 sm:px-6 lg:py-24 lg:px-8  md:mt-[-30px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
          <div className="bg-[#344955] overflow-hidden hover:shadow-stone-400 hover:shadow-lg  transition-all duration-500 sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6 ">
              <dl>
                <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl ">
                  200
                </div>
                <div className="text-sm text-white sm:text-base">People</div>
              </dl>
            </div>
          </div>
          <div className="bg-[#fff] overflow-hidden shadow hover:shadow-lg transition-all duration-500 sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <div className="text-xl font-bold text-[#344955] sm:text-2xl md:text-3xl">
                  12000+
                </div>
                <div className="text-sm text-[#344955] sm:text-base">
                  Dedicated Maids
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-[#344955] overflow-hidden hover:shadow-stone-400 hover:shadow-lg transition-all duration-500 sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  8,000+
                </div>
                <div className="text-sm text-white sm:text-base">
                  Satisfied Customers
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow hover:shadow-lg transition-all duration-500 sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <div className="text-xl font-bold text-[#344955] sm:text-2xl md:text-3xl">
                  6
                </div>
                <div className="text-sm text-[#344955] sm:text-base">Services</div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Functionality;
