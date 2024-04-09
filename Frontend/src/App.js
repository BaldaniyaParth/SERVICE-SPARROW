import "./App.css";
import Home from "./Pages/User/Home.js";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Gallery from "./Pages/User/Gallery.js";
import Homecleaning from "./Pages/User/Homecleaning.js";
// import "flowbite";
import Allservies from "./Pages/User/Allservies.js";
import Cardriver from "./Pages/User/Cardriver.js";
import Cooking from "./Pages/User/Cooking.js";
import Changepassword from "./Component/User/Changepassword.js";
import Babysiter from "./Pages/User/Babysiter.js";
import Watchmen from "./Pages/User/Watchmen.js";
import Aboutus from "./Pages/User/Aboutus.js";
import Serviceprofile from "./Pages/User/Serviceprofile.js";
import Login from "./Pages/User/Login.js";
import Faq from "./Pages/User/Faq.js";
import Registration from "./Pages/User/Registration.js";
import Contact from "./Pages/User/Contact.js";
import Forgottpassword from "./Pages/User/Forgottpassword.js";
import Resetpassword from "./Pages/User/Resetpassword.js";
import Privacypolicy from "./Pages/User/Privacypolicy.js";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./store/index.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import Adddetails from "./Pages/User/Adddetails.js";
import Userprofiles from "./Pages/User/Userprofiles.js";
import Thankyou from "./Pages/User/Thankyou.js";
import BookHelp from "./Pages/User/BookHelp.js";


function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <>
      <Provider store={store}>
      <ToastContainer />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Gallery />}></Route>
            <Route path="/servicedetail/:id" element={<Allservies />} />
            <Route path="/Homecleaning" element={<Homecleaning />}></Route>
            <Route path="/Babysiter" element={<Babysiter />}></Route>
            <Route path="/Cooking" element={<Cooking />}></Route>
            <Route path="/changepassword" element={< Changepassword />}></Route>
            <Route path="/Watchmen" element={<Watchmen />}></Route>
            <Route path="/Cardriver" element={<Cardriver />}></Route>
            <Route path="/about" element={<Aboutus />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/forgottpassword" element={<Forgottpassword />} />
            <Route path="/resetpassword/:token" element={<Resetpassword />} />
            <Route path="/adddetails" element={<Adddetails />} />
            <Route path="/privacypolicy" element={<Privacypolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Userprofiles" element={<Userprofiles />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/serviceprofile" element={<Serviceprofile />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/thankyou" element={<Thankyou />}/>
            <Route path="/bookhelp" element={<BookHelp />}/>
          </Routes>
        </div>
      </Provider>
    </>
  );
}
export default App;