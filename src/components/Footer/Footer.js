import React from "react";
import {BsFacebook, BsInstagram, BsTwitter} from  'react-icons/bs'
import "./Footer.css";



export default function Footer(){
  return(
    <div className="footer">
        <div className="social">
          <BsFacebook className="icons" />
          <BsInstagram className="icons" />
          <BsTwitter className="icons" />
        </div>

        <div className="container">
            <div className="col">
              <h3>About</h3>
              <p>Company</p>
              <p>Details</p>
              <p>Planning</p>
              <p>About Us</p>
            </div>
            <div className="col">
              <h3>Comapany</h3>
              <p>Company</p>
              <p>Details</p>
              <p>Planning</p>
              <p>About Us</p>
            </div>
            <div className="col">
              <h3>Legal</h3>
              <p>Company</p>
              <p>Details</p>
              <p>Planning</p>
              <p>About Us</p>
            </div>
            <div className="col">
              <h3>Information</h3>
              <p>Company</p>
              <p>Details</p>
              <p>Planning</p>
              <p>About Us</p>
            </div>
        </div>
    </div>
  )

}