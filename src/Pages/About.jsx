/* eslint-disable react/no-unescaped-entities */
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import Footers from "../Components/Footers";

const About = () => {
  return (
    <Div>
      <div>
        <Navbar />
      </div>

      <div className="about_hero">
        <h1>About Us</h1>
        <p>All you need to know about us</p>
      </div>

      <div className="main">
        <div className="profile">
          <div>
            <p>
              Our story began with two cousins who had a knack for everything
              science, engineering, and technology. As kids, they would spend
              hours exchanging ideas about cool tech and engineering devices and
              principles that they came across. As they grew older, they
              realized they wanted to do more than just chat about “cool
              things”, they wanted to use these “cool things" to solve some of
              the problems around them. Being born in an impoverished society,
              they quickly learned that technology and engineering can be used
              to solve some of the major problems around them in effortless
              ways. The plot thickened in 2020, when they finally decided to
              stop talking about it and create a community of like-minded
              thinkers who work under one key principle; “using engineering and
              technology to create simple solutions to complex problems”. Out of
              this, Peculiar Labs was born in 2021.
            </p>
          </div>

          {/* <img src="assets/pklabs-1.png" alt="" /> */}
        </div>
      </div>

      <div className="main vision">
        <h1>The Pecular Vision</h1>
        <div>
          <p>
            To add value to our world by using what we know best (engineering
            and technology) to provide creative solutions to problems.
          </p>
        </div>
      </div>

      <div className="main vision">
        <h1>The Pecular Mission</h1>
        <div>
          <p>
            To build a community of unrestricted minds that uses engineering &
            technology as primary tools to provide simple solutions to some of
            the problems faced by people, businesses, organizations, and
            nations.
          </p>
        </div>
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
      {/* 
      <Team /> */}
      <Footers />
    </Div>
  );
};

export default About;

const Div = styled.div`
  display: flex;
  flex-direction: column;

  .about_hero {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
    background-image: url("assets/pklabs-3.png");
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

  .vision {
    margin-bottom: 20px;
    margin-top: 60px;
  }

  .profile {
    display: flex;
    justify-content: center;
    gap: 100px;
    margin: 20px;
  }

  .profile p {
    max-width: 1200px;
    height: 300px;
    text-align: center;
  }

  // .profile img {
  //   width: 670px;
  //   height: 500px;
  //   object-fit: cover;
  //   border-radius: 20px;
  // }

  @media (max-width: 768px) {
    .profile img {
      display: none;
    }

    .main {
      margin-bottom: 150px;
    }
  }
`;
