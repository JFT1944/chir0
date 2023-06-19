import React from "react";
import Banner1 from "./Banner1"
import InfoSection from "./InfoSection";


let data=[
    {title1:`After a car accident you are going to get a call from the at fault party’s insurance company. Will you know what to say?`, text:[`You are going to need a personal injury attorney who will protect your interests and is skilled in auto accident cases.
    The insurance company of the at fault party will try and offer you a minimal settlement after they send one of their representatives to take pictures of the crash.
    Most people end up taking their initial offer because they don't know any better.
    But in almost all cases they won’t offer you everything you deserve. They represent their company’s interests and not yours.
    We can help you get the compensation you deserve, CALL PRO HEALTHCARE NOW! `]},
    {title1:`Need help finding a good, qualified attorney?`, text:[`Our medical staff can refer you to some great local attorneys in the greater Marietta area that specialize in personal injury cases. The attorneys we refer you to don't charge huge fees. That means more money in your pocket from your settlement!`, `We work closely with your lawyer to provide them professional documentation of your injuries, diagnostic testing and treatment plan. Only with that medical documentation can your attorney get you the money you deserve for your case.`]},
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