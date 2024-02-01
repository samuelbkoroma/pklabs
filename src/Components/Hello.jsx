import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faComment } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faList } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Hello = () => {
  return (
    <Div>
      <h1 className="heading">Hello & Welcome</h1>

      <div className="explore">
        <div></div>
        <h2>Explore Our World</h2>
        <div></div>
      </div>

      <div className="main">
        <div className="main-container">
          <div className="set">
            <motion.div
              className="set-container"
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
              <div className="set-text">
                <h2>We meet deadlines</h2>
                <p>
                  Your deadline is the most important value for us. Our job is
                  to make sure the job is done perfectly before the deadline.
                </p>
              </div>
              <div className="shadow-box">
                {" "}
                <FontAwesomeIcon
                  icon={faCalendar}
                  color="red"
                  className="icon"
                />
              </div>
            </motion.div>
          </div>

          <div className="set">
            <motion.div
              className="set-container"
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
              <div className="set-text">
                <h2>Communication is Key</h2>
                <p>
                  Our team is available to check on your questions and take in
                  feedback as soon as possibly.
                </p>
              </div>
              <div className="shadow-box">
                {" "}
                <FontAwesomeIcon
                  icon={faComment}
                  color="red"
                  className="icon"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* <div className="img">
          {" "}
          <img src="assets/logogray.png" alt="" />{" "}
        </div> */}

        <div className="main-container">
          <div className="set">
            <motion.div
              className="set-container"
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
              <div className="set-text">
                <h2>Quality Control</h2>
                <p>
                  We test out everything to make sure that your project is fully
                  functional, cross–browser compatible and meets your
                  specifications.
                </p>
              </div>
              <div className="shadow-box">
                {" "}
                <FontAwesomeIcon icon={faCheck} color="red" className="icon" />
              </div>
            </motion.div>
          </div>

          <div className="set">
            <motion.div
              className="set-container"
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
              <div className="set-text">
                <h2>Pixel Perfect</h2>
                <p>
                  We develop meaningful digital products and experiences that
                  matter with design thinking and creative craftsmanship.
                </p>
              </div>
              <div className="shadow-box">
                {" "}
                <FontAwesomeIcon icon={faList} color="red" className="icon" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Hello;

const Div = styled.div`
  margin-top: 40px;
  margin: 20px;

  .heading {
    color: #192bc2;
    text-align: center;
    font-family: "Conthrax", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 35.2px; /* 110% */
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
    font-family: poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
  }

  .main {
    display: flex;
    justify-content: space-evenly;
    gap: 100px;
    align-items: center;
  }
  .set {
    width: 450px;
    gap: 10px;
  }

  .set-container {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  .shadow-box {
    border: 1px solid #ddd;
    background: rgba(255, 255, 255, 0);
    box-shadow: 4px 4px 0px 0px #ddd;
    width: 70px;
    height: 70px;
    transform: rotate(35deg);
    // padding: 9.857px 9.85px 9.992px 9.998px;
    display: flex;
    align-items: center;
  }
  .set-text {
    width: 300px;
  }

  .set-text h2 {
    color: #333;
    text-align: right;
    font-family: "Conthrax", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 17.6px; /* 110% */
    text-transform: uppercase;
  }

  .set-text p {
    color: #333;
    text-align: right;
    font-family: poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 17.14px; /* 142.833% */
  }

  .main-container {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }

  // .img {
  //   background: #192bc2;
  //   box-shadow: 10px 10px 0px 0px #ddd;
  //   width: 150px;
  //   height: 150px;
  //   transform: rotate(45deg);
  //   padding: 24.848px 24.84px 24.84px 24.848px;
  //   margin: 0 auto;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // }

  // .img img {
  //   width: 148px;
  //   height: 107px;
  //   transform: rotate(315deg);
  // }

  .icon {
    transform: rotate(320deg);
    color: #000000;
    align-self: center;
    margin: 0 auto;
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    .main {
      display: flex;
      flex-direction: column;
      height: auto;
      margin: 10px;
    }

    .main-container {
      display: flex;
      gap: 20px;
      text-align: center;
    }

    .set-container {
      display: flex;
      flex-direction: column-reverse;
      text-align: center;
    }

    .set-text h2 {
      text-align: center;
    }

    .set-text p {
      text-align: center;
    }

    .img {
      margin-bottom: 30px;
    }
  }
`;
