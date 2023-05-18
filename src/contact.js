import React, { useEffect } from "react";



function Contact(props){
let {piForm} = props

useEffect(() => {

if(!piForm){
let pIF = document.createElement('script')
pIF.setAttribute('charet', 'utf-8')
pIF.setAttribute('src', 'https://cdn.reviewwave.com/js/reviewwave.js')
pIF.setAttribute('data-id', '73049497bca83fd949ff90ffcaedbb8e82ae')
document.getElementById('piFormHolder').append(pIF)
// console.log(document.getElementById('piFormHolder').children.length)
}else{
    console.log(piForm)
document.getElementById('piFormHolder').append(piForm)
// console.log(document.getElementById('piFormHolder').children.length)/
}



}, [])


    return(
        <>
        
        <div id="piFormHolder" className="doctor_info">

        </div>
        </>
    )
}

export default Contact