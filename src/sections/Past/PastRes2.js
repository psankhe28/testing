import React from "react";
import "./PatRes.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img from './images'

const PastRes2 = () => {
  const options = {
    center: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
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
          {...options}
        >
          <div className="res-profile-card">
            <p style={{ textAlign: "center" }}>IIFT</p>
            <div className="res-img">
              <img
                src={img.Chandni}
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
                src={img.Dipayan}
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
                src={img.Divyansh}
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
                src={img.Govindam}
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
                src={img.Harshita}
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
                src={img.Janhavi}
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
                src={img.Juhi}
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
                src={img.Kanishka}
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
                src={img.Karthik}
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
                src={img.Khushi}
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
                src={img.Khyati}
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
                src={img.Kiran}
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
                src={img.Kodukula}
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
                src={img.Mansi}
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
                src={img.Mayur}
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
                src={img.Mohammed}
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
                src={img.Nachiket}
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
                src={img.Nidhi}
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
                src={img.Parth}
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
                src={img.Payel}
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
                src={img.Pooja}
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
                src={img.Praneet}
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
                src={img.Prasan}
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
                src={img.Pratyush}
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

export default PastRes2;
