/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

const Hero = () => {
  return (
    <Div>
      {/* <span className="span">
        "Embrace the peculiar,for within its folds lie the seeds of innovation.
        At Pecular Labs, we transcend the ordinary to extraordinary solutions."
      </span> */}
    </Div>
  );
};

export default Hero;

const Div = styled.div`
  background-image: url("assets/pecular1.jpg");
  width: 100%;
  height: 800px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .span {
    position: absolute;
    right: 20px;
    top: 160px;
    max-width: 550px;
    color: #fff;
    text-align: center;
    font-family: "Conthrax", sans-serif;
    font-size: 35px;
    font-style: normal;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 20px;
    padding: 0;
  }

  @media (max-width: 768px) {
    background-image: url("assets/pecular1.jpg");
    width: 100%;
    height: 800px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .span {
      color: white;
    }
  }
`;
