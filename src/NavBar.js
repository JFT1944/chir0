import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom'





function NavBar(){
let [dropdown, setDropDown] = useState(true)
let [images, setImages] = useState({
    // logo:'https://lh6.googleusercontent.com/F7HPmjg5cDgG2Bt_zxbrt74EWBR3m14B1p83xDeTTh-CW6K-5tEyfSuuGv5iIe25LLeU9tY8Z0b1Cyt7u0NKH_gawcraLGSStSZ_-UhDCVN5sQYPPsXfn4b0b3S6YzPUul1o4z8tC0c3frSaHFMndyk', 
    logo:'https://i.imgur.com/NGJsdat.png', 
    allDay:'https://www.cobbchiropracticclinic.com/images/Cobb_Chiropractic_Clinic_February2018/Images/chiropractor%20Greensboro.png?width=300&name=chiropractor%20Greensboro.png',

})


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
<div className="inner_nav_holder">
    <div className="logo_holder">
        <img src={images.logo} alt="Pro Healthcare Rehab Logo" className="logo"/>
        <img src={images.allDay} alt="24/7 availablility" className="allday"/>
        <span className="phone_num">{`(770) 800-2070 `}</span>
        <span className="phone_num two"><span style={{color:'red'}}>Call Now!</span> We're waiting to answer your questions.</span>

    </div>
</div>

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