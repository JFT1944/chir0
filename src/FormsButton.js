import React, { useState } from "react";
import { NavLink } from "react-router-dom";



function FormsButton(props){

let image = 'https://lh6.googleusercontent.com/kkYr_-sL155mfcX89TLtK5tuD80TvsCPK3cNkUXKS3F5vDzce4vg7NuYarfD7E8Bsvet68lL8sKcIUTovDi6-uFfxgKLlIzk2-9cpvi7VFtQUjZ1lcJUqS6ir2wpUgIhcVgre_aKUpF2TXDAmuOOCN4'
let {formNav, setFormNav} = props

function openForms(e){
    e.preventDefault()
    console.log('clicked')
    console.log(formNav)
   return (!formNav ? setFormNav(true) : setFormNav(false))

}






if(!formNav){
    return(
        <>
        <div className="form_button" onClick={(e) => openForms(e)}>
            <img alt="Patient Form Dropdown" src={image} />

        </div>
        </>
    )
} else {
   return(
    <>
    <div className="form_button formButton_add" onClick={(e) => openForms(e)}>
        {/* <img alt="Patient Form Dropdown" src={image} /> */}
        <h2 style={{position:'absolute', top:0}}>Patient Portal</h2>
        <span style={{backgroundColor:'white', height: '2px', width:'80%', position: 'absolute', top: '67px'}}></span>
        <ul style={{position:'absolute', top: '60px', transform: 'translate(-10px, 10px)'}}>
        <li><NavLink exact to='patient-form'>Patient Form</NavLink> </li>
        <hr />
        <li><NavLink exact to='patient-form-spanish'>Formulario del paciente</NavLink> </li>
        <hr />
        <li><NavLink exact to='patient-form-portuguese'>Formulário do Paciente</NavLink></li>
        <hr />
        <li><NavLink exact to='personal-injury'>Personal Injury Form</NavLink></li>
        <hr />
        <li><NavLink exact to='personal-injury-spanish'>Formulario de lesiones personales</NavLink></li>
        <hr />
        <li><NavLink exact to='personal-injury-portuguese'>Formulário de Danos Pessoais</NavLink></li>
        <hr />
        <li><NavLink exact to='pi-contract'>Personal Injury Contract and Authorization</NavLink></li>
        <hr />
        <li><NavLink exact to='contact-us'>General Questions</NavLink></li>
        </ul>
    </div>
    </>
   )
}
}


export default FormsButton