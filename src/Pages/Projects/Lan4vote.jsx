/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import styled from "styled-components";
import Navbar from "../../Components/Navbar";

import Footers from "../../Components/Footers";

const Lan4vote = () => {
  const handleClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.plabs.lan4vote&hl=en_US"
    );
  };

  return (
    <Div>
      <Navbar />
      <h1>Lan 4 Vote</h1>

      <p>
        “LAN 4 VOT” is a tool designed to educate voters on avoiding invalid
        votes during Sierra Leone’s national elections. This tool built as a
        mobile application allows users to:
      </p>

      <ul className="lan">
        <li>Login</li>
        <li>Mark their thumbprint beside their chosen candidate</li>
        <li>Submit their vote</li>
        <li>Receive real-time feedback on vote validity</li>
        <li>Receive instructions on how to properly fold the ballot papers.</li>
      </ul>

      <button onClick={handleClick} className="lan4votebtn">
        Check it out on play store
      </button>

      <Footers />
    </Div>
  );
};

export default Lan4vote;

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

  .lan {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;
    margin: 0 auto;
    text-align: left;
    gap: 15px;
    max-width: 700px;
  }

  .lan li {
    align-self: left;
    color: black;
    text-align: left;
    font-family: poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    text-transform: capitalize;
  }

  .lan4votebtn {
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
