/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import styled from "styled-components";
import Navbar from "../../Components/Navbar";

import Footers from "../../Components/Footers";

const Allac = () => {
  return (
    <Div>
      <Navbar />
      <h1>ALLAC</h1>

      <p>
        Associates In Infrastructure and Consultancies (AIIAC SL LTD) has
        enlisted Peculiar Labs as their IT consultants under a retainer
        arrangement. Our responsibilities encompass a range of technological
        needs, such as general IT services, administration of office network
        infrastructure, installation and management of security cameras,
        configuration and maintenance of the internet domain, and oversight of
        website services.
      </p>

      <Footers />
    </Div>
  );
};

export default Allac;

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
