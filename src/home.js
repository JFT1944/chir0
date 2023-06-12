import React, { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Banner from './Banner'
import InfoSection from "./InfoSection";
import GoodCare from "./GoodCare";


const data = [
    {title1:'Why Choose Pro Healthcare?',
    text: ['Specializing in neck, shoulder, back pain and other work or sports-related injuries, Cobb Chiropractic provides quality and affordable chiropractic care. Our Greensboro, NC chiropractic office, treats a wide range of ailments and injuries. We deliver the expert care that helps you to find the relief you need, and quickly get back on your feet, utilizing the most advanced chiropractic techniques and methods available today. We treat the underlying cause of your discomfort to ensure you have an abundance of health, vitality and wellness.', 'Cobb Chiropractic is a comprehensive chiropractic practice that provides services to the Greensboro, North Carolina area. Our team of experts focus on improving the health of each patient by providing custom care for those who live in constant pain, have diminished balance, injuries, or recurring health issues.']
    },
    {title2:'Our Chiropractic Services Help Those Who Have:',
     text: [['CAR / TRUCK ACCIDENT INJURIES', `When you’ve been in a car accident you can suffer from many health issues such as lower back pain, neck pain, sciatica, whiplash, and other issues. At Cobb Chiropractic Clinic we have been focusing on treating auto accident injury victims in Greensboro for nearly 40 years and are leaders in the field.`, `GET HELP TODAY!`
    ], [`BACK PAIN`, `By holistically identifying the causes of back and neck pain as well as providing beneficial adjustments, we are able to truly provide long-term and sustainable relief. At Cobb Chiropractic Clinic we have been the experts in treating Back Pain for nearly 40 years in the Greensboro area.`, `GET HELP TODAY!`], [`SLIP & FALLS`, `We have seen and treated patients that have experienced Slip and Fall Injuries that have impacted their lives for more than 40 years. If you were hurt in a Slip and Fall schedule an appointment with our Chiropractors now.`, `GET HELP TODAY!`], [`WORK INJURIES`, `Cobb Chiropractic Clinic has treated Workers' Compensation Injuries in North Carolina for nearly 40 years. We will provide Accurate Documentation of your Injuries, Treatment Solutions for your Pain and refer you to the best Personal Injury Attorneys in Greensboro that won’t charge astronomical fees.`, `GET HELP TODAY!`], [`SPORTS INJURIES`, `At Cobb Chiropractic Clinic we have treated all ages and types of athletes in Greensboro and the surrounding area that have suffered Sports Injuries with state of the art Physical Rehabilitation and Chiropractic Adjustment Techniques. Let's get you out of pain and back on the field or court in no time!`, `GET HELP TODAY!`]] },
    {title2:`How Chiropractic Care Can Help You`,
     text: [`How Chiropractic Care Can Help You`, `If you have never visited a chiropractor, Greensboro NC patients can attest, you have been missing out. Our chiropractic office delivers expert services to help you enjoy optimal health. A misalignment in your body can cause neck pain, shoulder pain, acute low back pain, migraines and more. Chiropractic treatment looks at the cause of the problem and treats the cause.`, `Regular chiropractic adjustments are not just about making the pain disappear. They are about improving your nervous system naturally, without the use of drugs or surgery.`, `Chiropractic treatment is considered an alternative medicine approach. We do not depend on pharmaceutical interventions to treat our patients. We use an integrative approach that can include massage therapy, spinal manipulation, spinal adjustment, neck manipulation, and more.`, `When you are suffering from an injury, pain or other health problem, an experienced chiropractor can provide you with the relief and stability you need to reach optimum health and peak performance levels. Wellness is not a destination, but a way of life that takes constant management and upkeep. Chiropractic care is a natural solution to common health problems that helps to restore and maintain your health and wellbeing. Whether low back pain, carpal tunnel, or other aches and pains, We can help you with quality care`]  }
]




function Home(props){
    const Navigate = useNavigate()


    return(
        <>
        <div className="photo_banner_holder">
            <Banner />
            <div className="photo_holder photo_banner2 changing_effect"></div>
            <div className="photo_holder photo_banner3 changing_effect"></div>
        </div>
        <GoodCare />
        <div className="word_banner"></div>
        <InfoSection info={data} formInfo='' />
        </>
    )
    
}


export default Home