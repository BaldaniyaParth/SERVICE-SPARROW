import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userHomeService } from "../../store/action/user.action";
const Header = () => {
  const [formData, setFormData] = useState({
    serviceCategoryId: "", 
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);

  
  useEffect(() => {
    dispatch(userHomeService());
  }, [dispatch]);

  const handleSelectChange = (e) => {
    const selectedCategoryId = e.target.value;
    setFormData({ serviceCategoryId: selectedCategoryId });
   
    navigate(`/servicedetail/${selectedCategoryId}`);
  };

  return (
    <>
      <div className="md:flex flex  md:pl-32 bg-[#344955] h-[85vh] rounded-br-[1000px]">
        <div className=" container mx-auto md:w-1/2 w-[400px] md:mt-40 mt-32  ">
          <h1 className="leading-4 md:pt-0 pt-4 md:text-4xl text-2xl font-Courier text-left New font-bold italic  text-[#fff] ">
            Hiring Service Experts{" "}
          </h1>
          <span className="flex md:text-4xl text-3xl font-Courier New font-bold italic text-[#fff]">
            {" "}
            Made Easy..
          </span>
          <p className="text-left text-[#ccc9c9] mt-[30px]">
            
            Welcome to Service Sparrow, your premier destination for seamless home services! At Service Sparrow, we understand the importance of a well-maintained home, and we're here to make your life easier.
            Our dedicated team of skilled professionals is committed to providing top-notch services ranging from cleaning and cooking etc.. work to home cleaning and maintenance
          </p>
          <div className="flex  md:w-full md:p-0 p-4">
            <div className="md:w-[70%] w-10/12  ">
              <form>
              <div className="relative md:w-80 md:mt-8 mt-3">
             
                  <select 
                    className="border rounded-lg w-full py-2 px-4 text-gray-800 focus:outline-none"
                    id="serviceCategoryId"
                    name="serviceCategoryId"
                    onChange={handleSelectChange}
                    value={formData.serviceCategoryId}
                  >
                    <option value="">Select a service</option>
                    {data?.userHomeService?.data?.serviceCategories?.map(
                      (service) => (
                        <option key={service._id} value={service._id}>
                          {service.name}
                        </option>
                      )
                    )}
                  </select>
                  <span
                    
                    className="absolute top-0 rounded-lg  end-0 md:p-5 p-5 flex items-center text-sm font-medium h-full text-[#344955] bg-[#ccc9c9]"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </span>
                </div>
              </form> 
            </div>
          </div>
    </div>
     <div>
          <div className="mainimage container mx-auto mt-[90px]  ">
            <picture>
              <img
                className="subimage1 rounded-md transition transform hover:-translate-y-4 motion-reduce:transition-none duration-300 motion-reduce:hover:transform-none "
                src="./images/cleaning2.jpg"
                alt="cleaning"
              />
            </picture>
            <div>
              <picture>
                <img
                  className="subimage2 rounded-md transition transform hover:-translate-y-4 motion-reduce:transition-none duration-300 motion-reduce:hover:transform-none"
                  src="./images/cook4.jpg"
                  alt="cleaning"
                />
              </picture>
              <picture>
                <img
                  className="subimage3 rounded-md transition transform hover:-translate-y-4 motion-reduce:transition-none duration-300 motion-reduce:hover:transform-none"
                  src="./images/babysiter1.jpg"
                  alt="cleaning"
                />
              </picture>
            </div>
          </div>
     </div>
      </div>
    </>
  );
};

export default Header;
