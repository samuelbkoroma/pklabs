import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const OurService = () => {
  return (
    <Div>
      <h1 className="heading">OUR SERVICES</h1>

      <div className="explore">
        <div></div>
        <h2>OUR GOAL IS TO BUILD PRODUCTS AND SERVICES</h2>
        <div></div>
      </div>

      <motion.div
        className="cards"
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
        <div className="card">
          <div className="box">
            <FontAwesomeIcon icon={faGlobe} className="icon" />
          </div>

          <h2>Web Design</h2>

          <p>
            Our approach to website design is to create a website that
            strengthens your company’s brand while ensuring ease of use and
            simplicity for your audience
          </p>
        </div>

        <div className="card">
          <div className="box">
            <img src="assets/transform.png" alt="" className="icon" />
          </div>

          <h2>Data Transformation</h2>

          <p>
            Our approach to website design is to create a website that
            strengthens your company’s brand while ensuring ease of use and
            simplicity for your audience
          </p>
        </div>

        <div className="card">
          <div className="box">
            <img src="assets/analysis.png" alt="" className="icon" />
          </div>

          <h2>Data Analysis</h2>

          <p>
            Our approach to website design is to create a website that
            strengthens your company’s brand while ensuring ease of use and
            simplicity for your audience
          </p>
        </div>
      </motion.div>

      <motion.div
        className="cards"
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
        <div className="card">
          <div className="box">
            <img src="assets/cyber.png" alt="" className="icon" />
          </div>

          <h2>Cyber Security</h2>

          <p>
            Our approach to website design is to create a website that
            strengthens your company’s brand while ensuring ease of use and
            simplicity for your audience
          </p>
        </div>

        <div className="card">
          <div className="box">
            <img src="assets/network.png" alt="" className="icon" />
          </div>

          <h2>Office Networking</h2>

          <p>
            Our approach to website design is to create a website that
            strengthens your company’s brand while ensuring ease of use and
            simplicity for your audience
          </p>
        </div>

        <div className="card">
          <div className="box">
            <img src="assets/building.png" alt="" className="icon" />
          </div>

          <h2>Building Design & Construction</h2>

          <p>
            Our approach to website design is to create a website that
            strengthens your company’s brand while ensuring ease of use and
            simplicity for your audience
          </p>
        </div>
      </motion.div>
    </Div>
  );
};

export default OurService;

const Div = styled.div`
  height: auto;
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
  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 40px;
  }

  .card {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .box {
    border: 1px solid #ddd;
    background: rgba(255, 255, 255, 0);
    box-shadow: 4px 4px 0px 0px #ddd;
    width: 75px;
    height: 75px;
    transform: rotate(45deg);
    display: flex;
    margin: 0 auto;
    align-item: center;
  }

  .card h2 {
    color: #333;
    text-align: center;
    font-family: "Conthrax", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 17.6px; /* 110% */
    text-transform: uppercase;
  }

  .card p {
    color: #333;
    text-align: center;
    font-family: poppins;
    font-size: 15x;
    font-style: normal;
    font-weight: 450;
    line-height: 20px; /* 142.857% */
  }

  .icon {
    transform: rotate(320deg);
    color: #000000;
    align-self: center;
    margin: 0 auto;
    width: 30px;
    height: 30px;
  }
`;
