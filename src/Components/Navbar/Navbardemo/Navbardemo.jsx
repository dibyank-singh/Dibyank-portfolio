import React, { useState } from "react";
import {FaLinkedin,FaGithub,FaTwitter,FaYoutube} from "react-icons/fa"
// import { Link } from "react-router-dom";
import myimg from "../../../img/mypic.jpg"
import "./Navbardemo.css";

function Navbardemo() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar"> 
        <div className="nav-container">
         
          <a href="https://github.com/dibyank-singh"target="_blank"
          className="nav-logo">
            <img  className='img-css' src={myimg} alt="my=pic" />
            <a href="https://twitter.com/web_dev_Dk" target="blank"> <h5 id="headstyle">@web-dev-DK <FaTwitter /> </h5></a>
          </a>
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              
              <a href="https://twitter.com/web_dev_Dk"target="_blank"
               className="nav-links">
               <FaTwitter/>
              </a>

            </li>
            <li className="nav-item">
            <a href="https://www.linkedin.com/in/dibyank-singh55/" target="_blank"
               className="nav-links">
               <FaLinkedin/>
              </a>
            </li>
            <li className="nav-item">
            <a href="https://github.com/dibyank-singh"target="_blank"
               className="nav-links">
               <FaGithub/>
              </a>
            </li>
            <li className="nav-item">
            <a href="https://www.youtube.com/channel/UCgZ7ipbbZtTLijRtHOijyPg"target="_blank"
               className="nav-links">
               <FaYoutube/>
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbardemo;