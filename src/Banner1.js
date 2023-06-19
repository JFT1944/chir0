import React from "react";
import { NavLink } from "react-router-dom";


function Banner1(props){
let {image, text1, text2} = props



    return(
    <>
    
    <div style={{position:'relative', background:'darkgrey' , height:'45vh', backgroundImage:`url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className="photo_holder photo_banner1">
                <div className="screen"></div>
                <div style={{}} className="photo_banner_text">
                <h1>{text1}</h1>

                </div>
            </div>
    </>)
}


export default Banner1