import React, { useEffect, useRef, useState } from "react";
import {useLocation, Navigate} from 'react-router-dom'

function NewSPatient(props){
// let [patientForm, setPaitentForm] = useState()
let {pForm, setPForm, patientForm} = props
let [form, setForm] = useState('')

    
console.log({pForm, setPForm})
// let patientForm = useRef()
    // console.log(this.props.loc)

    useEffect(() => {
        // patientForm.current = ''
        
        // console.log({patientForm:patientForm})
        // if(!patientForm){
        //     console.log('first')
        // //  navigate('/')
        // // document.querySelector('#patient-form').append('Form Error')
        // let newSCR = document.createElement('script')
        // newSCR.setAttribute('charSet', 'utf-8')
        // newSCR.setAttribute('src', 'https://cdn.reviewwave.com/js/reviewwave.js')
        // newSCR.setAttribute('data-id', '730486218c737f42429eaf7b9c955d9556d0')
        // document.querySelector('#patient-form').append(newSCR)
        
        // } else{
        //     console.log('second')
        //     // console.log(patientForm.classList.remove('delete'))
        //     document.querySelector('#patient-form').append(patientForm)
        // }
        
        // // console.log({newSCR:newSCR})
        // // patientForm.current = newSCR
        
        // // console.log({form:form})
        // // if(!form){
        // // setForm(document.getElementById('patient-form'))}
        // // console.log(patientForm.current.children)


        // // if(document.getElementById('patient-form').children.length > 1){
        // // if(!form){
        // // patientForm.current = document.getElementById('patient-form')}
        // // // }
        // // setForm(true)
        
    
    
    }, [])
// useEffect(() =>{
// //     console.log(document.getElementById('patient-form').childNodes)
// // setForm(document.getElementById('patient-form'))
// }, [])

// console.log(patientForm.current)


// function formSubmit(e){
// e.preventDefault(e)


// console.log(form)

return(
    <>
    
    <div id="piFormHolder" className="doctor_info">
    <iframe style={{width:'100%', border:'none', height:'900px'}} title="patient_form" src="../patientSForm.html" />
    
    
    {/* <h2>If form is unavailable... Please reload page. </h2> */}
    </div>
    </>)

    // if (form){
    //     return(
    //         <>
    //         {console.log('second')}
    //         <div id='patient-form' className="doctor_info" style={{justifyContent:'center'}}>
    //             {/* <h1>Please reload page for</h1> */}
    //         </div>
    //         </>
    //     )
    // }else{
    //     return(
    //         <><div id='patient-form' className="doctor_info" data-id="730486218c737f42429eaf7b9c955d9556d0" style={{justifyContent:'center'}}>
    //         {/* <script charset="utf-8" src="https://cdn.reviewwave.com/js/reviewwave.js" data-id="730486218c737f42429eaf7b9c955d9556d0"></script> */}
    //         </div></>)
    // }


   
}


export default NewSPatient