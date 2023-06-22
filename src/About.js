import React from "react";
import Banner1 from "./Banner1"
import About_Us from "./About_Us";
import About_Us2 from "./About_Us2";

function About(props){

let brenda = {title:'Brenda Velez, Front Office Manager', text:'Brenda is a highly skilled and dedicated professional who serves as Front Office Manager.  With fluency in both English and Spanish, she effortlessly bridges communication gaps, fosters a welcoming environment for patients from various cultural backgrounds. Brenda’s education background includes a Bachelor’s degree in Psychology, aiding her to create a warm and inviting atmosphere, ensuring that every guest feels valued and comfortable.  In her spare time, Brenda enjoys spending time with her family and exploring new places!'}
let danteJr = {title:'Dante Gurgigno, JR, Rehab Therapist', text:`Dante Gurgigno Jr is a dedicated and compassionate healthcare professional who goes above and beyond to provide exceptional care for his patients. With a genuine passion for helping others, Dante has made it his mission to ensure the well-being and comfort of each individual he serves. He believes in treating patients as unique individuals, considering their specific needs, concerns, and goals. Dante takes the time to listen attentively, building a strong professional relationship with his patients based on trust, empathy, and respect. He firmly believes that patient education is an essential component of healthcare, empowering individuals to make informed decisions about their well-being. Dante also enjoys sports such as weightlifting, football, and basketball. Dante played football since 5th grade and played all four years at Lassiter high school. Look up and you might see Dante soaring the skies from a young age Dante's fascination with airplanes and the dream of flight captured his imagination. He pursued his passion by earning his pilot's license at the earliest opportunity and hasn't looked back since. Fueled by his enthusiasm and an unwavering desire to take to the skies, he embarked on countless hours of training, honing his skills and building his knowledge base.`}
let assistants = {title:'Vinny Gurgigno, Nathan Kashani, Laila Kashani, Assistant Rehab Therapists', text: 'Vinny, Nathan and Laila Kashani are all in school furthering their education and work at Pro Healthcare of Marietta part time.  All of them love helping patients and seeing the results of Rehab Therapy.'}
let slogan = `Here at Pro Healthcare of Marietta, we are family.`



    return(
        <>
        {/* <h2>About</h2> */}
        <Banner1 text1={'About Us'} image='https://images.unsplash.com/photo-1473042904451-00171c69419d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1499&q=80'/>
        <About_Us />
        <div style={{width:'100vw', justifyContent:'center', display:'flex' }}>
        <span style={{background:'rgba(0,0,0,.4)', width:'100%', height:'2px', maxWidth:'1100px', display:'block'}}></span>
        </div>
        <About_Us2 title={brenda.title} text={brenda.text}/>
        <div style={{width:'100vw', justifyContent:'center', display:'flex' }}>
        <span style={{background:'rgba(0,0,0,.4)', width:'100%', height:'2px', maxWidth:'1100px', display:'block'}}></span>
        </div>
        <About_Us2 title={danteJr.title} text={danteJr.text}/>
        <div style={{width:'100vw', justifyContent:'center', display:'flex' }}>
        <span style={{background:'rgba(0,0,0,.4)', width:'100%', height:'2px', maxWidth:'1100px', display:'block'}}></span>
        </div>
        <About_Us2 title={assistants.title} text={assistants.text}/>
        <About_Us2 title={slogan}/>
        <div style={{width:'100vw', justifyContent:'center', display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'20px' }}>
            <p>Pictured: (Left to Right) <br />
 Vincent Gurgigno, Dante Gurgigno, Jr., Dr. Dante Gurgigno, Dr. Sam Kashani, Laila Kashani, Brenda Velez and Nathan Kashani</p>
            <img id='twotwo' style={{}} alt="Staff Photo" src="https://lh4.googleusercontent.com/Vk1ZuXG7p_XDiu0_Sfo5xmRE8yKupiggon8Isg8min8wUdzFlR4KMBLLe0r1nQhw0jQFrOqQBKFm07f1qsfqyTuXLO6No2jscfMqfIYZ7Uep6OVa3wo8RjG7rluPaTcPVWAus9v0T3JWKYN1T6ZM5Uw"/>
        </div>
        </>
    )
}


export default About