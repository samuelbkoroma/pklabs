/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Footers from "../Components/Footers";

const Contact = () => {
  return (
    <Div>
      <Navbar />

      <div className="about_hero">
        <h1>Contact</h1>
        <p>Get All our Contact</p>
      </div>
      <p className="tagline">
        "At Peculiar, our primary mode of operation is remote work, <br />
        convening only when necessary, much like the Avengers assembling when
        duty calls."
      </p>

      <div className="contact-info">
        <div className="contact-info-text">
          <h1>Ways to Reach Us</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered.
          </p>

          <h2>Call Us</h2>
          <p>
            +232 77 92 04 54 <br />
            +232 78 16 44 55
          </p>

          <h2>Email Us</h2>
          <p>
            peculiarlabs19@gmail.com <br />
          </p>

          <h2>Our Address</h2>
          <p>
            Freetown <br />
            Sierra Leone
          </p>
        </div>

        <img src="assets/ttpk.jpg" alt="" width={600} height={500} />
      </div>

      <div className="map-container">
        <img src="assets/teampk.jpg" className="map team-img" />
      </div>

      <Footer />
      <Footers />
    </Div>
  );
};

export default Contact;

const Div = styled.div`
  .about_hero {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
    background-image: url("assets/pklabs-6.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .about_hero h1 {
    color: white;
    text-align: center;
    font-family: "Conthrax", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }

  .about_hero p {
    color: white;
    text-align: center;
    font-family: poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0;
    padding: 0;
  }

  .contact-info {
    display: flex;
    justify-content: center;
    margin: 50px;
    gap: 50px;
  }

  .contact-info-text h1 {
    color: #192bc2;
    font-family: "Conthrax", sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 142.857% */
  }

  .contact-info-text p {
    color: #333;
    font-family: poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 175% */
  }

  .tagline {
    text-align: center;
    color: #333;
    font-family: poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    line-height: 28px;
    font-style: italic;
  }

  .contact-info img {
    object-fit: cover;
    border-radius: 20px;
  }

  .contact-info-text h2 {
    color: #000;
    font-family: "Conthrax", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 19.2px; /* 120% */
  }

  .map-container {
    max-width: 900px;
    height: 700px;
    margin: 0 auto;
    padding-top: 100px;
  }

  .map {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .contact-info img {
      display: none;
    }
  }
`;
