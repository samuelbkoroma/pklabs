/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import styled from "styled-components";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Allac = () => {
  return (
    <Div>
      <Navbar />
      <h1>ALLAC</h1>

      <p>
        In mid-2023, a significant breakthrough occurred as Associates In
        Infrastructure and Consultancies (AIIAC SL LTD) engaged Peculiar Labs as
        their IT consultants on a retainer basis. This partnership, with an
        initial trial arrangement of Le 110,000 per annum, marked a significant
        milestone for Peculiar Labs. The collaboration has exceeded
        expectations, showcasing the depth of our expertise and commitment to
        delivering exceptional IT consultancy services. As we reflect on the
        challenges and triumphs, we remain dedicated to our mission. The year
        2023 has been transformative, positioning Peculiar Labs as a dynamic
        force in the technological landscape. We are excited about the
        opportunities ahead and grateful for the continued support of our team
        and partners.
      </p>

      <Footer />
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
