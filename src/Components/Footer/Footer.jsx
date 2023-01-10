import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
 <footer>
    <div className="footer-style">
      <p className='inner-para'>Dibyank Singh Portfolio-Website &reg;{new Date().getFullYear()}</p>
    </div>
 </footer>
  )
}

export default Footer;