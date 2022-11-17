import React from "react";
import "./PatRes.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img from './images'


const PastRes1 = () => {
  const options = {
    center: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    loop: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      680: {
        items: 6,
        nav: false,
      },
      1000: {
        items: 10,
        nav: true,
      },
    },
  };
  return (
    <div className="res">
      {/* <h1>Mentors</h1> */}
      <div className="res-mentor">
      <OwlCarousel
            id="customer-res"
            className="owl-carousel owl-theme"
            {...options}>
       <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Aastha}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Abhijeet}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Abhijit}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Abhilash}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Abhinav}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Aditi}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Aishika}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Akshay}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Akshita}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Ambuj}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Anurag}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.AnuragRajkumar}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Anusha}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Aparna}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Apoorv}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Apoorva}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Arushi}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Atigya}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Avichal}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Bhargavi}
                height="100"
                width="100"
                alt=""
              />
            </div>
          </div>

            </OwlCarousel>
       
  
      </div>
    </div>
  );
};

export default PastRes1;
