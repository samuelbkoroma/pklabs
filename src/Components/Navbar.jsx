import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

const Navbar = () => {
  //change nav color when scrolling
  const [color, setColor] = useState();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <Div>
      <nav className={color ? "header header-bg" : "header"}>
        <div className="logo-name">
          <Link to="/">
            <img src="assets/logoblue.png" alt="" height={90} />
          </Link>
        </div>

        <div className="logo-link">
          <ul>
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/about" className="link">
              <li>About</li>
            </Link>

            <Link className="link" to="/projects">
              <li>Projects</li>
            </Link>

            <Link className="link" to="/contact">
              <li>Contact</li>
            </Link>

            <Link className="link" to="/team">
              <li>Team</li>
            </Link>
          </ul>
        </div>
        <div className="menu">
          <button
            onClick={handleSidebar}
            style={{
              outline: "none",
              border: "none",
              width: 50,
              height: 50,
              borderRadius: 10,
            }}
          >
            {showSidebar ? (
              <FontAwesomeIcon
                icon={faX}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            )}
          </button>

          {showSidebar && <Sidebar />}
        </div>
      </nav>
    </Div>
  );
};

export default Navbar;

const Div = styled.div`
  width: 100%;
  margin-top: 0;
  padding-top: 0;

  .header {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    height: 90px;
    z-index: 1000;
    align-items: center;
    background-color: white;
    box-shadow: -3px 5px 19px -3px rgba(0, 0, 0, 0.66);
    -webkit-box-shadow: -3px 5px 19px -3px rgba(0, 0, 0, 0.66);
    -moz-box-shadow: -3px 5px 19px -3px rgba(0, 0, 0, 0.66);
    z-index: 1000;
  }

  .logo-name {
    width: 350px;
  }

  .logo-link {
    width: 100%;
  }

  .logo-link ul {
    display: flex;
    justify-content: center;
    gap: 50px;
    text-decoration: none;
  }

  .logo-link ul li {
    list-style: none;
    color: #000;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    font-family: "Conthrax", sans-serif;
    cursor: pointer;
  }

  .link {
    text-decoration: none;
  }

  .logo-link ul li:hover {
    color: #192bc2;
  }

  .menu {
    display: none;
  }

  @media (max-width: 768px) {
    .logo-link {
      display: none;
    }

    .menu {
      display: block;
    }
  }
`;
