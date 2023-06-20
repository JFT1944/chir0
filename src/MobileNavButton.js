import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function MobileNavButton(){
let [menu, openMenu] = useState(true)


function handleClick(e){
    if(menu){
        openMenu(false)
        console.log('false')
    } else{
        openMenu(true)
        console.log('true')
    }



}

   if(menu){
    return (
        <>
        <div className="m_nav_button" onClick={(e) => handleClick(e)}>
            <span className="line top"></span>
            <span className="line middle"></span>
            <span className="line bottom"></span>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/about'>About Us</NavLink>
            <NavLink exact to='/injuries'>Injuries</NavLink>
            <NavLink exact to='/chiropractic'>Chiropractic</NavLink>
            <NavLink exact to='/auto-accidents'>Auto Accidents Care</NavLink>
            <NavLink exact to='/medical'>Medical</NavLink>
            <NavLink exact to='/attorney'>Attorney Referral</NavLink>
            <NavLink exact to='/contact-us'>Contact Us</NavLink>
        </div>
        </>
    )
   }else{
    return (
        <>
        <div className="m_nav_button openMenu" onClick={(e) => handleClick(e)}>
            <span style={{transform:'rotate(45deg)'}} className="line middle"></span>
            <span style={{transform:'rotate(315deg)'}} className="line middle"></span>
            <span style={{display:'none'}} className="line middle"></span>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/about'>About Us</NavLink>
            <NavLink exact to='/injuries'>Injuries</NavLink>
            <NavLink exact to='/chiropractic'>Chiropractic</NavLink>
            <NavLink exact to='/auto-accidents'>Auto Accidents Care</NavLink>
            <NavLink exact to='/medical'>Medical</NavLink>
            <NavLink exact to='/attorney'>Attorney Referral</NavLink>
            <NavLink exact to='/contact-us'>Contact Us</NavLink>
        </div>
        </>
    )
   }
}

export default MobileNavButton