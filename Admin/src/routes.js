import React from 'react';


import Dashboard from "views/Dashboard.js";
import User from "views/User";
import Services from "views/Services";
import Serviceprovider from "views/ServiceProvider";
import Contactus from "views/Contactus";
import Booking from 'views/Booking';
import Review from "views/Review";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  
  {
    path: "/services",
    name: "Services",
    icon: "nc-icon nc-tile-56",
    component: <Services />,
    layout: "/admin",
  },

  {
    path: "/user",
    name: "Service Taker",
    icon: "nc-icon nc-tile-56",
    component: <User />,
    layout: "/admin",
  },
 
  {
    path: "/serviceprovider",
    name: "Service Provider",
    icon: "nc-icon nc-tile-56",
    component: <Serviceprovider />,
    layout: "/admin",
  },

  {
    path: "/contactus",
    name: "Contact",
    icon: "nc-icon nc-tile-56",
    component: <Contactus />,
    layout: "/admin",
  }, 

  
  {
    path: "/booking",
    name: "Payment",
    icon: "nc-icon nc-tile-56",
    component: <Booking />,
    layout: "/admin",
  }, 
   
  {
    path: "/review",
    name: "Review",
    icon: "nc-icon nc-tile-56",
    component: <Review />,
    layout: "/admin",
  }
];


export default  routes ;