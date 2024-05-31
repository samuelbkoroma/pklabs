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

  //turamatic

  const handleClickTuray = () => {
    window.open("https://www.linkedin.com/in/musa-turay15818/", "_blank");
  };

  const handleClickWallaceTurayy = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100008010226038&mibextid=ZbWKwL",
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

  const socialLinksTuray = [
    {
      logo: "assets/linkedin.png",
      name: "Linkedin",
      onClick: handleClickTuray,
    },

    {
      logo: "assets/facebooks.png",
      name: "Facebook",
      onClick: handleClickWallaceTurayy,
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
          image="assets/obii.jpg"
          role="Co-Founder & Chief Operations Officer"
          socialLinks={socialLinksObi}
          description="Obinna leverages his structural engineering background and product management experience to guide the company's operations with strategic vision and technical expertise"
        />
        <TeamCard
          name="Tindae Barbee Feika"
          image="assets/scar.jpg"
          role="Co-Founder & Chief Technology Officer"
          socialLinks={socialLinksScar}
          description="Tindae is a techie with nearly a decade of experience in IT, specializing in low-level programming and embedded systems."
        />
      </div>
      <br /> <br /> <br />
      <h1 className="founder">The Team</h1>
      <div className="heads teams">
        <TeamCard
          name="Felix Tendai Rhodes"
          role="Creative Director"
          image="assets/felixx.jpg"
          socialLinks={socialLinksFelix}
          description="Felix is a graphic designer, illustrator, painter, and sculptor, renowned for his vibrant abstract expressionist work."
        />
        <TeamCard
          name="Anthony Ngegba"
          role="Lead Electrical & Mechanical Engineer"
          socialLinks={socialLinksMargay}
        />
        <TeamCard
          image="assets/wallacejj.jpg"
          name="Wallace Omotayo Samuel Bodkin"
          role="Administrative Director"
          socialLinks={socialLinksWallace}
          description="Wallace Omotayo Samuel Bodkin, an experienced Company Secretary, excels in corporate governance and regulatory compliance. His strategic mindset and communication skills ensure smooth operations and uphold corporate integrity."
        />
        <TeamCard
          image="assets/margay.jpg"
          name="Joseph Margay"
          role="Lead Network engineer & Security Developer"
          socialLinks={socialLinksMargay}
          description="With decades of experience, Joseph Margay, a seasoned electro-mechanical engineer, combines expertise in electrical and mechanical systems to solve complex challenges. Renowned for attention to detail and a successful track record, he consistently delivers innovative solutions."
        />
        <TeamCard
          image="assets/maggiee.jpg"
          name="Margaret Sia Mondeh"
          role="UI & UX Developer & Operations Assistant"
          socialLinks={socialLinksMaggie}
          description="Maggie's organizational and communication skills,  enable her to excel in dynamic environments and engage with diverse stakeholders effectively"
        />
        <TeamCard
          image="assets/augiee.png"
          name="Augustus Batilo Jibba"
          role="Senior Software Engineer"
          socialLinks={socialLinksAugie}
          description="Augustus, a graduate of Physics, has a diverse skill set encompassing advanced physics knowledge, programming in Python and Dart, and expertise in frameworks like Flutter, Django, and FastAPI."
        />
        <TeamCard
          image="assets/Emmam.png"
          name="Emmanuel Koroma"
          role="Front & Back End Developer"
          socialLinks={socialLinksEmma}
          description="Emmanuel is a versatile software developer skilled in backend and frontend development, IoT, data science, and database analysis. Passionate about innovation and problem-solving,"
        />
        <TeamCard
          name="Paul Amara"
          role="UI & UX Developer"
          image="assets/paulinho.jpg"
          socialLinks={socialLinksPaul}
          description="Meet Paul Amara, a dynamic and aspiring UI/UX designer on the brink of making waves in the digital design landscape. Currently a dedicated student at IPAM, He has immersed himself in the world of User Interface and User Experience design, bringing a fresh perspective and a wealth of creativity to the field."
        />

        <TeamCard
          image="assets/tutu.jpg"
          name="Musa Turay"
          role="Full-stack Developer"
          socialLinks={socialLinksTuray}
          description="Meet Musa Turay, a talented full stack developer. He excels in creating robust, end-to-end web solutions, consistently delivering high-quality projects with attention to detail and innovation"
        />

        <TeamCard
          image="assets/powerrm.jpg"
          name="Samuel B Koroma"
          role="Front End web & mobile developer"
          socialLinks={socialLinksPower}
          description="Meet Samuel B. Koroma, a skilled front-end web and mobile developer. He excels in creating user-friendly interfaces and seamless experiences, consistently delivering high-quality digital projects with attention to detail and innovation"
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
    background-image: url("assets/teampklans.jpg");
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
    gap: 200px;
    flex-wrap: wrap;

    width: 100%;
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
    margin-bottom: 200px;
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
