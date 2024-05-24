/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import styled from "styled-components";
import Navbar from "../../Components/Navbar";

import Footers from "../../Components/Footers";

const Dele = () => {
  const handleClick = () => {
    window.open("http://deleschool.sl/");
  };

  return (
    <Div>
      <Navbar />
      <h1>Dele</h1>

      <p>
        We developed an informative website for a distinguished primary and
        secondary school in Sierra Leone, known as the "Dele Preparatory
        PreparatoryPreparatoy School & Dele Peddle International High S Web
        Platform.
      </p>

      <button onClick={handleClick} className="delebtn">
        Check it out
      </button>

      <Footers />
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
    margin: 20px;
  }

  .delebtn {
    margin: 20px auto;
    padding: 20px;
    display: flex;
    background: #192bc2;
    border: none;
    outline: none;
    border-radius: 10px;
    font-family: "Poppins", san-serif;
    font-size: 15px;
    color: white;
    cursor: pointer;
  }
`;
