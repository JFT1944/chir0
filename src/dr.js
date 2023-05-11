import React from "react";
import { useParams } from "react-router-dom";
import staffInfo from "./db";



function DR(){
let {name} = useParams()

if(name !== 'sam'){
    if(name !== 'dante'){
    console.log(name)
        if(name !== 'brenda'){
            return (
                <>
                <h2>Oops... No Doctors Here</h2>
                <h4>Please Return Home</h4>
                </>
                )
        }
}
}


    return(
    <>
    <h1>{staffInfo[name].name}</h1>
    <h3>{staffInfo[name].position}</h3>
    <img src="" alt="" />
    <p>{'info'}</p>
    
    </>
    )
}


export default DR