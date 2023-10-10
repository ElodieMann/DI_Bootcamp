import React from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Form extends React.Component {
  render() {
    return (
      <div className="formSection">
        <h1>Contact Us</h1>
        <div className="form">
          <div className="rightForm">
            <p>Contact us and we will get back to you within 24 hours.</p>
            <div className="contact">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Company Name</p>
            </div>
            <div className="contact">
              <FontAwesomeIcon icon={faPhone} />
              <p>+256 778 800 900</p>
            </div>
            <div className="contact">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>company.gmail.com</p>
            </div>
          </div>
          <div className="leftForm">
            <form>
              <h3>Contact</h3>
              <input type="email" placeholder="email address" />
              <textarea cols="30" rows="10" placeholder="comment"></textarea>
              <input type="submit" value="Send"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
