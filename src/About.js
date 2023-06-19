import React from "react";
import Banner1 from "./Banner1"
import About_Us from "./About_Us";

function About(props){




    return(
        <>
        {/* <h2>About</h2> */}
        <Banner1 text1={'About Us'} image='https://images.unsplash.com/photo-1473042904451-00171c69419d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1499&q=80'/>
        <About_Us />
        {/* <About_Us left={{photo:Dante}} right=''/> */}
        {/* <About_Us left={{text:['Sam']}} right={{photo:Sam}}/> */}
        {/* <Banner1 image={image}/> */}
        </>
    )
}


export default About