import React from "react";
import {NavLink} from 'react-router-dom'




function NavBar(){



return(
<>


<div className="nav_holder" style={{height:'115px'}}>

<div style={{'zIndex': '10', position:''}}>
    <NavLink  style={{disply:'flex', alignItems:'center'}}exact to='/'><img alt ='' style={{width:'225px', 'zIndex':'30', position:'absolute'}} src="https://i.imgur.com/RxO9lEw.png"></img></NavLink>
</div>



<div className="nav">
    <NavLink exact to='sam'>Sam</NavLink>
    <NavLink exact to='dante'>Dante</NavLink>
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