import React from "react";
import Banner1 from "./Banner1"
import InfoSection from "./InfoSection";


let data = [
    {text:[`At our Accident Injury Center in Marietta GA, our chiropractors focus on treating injuries to the musculoskeletal system.
    Whether you are suffering from chronic pain or an injury caused in an accident, our chiropractic doctors can get to the root of the problem.
    We will diagnose your condition and begin treating the injury at the source. It is our goal to eliminate your pain and alleviate your injury symptoms fast. 
    We utilize a wide variety of treatment techniques, as to provide the best quality services to our patients. 
    Below are the accident injuries and pain symptoms that our chiropractors specialize in treating at Pro Healthcare.`]},
    {title2:`Neck Pain`, text:[`Neck pain is one of the most common conditions that our chiropractors treat. It can be caused by a whiplash injury sustained in an auto accident, or another trauma to the cervical spine.
    When soft-tissues become strained or stretched beyond their normal range, individuals could suffer from severe pain and soreness until the injury is treated by a chiropractor. 
    `]},
    {title2:`Back Pain`, text:[`Back pain is an extremely common condition that many people suffer from. It is typically caused by an injury to a soft-tissue or a one of the vertebrae in the spinal column.
    These injuries can result from lifting a heavy object, poor posture, a bad mattress, arthritis, or lack of exercise.`]},
    {title2:`Scoliosis`, text:[`Scoliosis is the sideways curvature of the spine. Although not completely curable, chiropractors can reduce pain symptoms and treat the condition with regular adjustments.`]},
    {title2:`Sports Injuries`, text:[`Sports Injuries can be caused by an acute trauma, or repetitive stress. Regardless of how your condition was caused, our chiropractic injury clinic can help treat your injury, reduce your pain, and help you regain full function in the injured area.`]},
    {title2:`Work Place Accident`, text:[`Unsafe working environments, lack of training, or the careless actions of another employee can cause serious on the job injuries. If you have been hurt and want to receive workers' compensation, you need to seek treatment fast.`]},
    {title2:`Auto Accidents`, text:[`Victims who are involved in any type of motor vehicle accident typically suffer injuries. Soft-tissue injuries, like Whiplash, are most common, but other injuries including concussion, fractures, bruising and lacerations are also very common in wrecks.`]},
    {title2:`Slip and Fall Injury`, text:[`Slip and fall injuries can be caused by negligence or just chance, but many different injuries and pain symptoms can result. If you or a loved one has slipped, tripped or fallen due to a slippery, icy, uneven, or an altogether hazardous surface, our chiropractors can help.`]},
    {title2:`Whiplash`, text:[`A whiplash injury is most commonly caused by a car accident. Victims who are suffering from a whiplash injury should seek treatment before permanent damage is done. Whiplash is a serious injury to the neck that is caused by a hyper-extension that strains the soft-tissues neck meant to stabilize and support the head.`]},
    {title2:`Soft-Tissue Injuries`, text:[`Your soft-tissues are made up of muscles, nerves, ligaments, and tendons. When these tissues become damaged, the injury is typically not visible, but pain symptoms will become more severe over time.`]},
    {title2:`Sciatica`, text:[`Sciatic Nerve Pain is a painful condition typically stemming from a compressed nerve in the spine. Serious cases can cause severe radiating pain from the lower back to one or both legs. `]},
    {title2:`Carpal Tunnel Syndrome`, text:[`Carpal tunnel syndrome is a painful condition in the wrist caused by repetitive stress. Our chiropractic doctors can help treat this type of injury and diminish your pain symptoms.`]},
    {title2:`Herniated or Slipped Disc`, text:[`Discs in the spinal column separate the spinal vertebrae, or bones that make up the spinal column. Herniated or Slipped Discs can cause pinched nerves, which result in severe pain symptoms. A chiropractor can help correct this condition and alleviate pain and suffering. `]},
    {title2:`Migraines and Headaches`, text:[`Migraines and headaches can be a symptom of any type of accident or injury. If you are suffering from a subluxation in the spine, it can negatively affect other areas of the body, causing head aches and pains. Your chiropractor can properly realign your spine treat these symptoms with adjustments.`]},
    {title2:`Nerve Damage`, text:[`Nerve damage is usually caused by a compressed or slipped disc in the spinal column. This condition is caused by traumas, like car accidents, or can result just from a physical life style. Chiropractors can help treat this condition and reduce pain while preventing the need for surgery.`]},
]

let image = 'https://images.unsplash.com/photo-1597764690523-15bea4c581c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'


function Injuries(){




    return(
    <>
    <Banner1  image={image} text1={'Injuries'}/>
    <InfoSection info={data}/>
    
    </>)
}

export default Injuries