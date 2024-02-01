// import React from 'react'
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import TeamCard from "../Components/TeamCard";
import Footer from "../Components/Footer";

const TeamPage = () => {
  return (
    <Div>
      <Navbar />
      <div className="about_hero">
        <h1>Our Team</h1>
      </div>
      <h1 className="founder">The Founders</h1>
      <div className="heads teams">
        <TeamCard />
        <TeamCard />
      </div>
      <br /> <br /> <br />
      <h1 className="founder">Design Team</h1>
      <div className="heads teams">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
      <br /> <br /> <br />
      <h1 className="founder">Engineering Team</h1>
      <div className="heads teams">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
      <Footer />
    </Div>
  );
};

export default TeamPage;

const Div = styled.div`
  .about_hero {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 600px;
    background-image: url("assets/pklabs-4.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 60px;
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

  .teams {
    display: flex;
    justify-content: center;
    gap: 100px;
  }

  .founder {
    color: black;
    text-align: center;
    font-family: "Conthrax", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding: 0;
  }

  .heads {
    margin-bottom: 100px;
  }
`;
