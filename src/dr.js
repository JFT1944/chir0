import React from "react";
import { useParams } from "react-router-dom";
import staffInfo from "./db";



function DR(){
let {name} = useParams()

if(name !== 'sam'){
    if(name !== 'dante'){
    console.log(name)
        if(name !== 'brenda'){
            if(name !== 'assistants'){return (
                <>
                <h2>Oops... No Doctors Here</h2>
                <h4>Please Return Home</h4>
                </>
                )

            }
        }
}
}


    return(
    <>
    <div className="doctor_info">
    <div>
        <img className='profile_img' src={staffInfo[name].photo} alt="" />
    </div>

    <div className="doc_text">
    <h1>{staffInfo[name].name}</h1>
    <h3>{staffInfo[name].position}</h3>
    <p>{staffInfo[name].bio}</p>
    </div>
    </div>
    
    </>
    )
}


export default DR