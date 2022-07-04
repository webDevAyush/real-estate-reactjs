import React from "react";
import "./Featured.css";
import House1 from "../../assets/house1.jpg";
import Bed1 from "../../assets/bed1.jpg";
import Bed2 from "../../assets/bed2.jpg";
import Kitchen from "../../assets/kitchen.jpg";
import Bathroom from "../../assets/bath1.jpg";
import House2 from "../../assets/house2.jpg";
import Bed3 from "../../assets/bed3.jpg";
import Bed4 from "../../assets/bed4.jpg";
import Livingroom from "../../assets/living-room.jpg";
import Bathroom2 from "../../assets/bath2.jpg";

export default function Featured() {
  return (
    <div className="featured">
      <h1 className="featured-text">Top Featured Listings</h1>
      <p> Selected Listing by CIty, State, & Zip based on views</p>
      <div className="container">
        <img className="span-3 image-grid-row-2" src={House1} alt="" />
        <img src={Bed1} alt="" />
        <img src={Bed2} alt="" />
        <img src={Kitchen} alt="" />
        <img src={Livingroom} alt="" />
        <div className="span-3 img-details">
          <div className="top">
            <h2>123 Acme St Dellas Texas</h2>
            <p>House For Sale</p>
            <p className="price">$2,677,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms: </p> <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms: </p> <p>6</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet: </p> <p>8138</p>
              </div>
              <div className="info">
                <p className="bold">Down Payments: </p> <p>$14,899</p>
              </div>
            </div>
          </div>
        </div>
      <div className="span-2 right-img-deatils">
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage</p>
        <button className="btn"> View Listings</button>
      </div>
      </div>

{/* Container  End  */}
      <div className="container">
        <img className="order-2" src={Bed3} alt="" />
        <img className="order-3"src={Bed4} alt="" />

        <img className="span-3 image-grid-row-2 order-1" src={House2} alt="" />
        <img className="order-4" src={Bathroom2} alt="" />
        <img className="order-5" src={Livingroom} alt="" />

        <div className="span-2 right-img-deatils order-7">
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage</p>
        <button className="btn"> View Listings</button>
        </div>



        <div className="span-3 img-details order-6">
          <div className="top">
            <h2>123 Acme St Dellas Texas</h2>
            <p>House For Sale</p>
            <p className="price">$2,677,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms: </p> <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms: </p> <p>6</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet: </p> <p>8138</p>
              </div>
              <div className="info">
                <p className="bold">Down Payments: </p> <p>$14,899</p>
              </div>
            </div>
          </div>
      
        </div>
      </div>
      </div>
  );
}
