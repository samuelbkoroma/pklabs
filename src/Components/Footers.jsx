// import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footers = () => {
  const handleClickTwitter = () => {
    window.open("https://x.com/Peculiar_LabsSL", "_blank");
  };

  const handleClickLinkedin = () => {
    window.open("https://www.linkedin.com/company/peculiar-labs/", "_blank");
  };

  return (
    <Div>
      <div className="rows">
        <div className="row1">
          <div className="logo">
            <img src="assets/logoblack.png" alt="" width={100} height={100} />
          </div>
          <div className="socialls">
            <img src="assets/twitter.png" alt="" onClick={handleClickTwitter} />
            <img
              src="assets/linkedin.png"
              alt=""
              onClick={handleClickLinkedin}
            />
          </div>
        </div>

        <div className="row2">
          <div className="link">
            <h2> Pages </h2>
            <Link to="/" className="links">
              Home
            </Link>
            <Link to="/about" className="links">
              About
            </Link>
            <Link to="/contact" className="links">
              Contact
            </Link>

            <Link to="/team" className="links">
              {" "}
              Team{" "}
            </Link>
          </div>
        </div>

        <div className="row2">
          <div className="link">
            <h2> Projects </h2>
            <Link to="/dele" className="links">
              Dele
            </Link>
            <Link to="/techbiz" className="links">
              TechBiz
            </Link>
            <Link to="/lan4vote" className="links">
              Lan4Vote
            </Link>
            <Link to="/allac" className="links">
              {" "}
              Aiiac{" "}
            </Link>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Footers;

const Div = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 400px;
  background: #192bc2;
  padding: 20px;

  .socialls {
    display: flex;
    gap: 20px;
  }

  .socialls img {
    width: 25px;
    height: 25px;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
  }

  .row1 {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .rows {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .row2 {
    display: flex;
    flex-drection: column;
  }

  .link {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .links {
    color: white;
    list-style: none;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    font-family: "Conthrax", sans-serif;
    cursor: pointer;
    text-decoration: none;
  }

  .link h2 {
    color: white;
    list-style: none;
    font-size: 25px;
    text-transform: uppercase;
    font-weight: 600;
    font-family: "Conthrax", sans-serif;
    cursor: pointer;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    height: 800px;
    margin: 0 auto;
    .rows {
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
`;
