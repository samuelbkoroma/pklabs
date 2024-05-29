/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import TeamCard from "../Components/TeamCard";
import Footers from "../Components/Footers";

const TeamPage = () => {
  //obi
  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/obinna-anthony-browne-2694a1167/",
      "_blank"
    );
  };

  const handleTwitterClick = () => {
    window.open("https://x.com/IamSirOAB", "_blank");
  };

  //scar
  const handleLinkedInClickScar = () => {
    window.open(
      "https://www.linkedin.com/in/tindae-feika-668781133/",
      "_blank"
    );
  };

  //felix
  const handleLinkedInClickFelix = () => {
    window.open("https://x.com/FelixTeeRhodes", "_blank");
  };

  const handleLinkedInClickFelixi = () => {
    window.open("https://www.instagram.com/felix_da_housekat", "_blank");
  };

  //margay
  const handleLinkedInClickMargay = () => {
    window.open("https://www.linkedin.com/in/josephmargay", "_blank");
  };

  //power
  const handleLinkedInClickPower = () => {
    window.open(
      "https://www.linkedin.com/in/samuel-b-koroma-2a432322b/",
      "_blank"
    );
  };
  const handleLinkedInClickPowerx = () => {
    window.open("https://twitter.com/PowerMa96374678", "_blank");
  };

  // paul

  const handleLinkedInClickPaul = () => {
    window.open("https://www.linkedin.com/in/paul-amara-30716426b/", "_blank");
  };
  const handleLinkedInClickPaulx = () => {
    window.open(" https://www.facebook.com/paul.amara.359/", "_blank");
  };

  //maggie
  const handleLinkedInClickMaggie = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61552077660930&mibextid=ZbWKwL ",
      "_blank"
    );
  };

  //augie
  const handleLinkedInClickAugie = () => {
    window.open(
      "https://www.linkedin.com/in/augustus-batilo-jibba-750574203/",
      "_blank"
    );
  };

  const handleLinkedInClickAugiie = () => {
    window.open(" https://www.instagram.com/augie.j/", "_blank");
  };

  //Emmanuel koroma
  const handleLinkedInClickEmma = () => {
    window.open("https://www.linkedin.com/in/emmanuelmkoroma ", "_blank");
  };

  const handleLinkedInClickEmmaa = () => {
    window.open("https://www.instagram.com/medino080  ", "_blank");
  };

  //wallace
  const handleClickWallace = () => {
    window.open(
      "https://sl.linkedin.com/in/wallace-bodkin-3aa660273",
      "_blank"
    );
  };

  const socialLinksObi = [
    {
      logo: "assets/linkedin.png",
      name: "LinkedIn",
      onClick: handleLinkedInClick,
    },

    {
      logo: "assets/twitter.png",
      name: "Twitter",
      onClick: handleTwitterClick,
    },
  ];

  //scar

  const socialLinksScar = [
    {
      logo: "assets/linkedin.png",
      name: "LinkedIn",
      onClick: handleLinkedInClickScar,
    },
  ];

  //felix
  const socialLinksFelix = [
    {
      logo: "assets/twitter.png",
      name: "Twitter",
      onClick: handleLinkedInClickFelix,
    },

    {
      logo: "assets/instagram.png",
      name: "Instagram",
      onClick: handleLinkedInClickFelixi,
    },
  ];

  //margay

  const socialLinksMargay = [
    {
      logo: "assets/linkedin.png",
      name: "Linkedin",
      onClick: handleLinkedInClickMargay,
    },
  ];

  //power
  const socialLinksPower = [
    {
      logo: "assets/linkedin.png",
      name: "Linkedin",
      onClick: handleLinkedInClickPower,
    },

    {
      logo: "assets/twitter.png",
      name: "Twitter",
      onClick: handleLinkedInClickPowerx,
    },
  ];

  //paul
  const socialLinksPaul = [
    {
      logo: "assets/linkedin.png",
      name: "Linkedin",
      onClick: handleLinkedInClickPaul,
    },

    {
      logo: "assets/facebooks.png",
      name: "Twitter",
      onClick: handleLinkedInClickPaulx,
    },
  ];

  //maggie

  const socialLinksMaggie = [
    {
      logo: "assets/facebooks.png",
      name: "Linkedin",
      onClick: handleLinkedInClickMaggie,
    },
  ];

  //augie
  const socialLinksAugie = [
    {
      logo: "assets/linkedin.png",
      name: "Linkedin",
      onClick: handleLinkedInClickAugie,
    },

    {
      logo: "assets/instagram.png",
      name: "Twitter",
      onClick: handleLinkedInClickAugiie,
    },
  ];
  //emma
  const socialLinksEmma = [
    {
      logo: "assets/linkedin.png",
      name: "Linkedin",
      onClick: handleLinkedInClickEmma,
    },

    {
      logo: "assets/instagram.png",
      name: "Twitter",
      onClick: handleLinkedInClickEmmaa,
    },
  ];

  const socialLinksWallace = [
    {
      logo: "assets/linkedin.png",
      name: "Linkedin",
      onClick: handleClickWallace,
    },
  ];

  return (
    <Div>
      <Navbar />
      <div className="about_hero">
        <h1>Our Team</h1>
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
      <br />
      <br />
      <br />
      <br />
      <h1 className="founder">The Founders</h1>
      <div className="heads teams">
        <TeamCard
          name="Obinna Anthony Browne"
          image="assets/Obinna.jpg"
          role="Co-Founder & Chief Operations Officer"
          socialLinks={socialLinksObi}
        />
        <TeamCard
          name="Tindae Barbee Feika"
          image="assets/Tindae.jpg"
          role="Co-Founder & Chief Technology Officer"
          socialLinks={socialLinksScar}
        />
      </div>
      <br /> <br /> <br />
      <h1 className="founder">The Team</h1>
      <div className="heads teams">
        <TeamCard
          name="Felix Tendai Rhodes"
          role="Creative Director"
          image="assets/felix.jpg"
          socialLinks={socialLinksFelix}
        />
        <TeamCard
          name="Anthony Ngegba"
          role="Lead Electrical & Mechanical Engineer"
          socialLinks={socialLinksMargay}
        />
        <TeamCard
          image="assets/wallace.jpg"
          name="Wallace Omotayo Samuel Bodkin"
          role="Administrative Director"
          socialLinks={socialLinksWallace}
        />
      </div>
      <br /> <br /> <br />
      <h1 className="founder"></h1>
      <div className="heads teams">
        <TeamCard
          image="assets/margay.jpg"
          name="Joseph Margay"
          role="Lead Network engineer & Security Developer"
          socialLinks={socialLinksMargay}
        />
        <TeamCard
          image="assets/Maggie.jpg"
          name="Margaret Sia Mondeh"
          role="UI & UX Developer & Operations Assistant"
          socialLinks={socialLinksMaggie}
        />
      </div>
      <div className="heads teams">
        <TeamCard
          image="assets/augiee.png"
          name="Augustus Batilo Jibba"
          role="Senior Software Engineer"
          socialLinks={socialLinksAugie}
        />
        <TeamCard
          image="assets/Emmam.png"
          name="Emmanuel Koroma"
          role="Front & Back End Developer"
          socialLinks={socialLinksEmma}
        />
        <TeamCard
          name="Paul Amara"
          role="UI & UX Developer"
          image="assets/Paul.jpg"
          socialLinks={socialLinksPaul}
        />
      </div>
      <div className="heads teams">
        <TeamCard
          image="assets/Samuel.jpg"
          name="Samuel B Koroma"
          role="Front End web & mobile developer"
          socialLinks={socialLinksPower}
        />
      </div>
      <Footers />
    </Div>
  );
};

export default TeamPage;

const Div = styled.div`
  .about_hero {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 600px;
    background-image: url("assets/pklabs-4.png");
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

  .teams {
    display: flex;
    justify-content: center;
    gap: 100px;
    flex-wrap: wrap;
  }

  .founder {
    color: black;
    text-align: center;
    font-family: "Conthrax", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding: 0;
  }

  .heads {
    margin-bottom: 100px;
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
    margin: 0 auto;
    padding: 0;
    max-width: 1200px;
  }
`;
