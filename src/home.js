import React, { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";




function Home(props){
    const Navigate = useNavigate()


    return(
        <>
        <div className="photo_banner_holder">
            <div className="photo_holder photo_banner1">
                <div className="photo_banner_text">
                    <NavLink to='/auto-accidents'>Learn More</NavLink>

                </div>
            </div>
            <div className="photo_holder photo_banner2 changing_effect"></div>
            <div className="photo_holder photo_banner3 changing_effect"></div>
        </div>
        </>
    )
    
}


export default Home