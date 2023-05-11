import React, { useState } from "react";
import {NavLink} from 'react-router-dom'




function NavBar(){
let [dropdown, setDropDown] = useState(true)



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
    <NavLink  style={{disply:'flex', alignItems:'center'}}exact to='/'><img alt ='' style={{width:'225px', 'zIndex':'30', position:'absolute'}} src="https://i.imgur.com/RxO9lEw.png"></img></NavLink>
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
</div>


</>
)
}


export default NavBar