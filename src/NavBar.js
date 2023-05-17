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


<div className="nav_holder" style={{height:'115px'}}>

<div style={{'zIndex': '10', position:''}}>
    <NavLink  style={{disply:'flex', alignItems:'center'}}exact to='/'><img alt ='' style={{width:'225px', 'zIndex':'30', position:'absolute'}} src="https://lh3.googleusercontent.com/u/0/docs/ADP-6oHW4OwQO5_bukhykbMatW0SRns-zJbAZKfbGH4PkSv-JOAHLbHkxw2lQIyOlmwImhXVnVZuRyuvwmcAhlkrMgZ9chWtr3O-srZ_avLnfkNURrwQbLgWKlZT2xGOtnt9FwOjpzBVQI9Ta2xvrzSTVMfBEumfW1D4OSMOqaBumahVJh4F4rHzLnKZYOFCFfrCqY848i4Wzp-z8LaG6vEtVWn1v8akMVH6jhrCsNAfqPHtz9hNdk4h3jV-KocezJYJQNpqgff-iYOYHbZA2S4hQyG9TKrz1ACOph-f3-qnaSolFGgo-BZIyQ52iRgX-rWFFr3_g99HnBmGH-t87_0OVFgH-RRoHIxkE-5fwe7FAh2IGE_3YXFqN91RR_rDqkeQVcXgjpVZ1Ke0F311GB7GxgMmw7jlq5ZrArmcLGUklNF5lnk8mpq7xulTDfUX5t8q3fQVvc5StusWkPJywAVdyQOgAIEW3NKy5HKRMZ4fMyLNLmOhJLuY8Db0QCggzY_V9OQ8aVhHaW1dPFiiyQneZFiyahpj1C2JyBCGap02PyGrWBJq9kCkLi-F8wWrCW4ujU6B07ZWqcwDFJBrms_9hfKtUNqUipS5MCsZdHwhEkBzWIdvbZdFO7pB_pxd7KNQkANbiaWwGxF4WzSsDBTMV1dMUFTyi1qQeQMV_MdTXVoVLXLEDsDG-htiRKfdLuoHVkL8hzzV056d4C7g99yzHMHvcWfqjaZy0OYo0oFp5SBhX93eWQywsPrnSgTLz3QIyHpYqg3oSLs0QqiNsk5kgqsB3ANHn9BUfFs-dZoxrHYhVOSzSahvPcD0pP_nJssx5agYRf9cHnjJ1M1CS7ObvxSUjeAhTPecrXRWUKlS6th_ZCtEKKo2yicE-xCFHRAaCi3v-_KZRP-O_TOQJ7z0GWg"></img></NavLink>
</div>



<div className="nav">
    <div style={{position:'relative'}}>
    <NavLink style={{fontSize:'26px', margin:'0 10px', textDecoration:'none'}}exact to='' onClick={(e) => staffDropDown(e)}>Staff</NavLink>
    <div className="staff_dropdown">
        <NavLink exact to='sam'>Dr. Sam</NavLink>
        <NavLink exact to='dante'>Dr. Dante</NavLink>
        <NavLink exact to='brenda'>Brenda</NavLink>
    </div>

    </div>
    {/* <NavLink exact to='dante'>Dante</NavLink> */}
    <NavLink exact to='services'>Services</NavLink>
    <NavLink exact to='new-patient'>New Patient</NavLink>
    <NavLink exact to='contact'>Contact</NavLink>
    <div style={{width:'20px'}}></div>
</div>

<div className="nav2">
    <NavLink to='mobile-nav' >
        <img style={{height:'65px', 'marginRight':'20px'}}src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" alt="Menu Icon" />
    </NavLink>
</div>

</div>


</>
)
}


export default NavBar