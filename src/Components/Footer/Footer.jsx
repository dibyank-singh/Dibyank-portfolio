import React from 'react'
import "./Footer.css"
import {FaLinkedin,FaGithub,FaTwitter,FaYoutube} from "react-icons/fa"
const Footer = () => {
  return (
 <footer>
    <div className="footer-style">
      Made with <div class="heart">&#10084;</div> by Dibyank Singh &reg;{new Date().getFullYear()} (Using-React Js)
     
      <ul className="Menu-list">
         <a href="https://www.linkedin.com/in/dibyank-singh55/" className='icon-style'target="_blank" > <li><FaLinkedin/></li></a> 
         <a href="https://github.com/dibyank-singh"target="_blank"> <li><FaGithub/> </li></a>
         <a href="https://twitter.com/web_dev_Dk"target="_blank"><li><FaTwitter/></li></a> 
         <a href="https://www.youtube.com/channel/UCgZ7ipbbZtTLijRtHOijyPg"target="_blank"><li><FaYoutube/></li></a> 
        </ul>
    </div>
 </footer>
  )
}

export default Footer;