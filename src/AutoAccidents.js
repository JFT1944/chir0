import React from "react";
import Banner1 from "./Banner1"
import InfoSection from "./InfoSection";

let data = [
    {title1:`We Focus On Treating Car Accident Victims`, text:[`At Pro Healthcare Rehab, we have been focusing on treating Car Accident Injury victims in Georgia.`, `Our Doctors understand that getting into a car accident is a traumatic and stressful experience. It can create an impact emotionally, mentally, and physically.`, `How much more if the person who got caught in that accident suffers an injury? Even minor injuries can cause stress, pain, and inconvenience.`]},
    {title1:`Treatment Options for Auto Accidents`, text:[`At Pro Healthcare Rehab, we are experts in treating various injuries including neck injuries, back injuries as well as soft tissue injuries associated with automobile accidents.`, `In addition, they are also experts in loosening stiff muscles that were affected by the accident. Not only are we experienced in treating the injuries associated with Car Accidents, but we take care to provide the proper documentation of injuries, detailed narratives, and the daily reports the Insurance companies and Attorneys need for the proper resolution of your Claim.`]},
]

let image = `https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Car_Crash_7-1-18_2245_%2842450608354%29.jpg/1599px-Car_Crash_7-1-18_2245_%2842450608354%29.jpg?20180728033641`

function AutoAccidents(){




    return(
    <>
    <Banner1 image={image} text1={'Auto Accidents Care'}/>
    <InfoSection info={data}/>
    
    </>)
}

export default AutoAccidents