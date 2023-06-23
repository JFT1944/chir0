import React from "react";

function Footer(){

    let logo = 'https://i.imgur.com/36lHey7.png'


    return(
        <>
        <div className="footer_holder">
            <div className="footer">
                <div className="footer_item">
                    <img style={{width:'300px'}}src={logo} alt="Pro Healthcare Logo"/>
                </div>
                <div className="footer_item">
                <iframe style={{width:'300px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26452.337579382387!2d-84.52743967965368!3d34.02996034610472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f515b35a991777%3A0x7f2e0c903a30380b!2sPro%20Healthcare%20of%20Marietta!5e0!3m2!1sen!2sus!4v1686621607327!5m2!1sen!2sus" ></iframe>
                </div>
                <div className="footer_item">
                <span style={{display:'flex', flexDirection:"column"}}>
                    <h1>Contact Info</h1>
                    <span style={{display:'flex', flexDirection:"column", margin:0}}>
                    <p><b>Address:</b> 3208 Canton Rd Suite 112,<br /> Marietta, GA 30066</p>
                    <p><b>Phone:</b> (770) 800-2070</p>
                    <p><b>Days:</b> Monday - Friday</p>
                    <p><b>Hours:</b> 9 AM – 1 PM, 3:30 – 7 PM</p>
                    </span>
                    </span>
                </div>
                <div className="footer_item"></div>
            </div>
        </div>
        </>
    )
}

export default Footer