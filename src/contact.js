import React, { useEffect } from "react";



function Contact(props){
let {piForm} = props

useEffect(() => {

// if(!piForm){
// let pIF = document.createElement('script')
// pIF.setAttribute('charet', 'utf-8')
// pIF.setAttribute('src', 'https://cdn.reviewwave.com/js/reviewwave.js')
// pIF.setAttribute('data-id', '73049497bca83fd949ff90ffcaedbb8e82ae')
// document.getElementById('piFormHolder').prepend(pIF)
// // console.log(document.getElementById('piFormHolder').children.length)
// }else{
//     console.log(piForm)
// document.getElementById('piFormHolder').prepend(piForm)
// // console.log(document.getElementById('piFormHolder').children.length)/
// }



}, [])


    return(
        <>
        
        <div id="piFormHolder" className="doctor_info">
        <iframe style={{width:'100%', border:'none', height:'900px'}} title="patient_form" src="../pIForm.html" />
        
        
        {/* <h2>If form is unavailable... Please reload page. </h2> */}
        </div>
        </>
    )
}

export default Contact