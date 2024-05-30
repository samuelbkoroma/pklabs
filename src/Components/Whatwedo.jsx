/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <Div>
      <h1 className="heading">What We DO</h1>

      <div className="explore">
        <div></div>
        <h2>Solving Complex problems in Simple ways</h2>
        <div></div>
      </div>

      <motion.div
        className="wedo"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* <img src="assets/pecular2.jpg" alt="" /> */}

        <p>
          We are an engineering and technology consultancy firm based in Sierra
          Leone. Our mission is to help businesses solve complex technological
          and engineering challenges, offering a wide range of services
          including digital transformation, data analysis, office networking,
          website and mobile application development, cybersecurity, building
          design and construction, and database development. We are committed to
          finding creative solutions to problems and making the world better
          through technology and engineering. Our core values of simplicity,
          affordability, and quality guide us in providing innovative solutions
          to our clients and society."
        </p>
      </motion.div>
    </Div>
  );
};

export default WhatWeDo;

const Div = styled.div`
  .heading {
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

  .wedo {
    display: flex;
    margin: 50px;
    justify-content: center;
  }

  .wedo img {
    width: 500px;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.09);
  }

  .wedo p {
    color: #666;
    font-family: poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    max-width: 1000px;
    text-align: center;
  }

  @media (max-width: 768px) {
    .wedo img {
      display: none;
    }
  }
`;
