import Navbar from "../../Component/User/Navbars";
import Header from "../../Component/User/Header";
import Discover from "../../Component/User/Discover";
import Apoint from "../../Component/User/Apoint";
import Review from "../../Component/User/Review";
import Functionality from "../../Component/User/Characteristics";
import Trust from "../../Component/User/Trust";
import Footer from "../../Component/User/Footer";
import Steps from "../../Component/User/Steps";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Apoint />
      <Discover />
      <Steps />
      <Functionality />
      <Review />
      <Trust />
      <Footer />
    </>
  );
};

export default Home;
