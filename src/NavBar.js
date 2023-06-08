import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom'





function NavBar(){
let [dropdown, setDropDown] = useState(true)


console.log('navbar')


function staffDropDown(e){
    e.preventDefault()
    setDropDown(!dropdown)
    if(dropdown){
    document.querySelector('.staff_dropdown').style.display = 'flex'}

    else {
    document.querySelector('.staff_dropdown').style.display = 'none'}
    }





return(
<>


<div className="nav_holder" style={{height:''}}>

<div className="nav">
    <NavLink exact to='/'>Home</NavLink>
    <NavLink exact to='/about'>About Us</NavLink>
    <NavLink exact to='/injuries'>Injuries</NavLink>
    <NavLink exact to='/chiropractic'>Chiropractic</NavLink>
    <NavLink exact to='/auto-accidents'>Auto Accidents Care</NavLink>
    <NavLink exact to='/medical'>Medical</NavLink>
    <NavLink exact to='/attorney'>Attorney Referral</NavLink>
    <NavLink exact to='/contact-us'>Contact Us</NavLink>
</div>

</div>


</>
)
}


export default NavBar