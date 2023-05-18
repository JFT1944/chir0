import React from "react";
import { NavLink, Navigate } from "react-router-dom";




function MNav(){
// const Navigate = Navigate()





    return(
        <>
        <div className='mNav_holder'>
            <div style={{height:'0px'}}></div>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/services'>Services</NavLink>
            <NavLink exact to='/new-patient'>New Patient</NavLink>
            <NavLink exact to='/personal-injury'>Forms</NavLink>
            <NavLink exact to='/sam'>Dr. Sam</NavLink>
            <NavLink exact to='/dante'>Dr. Dante</NavLink>
            <NavLink exact to='/brenda'>Brenda</NavLink>
            <div style={{height:'20px'}}></div>
        </div>
        </>
    )
}


export default MNav