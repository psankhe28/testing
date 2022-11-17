import React from "react";
import "./PatRes.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img from './images'

const PastRes = () => {
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
                src={img.Rajasi}
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
                src={img.Rishav}
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
                src={img.Rohit}
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
                src={img.Sakshi}
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
                src={img.Sarthak}
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
                src={img.Shaik}
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
                src={img.Shatakshi}
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
                src={img.Shivangi}
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
                src={img.Shlok}
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
                src={img.Shrey}
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
                src={img.Shreya}
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
                src={img.ShreyaJoshi}
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
                src={img.Shubham}
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
                src={img.ShubhamPatil}
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
                src={img.Shweta}
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
                src={img.Srinibash}
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
                src={img.Suneel}
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
                src={img.Swapnaneel}
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
                src={img.Syed}
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
                src={img.Utkarsh}
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
                src={img.Vaishnavi}
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
                src={img.Varssha}
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
                src={img.Vidushi}
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

export default PastRes;
