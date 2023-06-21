import React, { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Banner from './Banner'
import InfoSection from "./InfoSection";
import GoodCare from "./GoodCare";


const data = [
    {title1:'Why Choose Pro Healthcare Rehab?',
    text: ['Specializing in neck, shoulder, back pain and other work or sports-related injuries, Pro Healthcare Rehab provides quality and affordable chiropractic care. Our office, treats a wide range of ailments and injuries. We deliver expert care that helps you to find the relief you need, and quickly get back on your feet, utilizing the most advanced chiropractic techniques and methods available today. We treat the underlying cause of your discomfort to ensure you have an abundance of health, vitality and wellness.', 'Pro Healthcare Rehab is a comprehensive chiropractic practice that provides services to the Cobb, Cherokee and the surrounding counties. Our team of experts focus on improving the health of each patient by providing custom care for those who live in constant pain, have diminished balance, injuries, or recurring health issues.']
    },
    {title2:'Our Services Help Those Who Have:',
     text: [['CAR / TRUCK ACCIDENT INJURIES'],[`HEADACHES/MIGRAINES`],[`SCIATICA`], ['SCOLIOSIS'], ['WHIPLASH'], [`SLIP & FALLS`], [`WORK INJURIES`], [`SPORTS INJURIES`], ['PREGNANCY'], ['VERTIGO']] },
    {title2:`How Chiropractic Care Can Help You?`,
     text: [`If you have never visited a chiropractor, our patients can attest, you have been missing out. Our chiropractic office delivers expert services to help you enjoy optimal health. A misalignment in your body can cause neck pain, shoulder pain, acute low back pain, migraines and more. Chiropractic treatment looks at the cause of the problem and treats the cause.`, `Regular chiropractic adjustments are not just about making the pain disappear. They are about improving your nervous system naturally, without the use of drugs or surgery.`, `Chiropractic treatment is considered an alternative medicine approach. We do not depend on pharmaceutical interventions to treat our patients. We use an integrative approach that can include rehab therapy, spinal manipulation, spinal adjustment, neck manipulation, and more.`, `When you are suffering from an injury, pain or other health problem, an experienced chiropractor can provide you with the relief and stability you need to reach optimum health and peak performance levels. Wellness is not a destination, but a way of life that takes constant management and upkeep. Chiropractic care is a natural solution to common health problems that helps to restore and maintain your health and wellbeing. Whether low back pain, carpal tunnel, or other aches and pains, we can help you with quality care.`]  }
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