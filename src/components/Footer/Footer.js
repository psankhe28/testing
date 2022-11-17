import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import styled from "styled-components";
import {
  FaEnvelope,
  FaArrowRight,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;
  img {
    margin-right: 0.5rem;
  }
`;

const Footer = () => {
  return (
    <div>
      <footer style={{fontSize:'16px'}}>
        <div className="row">
          <div className="col">
            <Logo>
              <img src={logo} alt="Rangawardhan" width="170" />
              <br/>
            </Logo>{" "}
            <p></p>
          </div>
 
          <div className="col">
            <h3 style={{fontSize: '20px',color:'white'}}>
              Links
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
              <li>
                <a href="/team">Our Team</a>
              </li>
              
            </ul>
          </div>
          <div className="col">
            <h3 style={{fontSize: '20px',color:'white'}}>
              Links
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
              <li>
                <a href="/team">Our Team</a>
              </li>
              
            </ul>
          </div>
          <div className="col">
            
           
            <div className="social-icons">
              <a href="prepkare@gmail.com" target="blank">
                <div className="social-icon">
                  {" "}
                  <FaEnvelope />
                </div>
              </a>
              <a href="https://instagram.com/prepkare?igshid=1s2k8iqmh8rx8
" target="blank">
                <div className="social-icon">
                  <FaInstagram />
                </div>{" "}
              </a>

              <a href="https://www.facebook.com/PrepKare-102875175001953/" target="blank">
                <div className="social-icon">
                  {" "}
                  <FaFacebook />
                </div>
              </a>

              <a href="https://www.linkedin.com/company/prepkare" target="blank">
                <div className="social-icon">
                  <FaLinkedin />
                </div>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">PrepKare,Copyright &#169; 2022</p>
      </footer>
    </div>
  );
};

export default Footer;