import React from "react";
import { NavLink } from "react-router-dom";


function Banner(){




    return(
    <>
    <div style={{position:'relative'}} className="photo_holder photo_banner1">
                <div className="screen"></div>
                <div style={{flexDirection:"column"}}className="photo_banner_text">
                    <h1>Pro Healthcare</h1>
                    <h2>If you have pain, we can help!</h2>
                    <NavLink to='/auto-accidents'>Learn More</NavLink>

                </div>
            </div>
    </>)
}


export default Banner