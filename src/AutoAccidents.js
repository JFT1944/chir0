import React from "react";
import Banner1 from "./Banner1"
import InfoSection from "./InfoSection";

let data = [
    {title1:`We Focus On Treating Car Accident Victims`, text:[`At Cobb Chiropractic we have been focusing on treating Car Accident Injury victims in Greensboro for more than 40 years.`, `Our Doctors understand that getting into a car accident  is a traumatic and stressful experience.
    It can create an impact emotionally, mentally and physically.`, `How much more if the person who got caught in that accident suffers an injury? Even minor injuries can cause stress, pain, and inconvenience.`]},
    {title1:`Treatment Options for Auto Accidents`, text:[`Our Chiropractors are experts in treating various injuries including neck injuries, back injuries as well as soft tissue injuries associated with automobile accidents.`, `In addition, they are also experts in loosening stiff muscles that were affected by the accident. Not only are we experienced in treating the injuries associated with Car Accidents, but we take care to provide the proper documentation of injuries, detailed narratives and the daily reports the Insurance companies and Attorneys need for the proper resolution of your Claim.`]},
]




function AutoAccidents(){




    return(
    <>
    <Banner1 />
    <InfoSection info={data}/>
    
    </>)
}

export default AutoAccidents