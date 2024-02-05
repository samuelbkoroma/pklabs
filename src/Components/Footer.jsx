import styled from "styled-components";

// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Div>
      <div className="main-contact">
        <h1 className="heading">Contact PecuilarLabs</h1>

        <div className="explore">
          <div></div>
          <h2>Reach out to us</h2>
          <div></div>
        </div>

        <div className="contact">
          <form action="" className="form">
            <div className="inputs">
              <input type="text" placeholder="Name" className="input-text" />
              <input type="email" placeholder="Email" className="input-text" />
              <input type="text" placeholder="Subject" className="input-text" />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              className="input-text"
            ></textarea>

            <button className="form-button">Send Message</button>
          </form>
        </div>
      </div>

      {/* <div className="socio">
        <div>
          {" "}
          <img src="assets/facebooks.png" alt="" />{" "}
        </div>
        <div>
          <img src="assets/instagram.png" alt="" />
        </div>
        <div>
          <img src="assets/linkedin.png" alt="" />
        </div>
        <div>
          <img src="assets/twitter.png" alt="" />
        </div>
      </div>

      <div className="linkss">
        <Link className="linked" to="/">
          Home
        </Link>
        <Link className="linked" to="/about">
          About
        </Link>
        <Link className="linked" to="/products">
          Projects
        </Link>
        <Link className="linked" to="/contact">
          Contact
        </Link>
      </div> */}
    </Div>
  );
};

export default Footer;

const Div = styled.div`

.main-contact{
  margin-top: 300px;
  width: 770px;
  height: 464.19px;
  margin-left: auto;
  margin-right: auto;

}


  .heading {
      color: #192bc2;
    text-align: center;
    font-family: "Conthrax", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
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
     font-family: "Conthrax", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
  }

  .form {
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }

  .inputs {
    display: flex;
    width:100%
    justify-content: space-between;
    gap:5px;
  }

  .inputs input {
    border: 1px solid #ddd;
    background: #fff;
    width: 219.66px;

    height: 34px;
    padding: 7px 12px 8px 12px;
    outline: none;
    margin-bottom: 15px;
  }

  textarea {
    border: 1px solid #ddd;
    background: #fff;

    width: 740px;
    height: 150px;
    outline: none;
        border-radius:15px;
  }

  .form-button {
    width: 740px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius:15px;

    color: #000;
    text-align: center;
    font-family: poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 42px; /* 300% */
    text-transform: uppercase;
    transition:0.3s ease-in-out;
  }
  .form-button:hover{
  background:#192bc2;
  color:white;
  }


.socio{
margin-top:20px;
margin-bottom:100px;
display: flex;
width: 100%;
height: 130px;
padding: 30px 0px;
justify-content: center;
align-items: center;
background: #192bc2;
gap:30px;


  }



  .socio div{
display: flex;
width: 50px;
height: 50px;
transform: rotate(45deg);
padding: 12.636px 12.629px 12.771px 12.777px;
justify-content: center;
align-items: center;
border: 1px solid #DDD;
    transition: 0.5s ease-in-out;
 
  }

  .socio div:hover{
    background:white;
  }

    .socio div img{
transform: rotate(315deg);
width:30px;
height:30px;
  }


  .linkss{
    display:flex;
    justify-content:center;
    gap:50px; 
    align-items:center;
    margin:0 auto;
    padding-bottom:50px;
  }

  .linked{
    color: #000;
text-align: center;
    font-family: "Conthrax", sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 17.14px; /* 142.833% */
text-transform: uppercase;
text-decoration:  none;
  }

  .linked:hover{
    color:#192bc2;
  }

    .input-text{
    color: #000;
text-align: center;
    font-family:poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 17.14px; /* 142.833% */
text-decoration:  none;
    border-radius:15px;
  }




  @media(max-width:768px){

    .inputs{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;

    }

    textarea{
      width:400px;
      margin:0 auto;
    }
    .form-button{
      width:400px;
  
    }

    .main-contact{
      width:400px;
      height:700px;
   
    }


 .socio{
display: flex;
flex-wrap:wrap;
width: 100%;
height: 200px;
background: #192bc2;
gap:30px;
padding:0;
margin:0;


  }


  
  .socio div{
display: flex;
width: 40px;
height: 40px;
transform: rotate(45deg);
padding: 12.636px 12.629px 12.771px 12.777px;
justify-content: center;
align-items: center;
border: 1px solid #DDD;
    transition: 0.5s ease-in-out;
  }


  }

`;
