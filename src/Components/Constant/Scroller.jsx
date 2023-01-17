import React from 'react'
import { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";
import "./Scroller.css"
function useScrollerToTop() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return scrollToTop
}

const Scroller = () => {
    const[ showscrl, setShowscrl]=useState(false)

    const scrolltotopevent=()=>{
        let hiddenhight=250;
        const getscrollerpoint= document.body.scrollTop || document.documentElement.scrollTop;

        if(getscrollerpoint > hiddenhight){
            setShowscrl(true)
        }
        else {
         setShowscrl(false)
        }
    }

    useEffect(()=>{
    window.addEventListener("scroll", scrolltotopevent)
    return ()=> document.removeEventListener("scroll", scrolltotopevent)

    },[])

    const scrollToTop = useScrollerToTop()
    return (
        
        <div className='main-scr-wrapper'>
            { showscrl && 
            <div onClick={scrollToTop} className="scroller-style">
            <FaArrowUp className='scr-icon-styl'/>
            </div>
            }
        </div>
    )
}

export default Scroller;