import React, { useEffect, useState } from "react";
import {NavLink, useNavigate} from 'react-router-dom'
import MobileNavButton from "./MobileNavButton";





function NavBar(){
let navigate = useNavigate()
let [dropdown, setDropDown] = useState(true)
let [images, setImages] = useState({
    // logo:'https://lh6.googleusercontent.com/F7HPmjg5cDgG2Bt_zxbrt74EWBR3m14B1p83xDeTTh-CW6K-5tEyfSuuGv5iIe25LLeU9tY8Z0b1Cyt7u0NKH_gawcraLGSStSZ_-UhDCVN5sQYPPsXfn4b0b3S6YzPUul1o4z8tC0c3frSaHFMndyk', 
    logo:'https://lh3.googleusercontent.com/Bfp1hYYwFHSfNbkdSB5YK0Tc3iaMiphrRghU--lkd4mYesqXOkRMngyXWWsyTWMjlD4IQCNVQY3gFHQizG0Oi-GsLLoyeXCABLRKKplzjnw_AuVk_AHSJJ5Wdrgm11DNhcVA9ufgLVTNYhH-Pc06wwo', 
    allDay:'https://lh6.googleusercontent.com/oU1u9_NbPJqdrgSz1Bog38UyCO59Tjxj_m5JiEFDWQ3yIPYWm-_mgK0dH9Sc4c2eL4fKkijKZ2WobX0Ce-ib_O0mrsAJwj552Bu-Wjq0izXxWyp0nkEE10hrBYDV3jEYWvbyTlALag68CLlIU0M69B8',

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




function handleC(e){
e.preventDefault()
console.log('clicked')
navigate('/')
}





return(
<>


<div className="nav_holder" style={{height:''}}>
<div className="inner_nav_holder">
    <div className="logo_holder">
        <img src={images.logo} alt="Pro Healthcare Rehab Logo" className="logo" onClick={e => handleC(e)}  />
        <img src={images.allDay} alt="24/7 availablility" className="allday"/>
        <span style={{top:'56px'}} className="phone_num">{`(770) 800-2070 `}</span>
        <span style={{top:'81px', right:'226px'}}className="phone_num">¡Hablamos español!</span>
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
    {/* <NavLink exact to='#' onClick={(e) => handleClick(e)}>Patient <br /> Portal</NavLink> */}
</div>
<MobileNavButton />
</div>


</>
)
}


export default NavBar