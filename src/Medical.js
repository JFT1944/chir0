import React from "react";
import Banner1 from "./Banner1"
import InfoSection from "./InfoSection";


let data = [
    {title1:`Car Accidents are one of the nation’s leading causes of Personal Injuries. Let our Medical Team Help You.`, text:[`At Pro Healthcare we work closely with some of the premier Medical Doctors near our clinic in the triad area. This gives us the unique ability to coordinate your care in the way that best serves you the patient.`, `By working with others in the medical community we are able to more accurately diagnose and document the injuries you have experienced through advanced testing procedures.`, `Having options to send you to specialists with MRI equipment, Nerve Conduction studies and CT scans gives us a high degree of precision when it comes to treating your injuries.`, `In addition to the diagnostic tools that our medical partners have, they also have some cutting edge treatment options that may be of help to you if more conservative care is not working for you.
    This process can save you time, money and we know that critical documentation, important for insurance companies to take your claim seriously.`, `Let our close relationships with local Marietta Medical Doctors benefit you and get you the care you need, when you need it.`, `If you, or anyone you know, was injured in a Car Wreck, be sure to call the leader in the safe and effective treatment of auto accident injuries!`, `From the most cutting edge treatment and documentation options for your injuries, to assistance in helping you find skilled legal representation, Pro Healthcare has you covered.`]}
]



function Medical(){




    return(
    <>
    <Banner1 />
    <InfoSection  info={data}/>
    
    </>)
}

export default Medical