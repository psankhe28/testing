import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <h3>Your Company</h3>
      <h5>
        We Are Award Winning Web Design Agency From NewYork. We will help you
        improve your website and digital marketing, to increase your leads and
        sales online.
      </h5>
      <div class="box">
        <a class="button" href="#divOne">
          Contact US
        </a>
      </div>
      <div class="overlay" id="divOne">
        <div class="wrapper">
          <h2>Please Fill up The Form</h2>
          <a class="close" href="/">
            &times;
          </a>
          <div class="content">
            <div class="container">
              <form>
                <label>First Name</label>
                <input placeholder="Your name.." type="text" />
                <label>Last Name</label>
                <input placeholder="Your last name.." type="text" />
                <label>Subject</label>
                <textarea iplaceholder="Write something.."></textarea>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
 