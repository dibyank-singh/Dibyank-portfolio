import React from 'react'
import "./Cart.css"

const Cart = ({items}) => {
  return (
   <div className="cart-items">
   <div className="inner-cart-style">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
   </div>
  
    <a href={items.link} target="_blank">
      <img src={items.img} alt="Services-images"  />
      
    </a>
     
   </div>
  )
}

export default Cart