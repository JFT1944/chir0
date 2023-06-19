import React, { useState } from "react";
import Banner1 from "./Banner1"
import SubmitForm from "./SubmitForm";
import InfoSection from "./InfoSection";
import { useNavigate } from "react-router-dom";


function Contact(){
    let navigate = useNavigate()
    let image = "https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    
    const [formData, getFormData] = useState({
        firstName: '', 
        lastName: '', 
        email:'',
        phone:'',
        tArea:''
    })

function updateForm(evt){
    evt.preventDefault()
    const {name, value} = evt.target;
    getFormData(data => ({
        ...data,
        [name]: value
    }))
}

function submitHandler(e){
    e.preventDefault()
    console.log(formData)





navigate('/')
}


    return(
    <>
    <Banner1 image={image} text1='Contact Us'/>
    <div style={{width:'100vw', display:'flex', justifyContent:'center'}}>
    <div className="contact_page_holder">
        <div>
        <div className="">
                <span style={{display:'flex', flexDirection:"column", margin:'50px 0'}}>
                    <h1>Contact Info</h1>
                    <span style={{display:'flex', flexDirection:"column", margin:0}}>
                    <p><b>Address:</b> 3208 Canton Rd Suite 112,<br /> Marietta, GA 30066</p>
                    <p><b>Phone:</b> (770) 800-2070</p>
                    <p><b>Days:</b> Monday - Friday</p>
                    <p><b>Hours:</b> 9 AM – 1 PM, 3:30 – 7 PM</p>
                    </span>
                    
                    </span>
                </div>
        </div>
        <div className="c_form">
            <form>
                <span>
                    <h3>First Name:</h3>
                    <input type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={(e) => updateForm(e)}></input></span>
                <span>
                    <h3>Last Name:</h3>
                    <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={(e) => updateForm(e)}></input></span>
                <span>
                    <h3>Email:</h3>
                    <input type="email" placeholder="Email" name="email" value={formData.email} onChange={(e) => updateForm(e)}></input></span>
                <span>
                    <h3>Phone:</h3>
                    <input type="phone" placeholder="Phone" name="phone" onChange={(e) => updateForm(e)}></input></span>
                <span>
                    <h3>Your Message Here:</h3>
                    <textarea placeholder="Type Your Message Here" name="tArea" onChange={(e) => updateForm(e)}></textarea></span>
                <span><input type="submit" onClick={(e) => submitHandler(e)}></input></span>
            </form>
        </div>
    </div>
    </div>
    
    </>)
}

export default Contact