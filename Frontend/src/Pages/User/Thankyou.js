import React from "react";
import Navbar from "../../Component/User/Navbars";
import Footer from "../../Component/User/Footer";
const Thankyou = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex justify-center mt-5">
          <img
            className="h-[50%] w-[50%]"
            src="../assets/img/thankyou.svg"
            alt="thankyou"
          />
        </div>
        <div className="text-[#6c9fbd] font-bold text-xl  md:text-3xl lg:text-5xl text-center mt-11">
          <span className="uppercase text-cyan-800">
          😊 Thank you for your message
          </span>
        </div>
        <div className="text-[#344955] font-bold text-xl  md:text-xl lg:text-xl text-center mt-3 capitalize mb-4">
          <span> We’ll reply shortly!</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Thankyou;