import React from 'react'
import "./Header.css"
import Mypic from "../../img/profile-pic.png"
import { motion } from "framer-motion";
import {FaLinkedin,FaGithub,FaTwitter,FaYoutube} from "react-icons/fa"

const Header = () => {
  return (
    <header>
    <div className="main-div">
        <div className="left-div">
          <div className="content-box">
            <h2 className='My-intro'> <span>Hello</span>, I Am </h2>
            <h1 className='My-name'>Dibyank Kumar Singh</h1>
              <div className="title">
                <div className="title-dis">
                    <div className="title-list">Mern Stack Developer</div>
                    <div className="title-list">React Js Developer</div>
                    <div className="title-list">Full Stack Developer</div>
                    <div className="title-list"> Freelancer</div>
                    <div className="title-list">Youtuber</div>
                </div>
              </div>
              <div className="discription">
                <p>
                 Hii, I'm Full Stack MERN developer| Co-founder of Theopenindia| Looking for great career opportunity |
                </p>
              </div>
              <div className="MenuIcon">
                 <ul className="Menu-list-header">
                 <a href="https://www.linkedin.com/in/dibyank-singh55/" className='icon-style'target="_blank" > <li><FaLinkedin/></li></a> 
                 <a href="https://github.com/dibyank-singh"target="_blank"> <li><FaGithub/> </li></a>
                 <a href="https://twitter.com/web_dev_Dk"target="_blank"><li><FaTwitter/></li></a> 
                 <a href="https://www.youtube.com/channel/UCgZ7ipbbZtTLijRtHOijyPg"target="_blank"><li><FaYoutube/></li></a> 
                 </ul>
             </div>
             <a href="/DibyankResumet.pdf" download className='btn'>Download CV</a>
          </div>
        </div>
 
        <motion.div className="right-div">
        {/* <div className="bg-shape"></div> */}
        <img className='my-pic' src={Mypic} alt="My-pic" />
        </motion.div>
       </div>
    </header>
  )
}

export default Header;