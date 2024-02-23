/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import styled from "styled-components";
import Navbar from "../../Components/Navbar";

import Footers from "../../Components/Footers";

const Lan4vote = () => {
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
`;
