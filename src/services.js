import React from "react";
import {serviceInfo} from './db.js'




function Services(){




    return(
        <>
            <h1 style={{color:'#2a2179'}}>Services</h1>
            <div className="service_holder_holder">

                <div className="service_holder">
                    <img  src={serviceInfo.chiropracticcare.picture} alt={''}/>
                    <h2>{serviceInfo.chiropracticcare.name}</h2>
                    <h4>{serviceInfo.chiropracticcare.description}</h4>
                    <ul>
                        {serviceInfo.chiropracticcare.bullets.map(x => <li>{x}</li>)}
                    </ul>
                </div>
                <div className="service_holder">
                    <img  src={serviceInfo.autoaccidents.picture} alt={''}/>
                    <h2>{serviceInfo.autoaccidents.name}</h2>
                    <h4>{serviceInfo.autoaccidents.description}</h4>
                    <ul>
                        {serviceInfo.autoaccidents.bullets.map(x => <li>{x}</li>)}
                    </ul>
                </div>
                <div className="service_holder">
                    <img  src={serviceInfo.rehabtherapy.picture} alt={''}/>
                    <h2>{serviceInfo.rehabtherapy.name}</h2>
                    <h4>{serviceInfo.rehabtherapy.description}</h4>
                    <ul>
                        {serviceInfo.rehabtherapy.bullets.map(x => <li>{x}</li>)}
                    </ul>
                </div>
               
            </div>
        </>
    )
}


export default Services