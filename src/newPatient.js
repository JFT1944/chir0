import React from "react";

function NewPatient(){

function formSubmit(e){
e.preventDefault(e)
console.log(e.target.form)
for (let i of e.target.form){
    // console.log(i.placeholder)
    // console.log(i.value)
    console.log(`${i.placeholder}: ${i.value}`)
}
}



    return(
        <>
        <div className="form-holder-holder">
            <div className="form-holder doctor_info">
        <form>
            <h2>Tell Us About Yourself</h2>
            
            <input type={'text'} placeholder='First Name' name='fName' required/> 
            <input type={'text'} placeholder='Last Name' required/> 
            <input type={'text'} placeholder='Street Address' required/> 
            <input type={'text'} placeholder='City' required/> 
            <input type={'text'} placeholder='State' required/> 
            <input type={'text'} placeholder='Zip Code' required/> 
            <input type={'text'} placeholder='Phone' required/> 
            <input type={'text'} placeholder='Birthday' required/> 
            <input type={'text'} placeholder='Gender' required/> 
            <input type={'email'} placeholder='Email' required/> 
            <br />
            <br />
            <br />
            <h2>Reason For This Visit</h2>
            <input type={'text'} placeholder='Is this pain to:' required/> 
            <input style={{background:'rgba(145, 199, 147, 50%)'}} type={'submit'} onClick={(e) => formSubmit(e)}/>
        </form>
            </div>
        </div>
        </>
    )
}


export default NewPatient