import React from 'react'
import "./Carts.css"
import {data} from "../../Data.js"

// Compornt Import
import Cart from '../Cart/Cart'
console.log(data)
const Carts = () => {
  return (
    <section>
        <div className="container">

            <div className="text-box">
            <h2 id='text-head' >My Recent Projects</h2>
            <p className='para-text'>Here, I have listed all my recent projects, All these are built based on mern stack technology.</p>
            </div>

            <div className="cart-container">
              {
                data.map((items)=>(
                  <Cart items={items}/>
                ))
              }
             
            </div>

        </div>
    </section>
  )
}

export default Carts;