import React from 'react'
import "./HeroSection.css"
import myimg from "../../img/profile-pic2.png"
import { motion } from "framer-motion";
import {techStack} from "../../constants"
import {FaLinkedin,FaGithub,FaTwitter,FaYoutube} from "react-icons/fa"

const HeroSection = () => {
  return (
    <>
    <section>
        <div className="main">
          <div className="left-div-herosec">
            <div className="myimg">
               <img  className='img-css' src={myimg} alt="my=pic" />
            </div>
          </div>

          <div className="right-div">
            <div className="content">
            <h2 id='text-head-sec' >About Me</h2>
            <p id='text-para'>Dibyank Singh - <span className='inn-para'>Mern Stack Developer</span> </p>
            <p id='text-para-sec'>Hi, I'm Software Engineer with excellent development and problem-solving skills, ability to perform well in a team, Passionate about coding and enjoy writing on my website.</p>
          <div className="MenuIcon">
        <ul className="Menu-list">
            <h3 className='list-head'>Connect With Me-</h3>
         <a href="https://www.linkedin.com/in/dibyank-singh55/" className='icon-style'target="_blank" > <li><FaLinkedin/></li></a> 
         <a href="https://github.com/dibyank-singh"target="_blank"> <li><FaGithub/> </li></a>
         <a href="https://twitter.com/web_dev_Dk"target="_blank"><li><FaTwitter/></li></a> 
         <a href="https://www.youtube.com/channel/UCgZ7ipbbZtTLijRtHOijyPg"target="_blank"><li><FaYoutube/></li></a> 
        </ul>
         </div>
            </div>
          </div> 
        </div>
    </section>
    <section>  
      <h3 className='skills-header'>Technologies and Tools</h3> 
    <motion.div className="skills-badge ">
            {techStack.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{ 
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="inner-style"
              >
                <img alt="" src={el.link} style={{width:40}} />
                <h4 style={{marginLeft:2}}>{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
    </section>
    </>
  )
}

export default HeroSection;