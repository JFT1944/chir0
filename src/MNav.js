import React from "react";
import { NavLink, Navigate } from "react-router-dom";




function MNav(){
// const Navigate = Navigate()





    return(
        <>
        <div className='mNav_holder'>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/services'>Services</NavLink>
            <NavLink exact to='/new-patient'>New Patient</NavLink>
            <NavLink exact to='/contact'>Contact</NavLink>
            <NavLink exact to='/sam'>Dr. Sam</NavLink>
            <NavLink exact to='/dante'>Dr. Dante</NavLink>
            <NavLink exact to='/brenda'>Brenda</NavLink>
        </div>
        </>
    )
}


export default MNav