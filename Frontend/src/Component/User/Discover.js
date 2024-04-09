import React from "react";

const serivces = [

  {
    id: 1,
    image: "./images/maid.jpg",
    title: "Home Cleaning",
    desc: "Hire an all work househelp who would work in the family's home, responsible..",
    page: "/services",
  },

  {
    id: 2,
    image: "./images/cook.jpg",
    title: "Cooking",
    desc: "Hire a cook who would plan, prepares, and cooks food items to ensure the...",
    page: "/services",
  },
  {
    id: 3,
    image: "./images/babysiter2.jpg",
    title: "Babysiter",
    desc: "Hire a babysitter who would keep children's living and play areas tidy. Helps with homework...",
    page: "/services",
  },

  {
    id: 4,
    image: "./images/driver1.jpg",
    title: "Cardriver",
    desc: "Hire a Driver Who would Keep Drive And Skilled Driver. Help To Reach Your Destination...",
    page: "/services",
  },

  {
    id: 5,
    image: "./images/watchman.jpg",
    title: "Watchmen",
    desc: "Hire a watchman To Secure Your Home. We Give Your Fully Trained WatchMan....",
    page: "/services",
  },

  {
    id: 6,
    image: "./images/all rounder1.jpg",
    title: "Allservies",
    desc: "Experience convenience and peace of mind with our versatile all-rounder",
    page: "/services",
  },
];

const Discover = () => {
  return (
    <>
      <section className="container mx-auto p-10 mt-[20px] md:py-12 px-0 md:p-8 md:px-0">
        <h2 className="mb-4 text-center text-3xl  text-[#344955] font-Courier New font-bold italic md:mb-8 lg:text-4xl">
          Discover
        </h2>
        <section className=" md:p-0 grid grid-cols-1 h-[100%] sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-10 items-start ">
          {serivces.length > 0 &&
            serivces.map((res) => {
              return (
                <>
                  <section
                   key={res.id}
                    className="bg-[#fcfcff]  p-[10px] rounded-[5px] h-[100%]  text-center transform  hover:-translate-y-2 transition-all duration-500  hover:drop-shadow-xl cursor-pointer"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
                  >
                    <img
                      alt="gallery"
                      className="h-[250px] rounded-[5px] w-[100%]"
                      src={res.image}
                    />
                    <div className="space-x-1 flex justify-center"></div>
                    <h1 className="text-[30px] text-[#3f5765] font-bold my-5">
                      {res?.title}
                    </h1>
                    <p className="mb-0 text-[15px] text-gray-700 h-[100px] overflow-hidden">
                      {res?.desc}
                    </p>
                    <a
                      href={`${res?.page}`}
                      className="font-bold text-[#344955] transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                    >
                      Read more
                    </a>
                  </section>
                </>
              );
            })}
        </section>
      </section>
    </>
  );
};

export default Discover;