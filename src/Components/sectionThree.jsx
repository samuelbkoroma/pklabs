import styled from "styled-components";

const SectionThree = () => {
  return (
    <Div>
      <p>
        {/* We make our <span>work look good </span> & have experience in the
        creation of <br /> brand identities for<span>print & web </span>, with a
        difference. */}
      </p>
    </Div>
  );
};

export default SectionThree;

const Div = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("assets/pklabs-4.png");
  width: 100%;
  height: 100vh;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #fff;
    text-align: center;
    font-family: "Conthrax", sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 51.43px;
  }
  span {
    color: #192bc2;
  }

  @media (max-width: 768px) {
    p {
      font-size: 20px;
    }
  }
`;
