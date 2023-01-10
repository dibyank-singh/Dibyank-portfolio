import React from 'react'
import "./PersonalSec.css"

const PersonalSec = () => {
  return (
    <section>
        <div className="p-container">
            {/* <div className="p-left-div">
              
               <h3 id='h3-text' >Skills</h3>
                <p className='para-text'> <span>HTML5,CSS3</span> <span>JavaScript,React Js</span>
                 <span>Material-Ui, Bootstrap</span> <span>Node js, Express Js </span> 
                 <span> Mongodb , MySql</span> <span>Redux, Git</span>   </p>
            
            </div> */}
            <div className="p-right-div"> 
                <div className="right-inner-div">
                <h2 id='award-style'>Awards & Achievement </h2>

                <div className="img-container">

                <div className="img-card">
                    <img src="/img/dec-twt.jpeg" />
                     <h3>Best perfomer- Dec21</h3>
                </div>
                <div className="img-card">
                    <img src="/img/hackathon-pic.jpeg" alt="Awards-images" />
                     <h3>Hackthon Participate</h3>
                </div>
                <div className="img-card">
                    <img src="/img/oct-twt.jpeg"/>
                     <h3>Best performer- Oct21</h3>
                </div>
                </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default PersonalSec;