import React, {useEffect, useState} from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'
import DR from './dr'
import Home from './home'
import NewPatient from './newPatient'
import MNav from './MNav'
import Services from './services'
import Contact from './contact'
import About from './About'
import Footer from './Footer'
import Injuries from './Injuries'
import Chiropractic from './Chiropractic'
import AutoAccidents from './AutoAccidents'
import Medical from './Medical'
import Attorney from './Attorney'



function ChiroPage(props){
//  console.log('top component')
 let {patientForm, setPatientForm, piForm} = props


// useEffect(() =>{
//     console.log('chirp')
// let pForm = document.getElementById('pant-form')
// console.log(pForm)
// setPatientForm(pForm)
// pForm.remove()
// console.log(patientForm)




// }, [])


console.log(patientForm)
    return(
    
    
    <>
    <BrowserRouter>
        <NavBar />
        <Routes >
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/injuries' element={<Injuries />}/>
            <Route path='/chiropractic' element={<Chiropractic />}/>
            <Route path='/auto-accidents' element={<AutoAccidents />}/>
            <Route path='/medical' element={<Medical />}/>
            <Route path='/attorney' element={<Attorney />}/>
            <Route path='/contact-us' element={<Contact />}/>
            {/* <Route path='/:name' element={''}/>
            <Route path='/mobile-nav' element={''}/> */}
            {/* <Route path='/sam' element={'sam'}/>
            <Route path='/dante' element={'dante'}/> */}
            {/* <Route path='/services' element={''}/>
            <Route path='/new-patient' element={''}/>
            <Route path='/personal-injury' element={''}/> */}
    
        </Routes>
        <Footer />
    
    </BrowserRouter>
    </>
    )
}


export default ChiroPage