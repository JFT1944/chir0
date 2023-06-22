import React  from "react";

function About_Us2(props){
    let {title, text} = props



return (
    <>
    <div style={{width:'100vw', display:'flex', justifyContent:'center', height:'fit-content'}}>
<div style={{width:'80%', maxWidth:'1100px', display:'flex', justifyContent:'center', flexDirection:'column', }}>
<h2>{title}</h2>
<p style={{textAlign:'justify'}}>{text}</p>
</div>

    </div>
    </>
)
} 

export default About_Us2