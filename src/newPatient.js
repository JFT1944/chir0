import React from "react";

function NewPatient(){





    return(
        <>
        <div className="form-holder-holder">
            <div className="form-holder doctor_info">
            <h2>About This Patient</h2>
        <form>
            
            <input type={'text'} placeholder='First Name' required/> 
            <input type={'text'} placeholder='Last Name' required/> 
            <input type={'text'} placeholder='Street Address' required/> 
            <input type={'text'} placeholder='City' required/> 
            <input type={'text'} placeholder='State' required/> 
            <input type={'text'} placeholder='Zip Code' required/> 
            <input type={'text'} placeholder='Phone' required/> 
            <input type={'text'} placeholder='Birthday' required/> 
            <input type={'text'} placeholder='Gender' required/> 
            <input type={'text'} placeholder='Email' required/> 
            <input style={{background:'rgba(145, 199, 147, 50%)'}} type={'submit'}/>
        </form>
            </div>
        </div>
        </>
    )
}


export default NewPatient