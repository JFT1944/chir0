import React, { useState } from "react";

function SubmitForm(props){
let {text} = props

const [formData, getFormData] = useState({
    firstName: '', 
    lastName: '', 
    email:'',
    phone:'',
    bSit:'',
    pDateTime:'',
    hFind:'',
    eInfo:''

})

function updateForm(evt){
evt.preventDefault()
const {name, value} = evt.target;
getFormData(data => ({
    ...data,
    [name]: value
}))
}













function handleSubmit(e){
    e.preventDefault()
    
        if(formData.email.indexOf('@') === -1){
            alert('Incorrect Email')
            return
        }
        if(!parseInt(formData.phone)){
            alert('incorrect phone number /n should be: xxxxxxxxxx')
            return
        }
        if(!formData.eInfo){
            formData.eInfo = 'No Additional Info'
        }
        for (let y of Object.values(formData)){
            console.log(y)
            if(!y){
                alert('Missing Information, please fill out entire form')
                return
            }
    }







}
















console.log(text)

    return (
        <>
            <form>
                <h2 className="form_h">{'Complimentary New Patient Consultation'}</h2>
                <input type="text" name='firstName' placeholder="First Name" value={formData.firstName} onChange={(e) => updateForm(e)} required></input>
                <input type="text" name='lastName' placeholder="Last Name" value={formData.lastName} onChange={(e) => updateForm(e)} required></input>
                <input type="email" name='email'placeholder="Email Address" value={formData.email} onChange={(e) => updateForm(e)} required></input>
                <input type="tel" name='phone' placeholder="Phone Number" value={formData.phone} onChange={(e) => updateForm(e)} required></input>
                <select name='bSit' value={formData.firstName} onChange={(e) => updateForm(e)} required>
                    <option value={''}>Help Us Better Understand Your Situation</option>
                    <option value={`Accident Victim and won't need an attorney`}>Accident Victim and won't need an attorney</option>
                    <option value={'Accident Victim and will need an attorney'}>Accident Victim and will need an attorney</option>
                    <option value={'Need to see a Chiropractor, no accident'}>Need to see a Chiropractor, no accident</option>
                </select>
                <span>Day and Time</span>
                <textarea value={formData.pDateTime} onChange={(e) => updateForm(e)} name='pDateTime' placeholder="Please let us know your preferred Date and Time" required></textarea>
                <span>How did you find us?</span>
                <select name='hFind' value={formData.hFind} onChange={(e) => updateForm(e)} required>
                    <option value={'facebook'}>Facebook</option>
                    <option value={'instagram'}>Instagram</option>
                    <option value={'google maps'}>Google Maps</option>
                </select>
                <textarea value={formData.eInfo} onChange={(e) => updateForm(e)} name='eInfo' placeholder="Additional Info" required></textarea>
                <input type="submit" onClick={(e => handleSubmit(e))}></input>
                
                
            </form>
        </>
    )
}

export default SubmitForm