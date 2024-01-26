// import React from 'react'
import styled from "styled-components";
// import ReactCardFlip from "react-card-flip";
// import { useState } from "react";

const Team = () => {
  // const [isFlipped, setIsFlipped] = useState(false);

  // function flipCard() {
  //   setIsFlipped(!isFlipped);
  // }

  return (
    <Div>
      {/* <ReactCardFlip
        flipDirection="horizontal"
        isFlipped={isFlipped}
        cardZIndex="1"
      >
        <div className="card" onMouseEnter={flipCard}>
          <h1>front</h1>
        </div>

        <div className="card card-back" onMouseEnter={flipCard}>
          <h1>back</h1>
        </div>
      </ReactCardFlip>

      <ReactCardFlip
        flipDirection="horizontal"
        isFlipped={isFlipped}
        cardZIndex="1"
      >
        <div className="card" onMouseEnter={flipCard}>
          <h1>front</h1>
        </div>

        <div className="card card-back" onMouseEnter={flipCard}>
          <h1>back</h1>
        </div>
      </ReactCardFlip>

      <ReactCardFlip
        flipDirection="horizontal"
        isFlipped={isFlipped}
        cardZIndex="1"
      >
        <div className="card" onMouseEnter={flipCard}>
          <h1>front</h1>
        </div>

        <div className="card card-back" onMouseEnter={flipCard}>
          <h1>back</h1>
        </div>
      </ReactCardFlip>

      <ReactCardFlip
        flipDirection="horizontal"
        isFlipped={isFlipped}
        cardZIndex="1"
      >
        <div className="card" onMouseEnter={flipCard}>
          <h1>front</h1>
        </div>

        <div className="card card-back" onMouseEnter={flipCard}>
          <h1>back</h1>
        </div>
      </ReactCardFlip> */}
      <h1 className="heading">Our Team</h1>

      <div className="explore">
        <div></div>
        <h2>OUR GOAL IS TO BUILD PRODUCTS AND SERVICES</h2>
        <div></div>
      </div>

      <div className="team-card">
        <div className="team">
          <img src="assets/mann.png" alt="" />

          <span>Omoyemi Jones</span>
          <p>Backend Developer</p>

          <div className="social">
            <div>
              {" "}
              <img src="assets/linkedin.png" alt="" />{" "}
            </div>
            <div>
              {" "}
              <img src="assets/instagram.png" alt="" />{" "}
            </div>
            <div>
              <img src="assets/facebooks.png" alt="" width={15} height={15} />{" "}
            </div>
            <div>
              {" "}
              <img src="assets/twitter.png" alt="" />{" "}
            </div>
          </div>
        </div>

        <div className="team">
          <img src="assets/mann.png" alt="" />

          <span>Omoyemi Jones</span>
          <p>Backend Developer</p>

          <div className="social">
            <div>
              {" "}
              <img src="assets/linkedin.png" alt="" />{" "}
            </div>
            <div>
              {" "}
              <img src="assets/instagram.png" alt="" />{" "}
            </div>
            <div>
              <img src="assets/facebooks.png" alt="" width={15} height={15} />{" "}
            </div>
            <div>
              {" "}
              <img src="assets/twitter.png" alt="" />{" "}
            </div>
          </div>
        </div>

        <div className="team">
          <img src="assets/mann.png" alt="" />

          <span>Omoyemi Jones</span>
          <p>Backend Developer</p>

          <div className="social">
            <div>
              {" "}
              <img src="assets/linkedin.png" alt="" />{" "}
            </div>
            <div>
              {" "}
              <img src="assets/instagram.png" alt="" />{" "}
            </div>
            <div>
              <img src="assets/facebooks.png" alt="" width={15} height={15} />{" "}
            </div>
            <div>
              {" "}
              <img src="assets/twitter.png" alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Team;

const Div = styled.div`
  .team-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  // .card {
  //   width: 300px;
  //   height: 400px;
  //   border: 1px solid black;
  //   border-radius: 20px;
  //   margin: 50px auto;
  //   background: blue;
  // }
  // .card-back {
  //   background: red;
  // }
  .team {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 500px;
  }

  .social {
    display: flex;
    gap: 20px;
  }

  .social div {
    display: flex;
    width: 29.995px;
    height: 29.995px;
    transform: rotate(45deg);
    padding: 5.664px 5.664px 5.805px 5.805px;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
    transition: 0.5s ease-in-out;
  }

  .social div img {
    transform: rotate(315deg);
    width: 20px;
    height: 20px;
  }

  .heading {
    margin-top: 100px;
    padding-top: 60px;
    color: #192bc2;
    text-align: center;
    font-family: "Conthrax", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 35.2px;
    text-transform: uppercase;
  }

  .explore {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .explore div {
    background: #666666;
    width: 20px;
    height: 1px;
    position: relative;
  }

  .explore h2 {
    color: #666;
    font-family: "Conthrax", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
  }

  .team img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }

  .team span {
    color: #000;
    font-family: poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }

  .team p {
    color: #666;
    font-family: poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }

  .social div:hover {
    background: #192bc2;
  }

  @media (max-width: 768px) {
    .team-card {
      margin: 10px;
    }
    .social {
      display: flex;
      justify-content: center;
    }

    .team span {
      text-align: center;
    }

    .team p {
      text-align: center;
    }
  }
`;
