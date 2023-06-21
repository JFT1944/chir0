import React from "react";
import Banner1 from "./Banner1"
import InfoSection from "./InfoSection";


let data=[
    {title1:`Quality Chiropractors in Cobb, Cherokee and Fulton Counties.`, text:[`Pro Healthcare Rehab is a quality-driven and affordable local chiropractor in Marietta, GA. We specialize in effective pain relief by using scientific evidence and the most advanced chiropractic techniques and methods. Our chiropractors treat the underlying causes of discomfort from neck pain, back pain, shoulder pain, and more. If you suffer from pain due to personal injuries including auto accidents, Pro Healthcare Rehab can help.`]},
    {title2:`We Are The Expert Chiropractors Near You`, text:[`Our comprehensive practice provides chiropractic and natural healing services to the Cobb, Cherokee and Surrounding counties. Our team of experts focus on improving the health of each patient and providing custom care for those who live in constant pain, have diminished balance, suffer from injuries or other recurring health issues.
    `, `Chiropractic care is a natural solution to many common health problems that helps restore and maintain your health and well-being. We take a hands-on approach to healing, bypassing costly and time-consuming medications and surgeries that may be ineffective. Pro Healthcare Rehab provides chiropractic adjustments for relief and stability to reach optimum health and peak performance levels.`]},
    {title2:`Pro Healthcare Is The Best In Marietta`, text:[`We understand you entrust your health and body in the hands of healthcare professionals you visit. Our experienced chiropractors have years of proven experience providing quality, non-invasive care that has resolved pain and health issues for countless people. Many of our patients are referred to us regularly from family members, friends, and coworkers because our level of care speaks for itself.`]},
    {title2:`All of our locations have the Right Research Credentials`, text:[`As a local chiropractor, we understand how important licensure is. Not only do we have plenty of referrals, but we also have the credentials to back them up. Pro Healthcare Rehab has the proper credentials demonstrating we have the necessary chiropractic education, training, skills and experience to provide top-notch chiropractic care.`, `Never entrust your health and well-being to an unqualified chiropractic practitioner especially if they have instances of malpractice claims or disciplinary actions. At Pro Healthcare Rehab, we have successfully been treating patients collectively for over 23 years. Our expert doctors and staff have all the credentials, chiropractor schooling, and history making them the best and most affordable North Georgia chiropractors near you. We aim to give you the best care to help you heal.`]},
    {title2:`Our Chiropractors Have Proven Experience`, text:[`Depending on your aches or pain, you need a chiropractor who is experienced with that exact type of injury. The more experience a chiropractor has with a condition or procedure, the better your results are likely to be. Our chiropractors use natural treatment techniques to help repair soft tissue damage and focus on the spinal column which controls nearly every bodily function. We practice instrument-assisted and manual adjustment techniques for spinal realignment to restore optimum functionality.`, `If your spine is out of alignment, it may cause pain symptoms elsewhere in the body. Pro Healthcare Rehab seeks first to understand your injury and symptoms, take digital X-rays and perform other tests to evaluate spinal health, then design a personalized treatment plan tailored to your needs. Our all-natural and safe practices repair damage at the source to eliminate pain. We prefer to treat the source instead of temporarily masking your pain with harmful pain medications.`, `Experience matters when facing extreme health issues and concerns from motor vehicle-related accident injuries. Our chiropractic clinics in Marietta, Georgia specialize in helping victims who have become injured in a personal injury accident. Our doctors have seen and treated nearly every injury possibly caused by a personal injury accident, including whiplash, soft-tissue injuries, sprains, strains, bruises, lacerations, fractures, breaks, migraines, headaches, concussions, and more.`]},
    {title2:`Pro Healthcare’s High Quality Care`, text:[`Some chiropractors are affiliated with other healthcare or community professionals, such as legal advisors, orthopedic doctors, neurologists, pain management, and other healthcare providers.`, `Our chiropractic clinic partners with many medical doctors and legal attorneys to give you the best comprehensive care possible. Pro Healthcare Rehab works to make sure every aspect of your injury has been addressed from the pain itself to the legal representation you deserve.    By working with the medical and legal community, we have the unique ability to coordinate your care in the way that best serves you.`]},
    {title2:`We Value Straightforward Communication`, text:[`When you work with us, you work with a chiropractor you feel comfortable communicating with before, during, and after your chiropractic care. Each time you meet with your Pro Healthcare doctor, including your initial consultation, we take the time to answer your questions in an easily understandable way. We take an interest in getting to know you and your treatment preferences and respect your decision-making process.`, `When scheduling an appointment with the experienced professionals at Pro Healthcare Rehab, new patients should expect to have all needs understood and met. We address any questions you have before, during, and after your initial chiropractic consultation, and maintain that level of care throughout your entire health and wellness treatment plan. While talking to the chiropractic doctors, you will be able to go over every detail of your accident or injury, the pain symptoms you are experiencing, and the cause of any injuries you are suffering from. We truly strive to listen to all your health concerns while demonstrating compassion and understanding in every element of your care.`, `Pro Healthcare Rehab offers free injury consultations to victims suffering from injuries due to personal injury accidents or are dealing with other pain symptoms.`]},
]

let image = `https://i.imgur.com/1hrHQWY.png
`

function Chiropractic(){




    return(
    <>
    <Banner1 image={image} text1={'Chiropractic'}/>
    <InfoSection info={data}/>
    
    </>)
}

export default Chiropractic