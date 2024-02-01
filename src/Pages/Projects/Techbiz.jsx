/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import styled from "styled-components";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Techbiz = () => {
  return (
    <Div>
      <Navbar />
      <h1>Techbiz Database</h1>

      <p>
        The journey continued with the "TECHBIZ DATABASE" project, where Techbiz
        sought Peculiar Labs to create a comprehensive database of goods and
        services available in Sierra Leone. This initiative aimed to make this
        database accessible to the local population, contributing to the
        technological advancement of the region.
      </p>

      <Footer />
    </Div>
  );
};

export default Techbiz;

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
