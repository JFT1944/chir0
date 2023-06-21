import React from "react";
import Banner1 from "./Banner1"
import InfoSection from "./InfoSection";


let data=[
    {title1:`After a car accident you are going to get a call from the at fault party’s insurance company. Will you know what to say?`, 
     text:[`You are going to need a personal injury attorney who will protect your interests and is skilled in auto accident cases. The insurance company of the at fault party will try and offer you a minimal settlement after they send one of their representatives to take pictures of the crash. Most people end up taking their initial offer because they don't know any better. But in almost all cases they won’t offer you everything you deserve. They represent their company’s interests and not yours.`, `At Pro Healthcare, we believe in providing comprehensive support to individuals who have suffered personal injuries.  We are excited to announce that we accept personal injury cases on a lien, aiming to make quality healthcare and legal representation accessible to all.`]},
    {title2:`What does this mean for you?`, text:[`No Upfront Costs: You can rest easy knowing that pursuing your personal injury claim won’t burden you with upfront expenses.  Our office will be compensated when you win your case.  Our dedicated team will stay in contact with your attorney throughout the case with updates on your progress.  We will forward all of your records to your attorney, at the end of the case allowing you to focus on your recovery without financial stress.`, `Don’t let financial barriers prevent you from seeking the justice and compensation you deserve.  Take advantage of our lien arrangement and let us guide you on the path to recovery.  At Pro healthcare, we believe that every patient deserves quality care.  Trust us to handle your personal injury care while you focus on healing and reclaiming your life.`, `We can help you get the compensation you deserve, CALL PRO HEALTHCARE REHAB NOW!`]},
    {title1:`Need help finding a good, qualified attorney?`, text:[`Our staff can refer you to some great local attorneys in the greater Atlanta area that specialize in personal injury cases. The attorneys we refer you to don't charge huge fees. That means more money in your pocket from your settlement!`]}
]

// let image = 'https://images.unsplash.com/photo-1676181739859-08330dea8999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
let image = 'https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJ1bHRyYWp1bF9qdWRpY2lhcl9pbl9ub3VsLWltYWdlLWt5YmNmbGN4LmpwZw.jpg'


function Attorney(){




    return(
    <>
    <Banner1 image={image} text1={'Attorney Referrals'} />
    <InfoSection info={data}/>
    
    </>)
}

export default Attorney