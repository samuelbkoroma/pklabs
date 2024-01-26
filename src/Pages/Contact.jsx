// import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <Div>
      <Navbar />

      <div className="about_hero">
        <h1>Contact</h1>
        <p>Get All our Contact</p>
      </div>

      <div className="contact-info">
        <div className="contact-info-text">
          <h1>Ways to React Us</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered.
          </p>

          <h2>Call Us</h2>
          <p>
            +232 74747474 <br />
            +232 65656565
          </p>

          <h2>Email Us</h2>
          <p>
            info@example.com <br />
            sam@gmail.com
          </p>

          <h2>Our Address</h2>
          <p>
            37 maiden Beach <br />
            malam Lumley
          </p>
        </div>

        <img src="assets/pecular1.jpg" alt="" width={600} height={500} />
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33272.18383312458!2d-13.303209133061047!3d8.4737753873281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf04c563d4ecec4f%3A0x8aa2d3d7af4e5be3!2sLumley%20Beach%20Freetown%20Sierra%20Leone!5e0!3m2!1sen!2ssl!4v1706177777411!5m2!1sen!2ssl"
          className="map"
        ></iframe>
      </div>

      <Footer />
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
    justify-content: space-between;
    margin: 50px;
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
  }

  @media (max-width: 768px) {
    .contact-info img {
      display: none;
    }
  }
`;
