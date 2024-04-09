/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./assets/css/paper-dashboard.css"

import AdminLayout from "layouts/Admin.js";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./redux/reducers/Index.reducer";
import SignIn from "components/SignIn/SignIn";
import { ToastContainer} from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById("root"));


const store = createStore(rootReducer, applyMiddleware(thunk));

const token = localStorage.getItem('token')
root.render(
  <Provider store={store}>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={token ? <AdminLayout /> : <SignIn/>} />
        <Route path="/admin/signin" element={<SignIn />} />
        <Route path="/" element={<Navigate to="/admin/signin" replace />} />
      </Routes>
    </BrowserRouter>
  </Provider>

);
