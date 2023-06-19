import React from "react";

function SubmitForm(props){
let {text} = props

console.log(text)

    return (
        <>
            <form>
                <h2 className="form_h">{'Complimentary New Patient Consultation'}</h2>
                <input type="text" placeholder="First Name"></input>
                <input type="text" placeholder="Last Name"></input>
                <input type="email" placeholder="Email Address"></input>
                <input type="Phone Number" placeholder="Phone Number"></input>
                <select >
                    <option value={''}>Help Us Better Understand Your Situation</option>
                    <option value={`Accident Victim and won't need an attorney`}>Accident Victim and won't need an attorney</option>
                    <option value={'Accident Victim and will need an attorney'}>Accident Victim and will need an attorney</option>
                    <option value={'Need to see a Chiropractor, no accident'}>Need to see a Chiropractor, no accident</option>
                </select>
                <span>Day and Time</span>
                <textarea placeholder="Please let us know your preferred Date and Time"></textarea>
                <span>How did you find us?</span>
                <select >
                    <option value={'facebook'}>Facebook</option>
                    <option value={'instagram'}>Instagram</option>
                    <option value={'google maps'}>Google Maps</option>
                </select>
                <textarea placeholder="Additional Info"></textarea>
                <input type="submit"></input>
                
                
            </form>
        </>
    )
}

export default SubmitForm