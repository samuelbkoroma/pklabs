/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import styled from "styled-components";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Dele = () => {
  return (
    <Div>
      <Navbar />
      <h1>Dele</h1>

      <p>
        Following the LAN 4 VOT project, Peculiar Labs took on the task of
        building a website for a prominent Primary and Secondary school in
        Sierra Leone, the "DELE SCHOOL WEBSITE." Though the compensation was not
        substantial, viewing it as a chance to refine our skills, we delivered a
        website that met the client's satisfaction.
      </p>

      <Footer />
    </Div>
  );
};

export default Dele;

const Div = styled.div`
  h1 {
    color: black;
    text-align: center;
    font-family: "Conthrax", sans-serif;
    font-size: 25x;
    font-style: normal;
    font-weight: 500;
    text-transform: capitalize;
    margin-top: 200px;
  }

  p {
    color: black;
    text-align: center;
    font-family: poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    text-transform: capitalize;
  }
`;
