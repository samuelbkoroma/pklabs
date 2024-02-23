/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import styled from "styled-components";
import Navbar from "../../Components/Navbar";

import Footers from "../../Components/Footers";

const Techbiz = () => {
  return (
    <Div>
      <Navbar />
      <h1>Techbiz Database</h1>

      <p>
        Techbiz, a leading internet company in Sierra Leone, engaged Peculiar
        Labs to establish a comprehensive database showcasing goods and services
        available in Sierra Leone. The intention is to provide public access to
        this database through an interactive website and mobile application
      </p>

      <Footers />
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
