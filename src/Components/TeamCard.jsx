import styled from "styled-components";

const TeamCard = ({ image, name, role, description, socialLinks = [] }) => {
  return (
    <Div>
      <div className="team">
        <img src={image} alt="" className="main-img" />

        <span>{name}</span>
        <p className="role">{role}</p>
        <p className="description">{description}</p>

        <div className="social">
          {socialLinks.slice(0, 5).map((social, index) => (
            <div key={index} onClick={social.onClick}>
              <img src={social.logo} alt={social.name} />
            </div>
          ))}
        </div>
      </div>
    </Div>
  );
};

export default TeamCard;

const Div = styled.div`
  .team {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 500px;
    align-items: center;
    margin-top:100px;
  }

  .main-img {
    border-radius: 20px;
    width: 100%;
    object-fit: cover;
    height: 400px;
  }

  .social {
    display: flex;
    gap: 20px;
    justify-content: center;
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
    cursor: pointer;
  }

  .social div img {
    transform: rotate(315deg);
    width: 20px;
    height: 20px;
  }

  .social div:hover {
    background: #192bc2;
  }

  .team span {
    color: #000;
    font-family: Poppins, sans-serif;
    font-size: 20px;
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
  }

  .team p {
    color: #666;
    font-family: Poppins, sans-serif;
    font-size: 15px;
    font-weight: bold;

    text-align: center;
  }

    .team p {
    color: #666;
    font-family: Poppins, sans-serif;
    font-size: 15px;
    font-weight: bold;
    font-style:italic;
    text-align: center;
  }



  .
`;
