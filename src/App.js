import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./sections/AboutUs/About";
import Testimonials from "./sections/Testimonials/Testimonials";
// import ContactUs from './sections/ContactUs/ContactUs';
// import Banner from "./sections/Header/Banner/Banner";
// import Navbar from "./sections/Header/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./sections/Contact/Contact";
import Home from "./pages/Home";
import "./assets/js/script";
AOS.init();

function App() {
  return (
    <>
       <Router>
        <div className="App">
          {/* <Navbar /> */}
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <Footer />
      <div></div>
    </>
  );
}

export default App;
