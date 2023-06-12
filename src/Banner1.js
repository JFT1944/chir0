import React from "react";
import { NavLink } from "react-router-dom";


function Banner(props){
let {image, text1, text2} = props



    return(
    <>
    <div style={{background:'red' , height:'30vh', backgroundImage:`url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className="photo_holder photo_banner1">
                <div style={{}} className="photo_banner_text">
                    

                </div>
            </div>
    </>)
}


export default Banner