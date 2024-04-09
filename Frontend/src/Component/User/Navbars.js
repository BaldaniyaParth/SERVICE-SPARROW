import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import DropdownMenu from "./DropdownMenu";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  console.log("role0", role);

  console.log("%%%%%0", role === "Service Provider")
  // const isServiceProvider = role === "Service Provider";
  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const navItems = [
    { id: 1, link: "/", text: "Home" },
    { id: 2, link: "/services", text: "Services" },
    { id: 3, link: "/about", text: "About" },
    { id: 4, link: "/contact", text: "Contact" },
  ];

  const menuItemTacker = [
    {
      label: "Profile",
      className:
        "flex items-center text-[0.75rem] text-secondary-opacity-80 border-transparent hover:bg-secondary-opacity-10",
      icon: "../images/dummyimage.jpg",
      onClick: () => navigate("/userprofiles"),
    },
    {
      label: "Logout",
      className:
        "flex items-center text-[0.75rem] text-warning border-transparent hover:bg-secondary-opacity-10",
      icon: "../images/logout-8 (1).png.jpg",
      onClick: handleLogout,
    },
  ];

  const menuItemsProvicer = [
    {
      label: "Profile",
      className:
        "flex items-center text-[50px] h-[40px] text-secondary-opacity-80 border-transparent hover:bg-secondary-opacity-10",
      icon: "../images/myprofile.jpg",
      onClick: () => navigate("/serviceprofile"),
    },
    {
      label: "Add Details",
      className:
        "flex items-center text-[0.75rem] text-secondary-opacity-80 border-transparent hover:bg-secondary-opacity-10",
      icon: "../images/edit.jpg", // Assuming you have an appropriate icon for this
      onClick: () => navigate("/adddetails"),
    },
    {
      label: "Logout",
      className:
        "flex items-center text-[0.75rem] text-warning border-transparent hover:bg-secondary-opacity-10",
      icon: "../images/logout-8 (1).png.jpg",
      onClick: handleLogout,
    },
  ];


  const renderProfileIcon = () => (
    <li className="p-4 rounded-xl duration-300 hover:text-black cursor-pointer border-gray-600">
      <DropdownMenu

        menuItems={role === "Service Provider" ? menuItemsProvicer : menuItemTacker}
        alignment="right-0"
      >
        <div className="astro-btn nav-profile-pic ml-[0.375rem] lg:ml-[1.5rem] md:ml-[1.25rem] sm:ml-[1rem] xs:ml-[0.75rem] 2xs:ml-[0.5rem]">
          <img
            src="../images/dummyimage1.jpg"
            className="rounded-full h-[45px] w-[45px] aspect-square shadow-thin bg-[#FFA78D] mix-blend-multiply object-cover cursor-pointer"
            alt="profile pic"
            referrerPolicy="no-referrer"
          />
        </div>
      </DropdownMenu>
    </li>
  );

  return (
    <div className="bg-[#344955]">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center md:h-18 h-[70px] py-[50px] font-normal text-white">
          <div>
            <img
              alt="gallery"
              className="w-[50%]"
              src="../images/logo3.jpg"
            />
          </div>

          <ul className="hidden md:flex">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="px-4 py-[1px] self-center hover:bg-[#344955]  rounded-[10px] m-2 cursor-pointer hover:border-b text-[20px] duration-300 hover:text-white"
              >
                <Link to={item.link}>{item.text}</Link>
              </li>
            ))}
            {token && renderProfileIcon()}
            {!token && (
              <li className="p-4 rounded-xl duration-300 hover:text-black cursor-pointer border-gray-600">
                <Link to="/login">
                  <button
                    id="signup"
                    className="border-2 border-[#ccc9c9] hover:bg-[transparent] hover:text-[#fff] btn px-4 py-2 rounded-[2px] bg-[#ccc9c9] font-bold text-[#344955]"
                  >
                    Sign In
                  </button>
                </Link>
              </li>
            )}
          </ul>

          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          <ul
            className={`${nav
              ? "fixed md:hidden left-0 top-0 w-[92%] h-[340px] bg-[#344955] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
              }`}
          >
            {navItems.map((item) => (
              <li
                key={item.id}
                className="p-4  rounded-xl hover:bg-[#ccc9c9] duration-300 hover:text-black cursor-pointer border-gray-600"
              >
                <Link to={item.link}>{item.text}</Link>
              </li>
            ))}
            {token && renderProfileIcon()}
            {!token && (
              <li className="p-4 rounded-xl duration-300 hover:text-black cursor-pointer border-gray-600">
                <Link to="/login">
                  <button
                    id="signup"
                    className="border-2 border-[#ccc9c9] hover:bg-[transparent] hover:text-[#fff] btn px-4 py-2 rounded-[2px] bg-[#ccc9c9] font-bold text-[#344955]"
                  >
                    Sign In
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;