import React from "react";
import "./Mentors.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Mentors = () => {
  const options = {
    center: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    loop: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      680: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: true,
      },
    },
  };
  return (
    <div className="ment">
      <h1>Mentors</h1>
      <div className="main-mentor">
      <OwlCarousel
            id="customer-testimonoals"
            className="owl-carousel owl-theme"
            {...options}>
        <div className="profile-card">
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000"
              height="180"
              width="180"
              alt=""
            />
          </div>
          <div className="caption">
            <h3>David Corner</h3>
            <p>Front End Developer</p>
            <div className="social-links">
              <a href="/">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000"
              height="180"
              width="180"
              alt=""
            />
          </div>
          <div className="caption">
            <h3>David Corner</h3>
            <p>Front End Developer</p>
            <div className="social-links">
              <a href="/">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000"
              height="180"
              width="180"
              alt=""
            />
          </div>
          <div className="caption">
            <h3>David Corner</h3>
            <p>Front End Developer</p>
            <div className="social-links">
              <a href="/">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="img">
            <img
              src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000"
              height="180"
              width="180"
              alt=""
            />
          </div>
          <div className="caption">
            <h3>David Corner</h3>
            <p>Front End Developer</p>
            <div className="social-links">
              <a href="/">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
            </OwlCarousel>
       
  
      </div>
    </div>
  );
};

export default Mentors;
