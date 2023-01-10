import "./Navbar.css"
import { NavLink } from "react-router-dom"
import myimg from "../../img/mypic.jpg"
import {FaLinkedin,FaGithub,FaTwitter,FaYoutube} from "react-icons/fa"

const Navbar=()=>{
    return(
        <>
        {/* <nav>
         <div className="container-nav">
            <div className="left-nav">
                <div className="left-nav-style">
          <a href="https://github.com/dibyank-singh">  <img  className='img-css' src={myimg} alt="my=pic" /> </a>
           <a href="https://twitter.com/web_dev_Dk"> <h5 id="headstyle">@web-dev-DK <FaTwitter /> </h5></a>
            </div>
            </div>

            <div className="right-nav">
            <ul className="nav-list-ul">
            
                 <a href="https://twitter.com/web_dev_Dk"target="_blank" ><li><FaTwitter className='icon-style'/></li></a> 
                 <a href="https://www.linkedin.com/in/dibyank-singh55/" target="_blank" > <li><FaLinkedin className='icon-style' /></li></a> 
                 <a href="https://github.com/dibyank-singh"target="_blank" > <li><FaGithub className='icon-style'/> </li></a>
                 <a href="https://www.youtube.com/channel/UCgZ7ipbbZtTLijRtHOijyPg"target="_blank" ><li><FaYoutube className='icon-style'/></li></a> 
           </ul>
            </div>
         </div>
         </nav> */}

         


         <nav>
            <div className="nav-container">
             
            <NavLink to="/">About</NavLink>

             <ul>
                <li>Twitter</li>
                <li>Youtube</li>
                <li>Instagram</li>
             </ul>

            </div>
         </nav>


        </>
    )
}

export default Navbar;

