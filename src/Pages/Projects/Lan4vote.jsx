/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import styled from "styled-components";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Lan4vote = () => {
  return (
    <Div>
      <Navbar />
      <h1>Lan 4 Vote</h1>

      <p>
        Under the project name "LAN 4 VOT," a Sierra Leonean parliament aspirant
        sought Peculiar Labs' expertise to create a pro-bono digital tool. This
        tool aimed to educate constituents on avoiding invalid votes. Despite
        the challenges of testing new team skills, we successfully crafted a
        mobile app simulating the voting process. Users could log in, imprint
        their thumb beside their preferred candidate, submit their vote, and
        receive real-time feedback on vote validity. Despite losing contact with
        the sponsor post-launch, the project served as a valuable learning
        experience for our team, marking the successful launch of our inaugural
        app.
      </p>

      <Footer />
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
  }
`;
