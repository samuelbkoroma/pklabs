/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import TeamCard from "../Components/TeamCard";
import Footers from "../Components/Footers";

const TeamPage = () => {
  return (
    <Div>
      <Navbar />
      <div className="about_hero">
        <h1>Our Team</h1>
      </div>
      <div className="main vision">
        <h1>The Peculars</h1>
        <div>
          <p>
            We boast a diverse team of engineering experts, including
            professionals in structural, electrical, electromechanical,
            computer, and network engineering, as well as software development,
            UI & UX, and computer programming. Our collective talent is
            harnessed to address intricate engineering challenges for both our
            community and clients. The company prioritizes the well-being of its
            community (employees), recognizing that by doing so, it ensures
            customer satisfaction, maintains profit margins, and cultivates a
            well-balanced ecosystem encompassing employees, customers,
            shareholders, investors, and society. Peculiar Labs fosters an
            environment where community members have the necessary resources to
            excel and contribute to the company's mission. Known for their
            intelligence, creativity, and love for challenges, Peculiars thrive
            on tackling the seemingly 'impossible,' delivering top-notch
            products and services to clients
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h1 className="founder">The Founders</h1>
      <div className="heads teams">
        <TeamCard
          name="Obinna Anthony Browne"
          image="assets/Obinna.jpg"
          role="Co-Founder & Chief Operations Officer"
        />
        <TeamCard
          name="Tindae Barbee Feika"
          image="assets/Tindae.jpg"
          role="Co-Founder & Chief Technology Officer"
        />
      </div>
      <br /> <br /> <br />
      <h1 className="founder">The Team</h1>
      <div className="heads teams">
        <TeamCard
          name="Felix Tendai Rhodes"
          role="Creative Director"
          image="assets/felix.jpg"
        />
        <TeamCard
          name="Anthony Ngegba"
          role="Lead Electrical & Mechanical Engineer"
        />
        <TeamCard
          image="assets/wallace.jpg"
          name="Wallace Omotayo Samuel Bodkin"
          role="Administrative Director"
        />
      </div>
      <br /> <br /> <br />
      <h1 className="founder"></h1>
      <div className="heads teams">
        <TeamCard
          image="assets/margay.jpg"
          name="Joseph Margay"
          role="Lead Network engineer & Security Developer"
        />
        <TeamCard
          image="assets/Maggie.jpg"
          name="Margaret Sia Mondeh"
          role="UI & UX Developer & Operations Assistant"
        />
        <TeamCard name="Amry Samuels" role="Electrical & End Engineer" />
      </div>
      <div className="heads teams">
        <TeamCard
          image="assets/augiee.png"
          name="Augustus Batilo Jibba"
          role="Senior Software Engineer"
        />
        <TeamCard
          image="assets/Emmam.png"
          name="Emmanuel Koroma"
          role="Front & Back End Developer"
        />
        <TeamCard
          name="Paul Amara"
          role="UI & UX Developer"
          image="assets/Paul.jpg"
        />
      </div>
      <div className="heads teams">
        <TeamCard
          image="assets/Samuel.jpg"
          name="Samuel B Koroma"
          role="Front End web & mobile developer"
        />
      </div>
      <Footers />
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
    flex-wrap: wrap;
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

  .main h1 {
    color: #192bc2;
    text-align: center;
    font-family: "Conthrax", sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 50px;
    padding: 0;
  }

  .main p {
    color: black;
    text-align: center;
    font-family: poppins;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0 auto;
    padding: 0;
    max-width: 1200px;
  }
`;
