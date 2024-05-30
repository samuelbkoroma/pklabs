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
      <img src="assets/fd.jpg" alt="" className="fd" />

      <div>
        <div className="main vision">
          <h1>The Peculiar Vision</h1>
          <div>
            <p>
              To add value to our world by using what we know best (engineering
              and technology) to provide creative solutions to problems.
            </p>
          </div>
        </div>

        <div className="main vision">
          <h1>The Peculiar Mission</h1>
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
          <h1>The Name</h1>
          <div>
            <p>
              Diverging from the norm, our founders have consistently embraced a
              remarkably open-minded approach. They harbored a disdain for
              conforming to conventional methods or thinking simply because they
              were deemed "conventional." When questioned about their choices
              with an inquiry like "Why do it this way?" their typical retort
              was, "Why not?" Hence, in selecting a name for the company, it was
              imperative that the chosen name reflected their perspective and
              conveyed the narrative of embracing an unconventional, at times
              eccentric, approach to thinking and doing things. What better
              name, then, to encapsulate this unique and sometimes audacious
              mindset than PECULIAR LABS.
            </p>
          </div>
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

  .fd {
    max-width: 800px;
    object-fit: cover;
    height: 800px;
    border-radius: 20px;
    margin: 0 auto;
  }

  .main p {
    color: black;
    text-align: center;
    font-family: poppins;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
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
    display: flex;
    flex-direction: column;
    gap: 300px;

    .profile img {
      display: none;
    }

    .main {
      margin-bottom: 100px;
    }

    .fd {
      max-width: 400px;
      object-fit: cover;
      height: 800px;
      border-radius: 20px;
      margin: 0 auto;
    }
  }
`;
