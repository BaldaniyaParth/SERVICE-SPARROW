import React from "react";

const Apoint = () => {
  return (
    <>
      <div className=" container mx-auto  flex flex-col text-center w-full md:mb-20 mt-[50px]">
        <h1 className="md:text-4xl text-4xl font-Courier New font-bold italic text-[#344955]">
          Why Prefer Us?
        </h1>
      </div>
      <div className="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-16 px-5">
        <div className="flex gap-4 items-center flex-col mb-20 ">
          <span className="text-violet-600 bg-[#344955]/10 p-3 rounded-full">
            <img
              className="w-10 h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
              src="./images/reliable.jpg"
              alt="cleaning"
            />
          </span>
          <div>
            <h3 className="font-semibold text-xl"> Experienced And Reliable</h3>
            <p className="mt-1 text-gray-500">
              We’re not an agency, but a young startup run by a passionate group
              of professionals
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col ">
          <span className="text-violet-600 bg-[#344955]/10 p-3 rounded-full">
            <img
              className="w-10 h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
              src="./images/affordable.jpg"
              alt="cleaning"
            />
          </span>
          <div>
            <h3 className="font-semibold text-xl">Transparent Pricing</h3>
            <p className="mt-1 text-gray-500">
              {" "}
              You get what you pay for. Additionally, you get replacement
              guarante.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col ">
          <span className="text-violet-600 bg-[#344955]/10 p-3 rounded-full">
            <img
              className="w-10 h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
              src="./images/customesupport.jpg"
              alt="cleaning"
            />
          </span>
          <div>
            <h3 className="font-semibold text-xl">Customer Support </h3>
            <p className="mt-1 text-gray-500">
              {" "}
              Our executives will always be there to hear you out and solve your
              issues
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apoint;