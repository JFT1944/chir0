import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'
import DR from './dr'
import Home from './home'



function ChiroPage(){




    return(
    
    
    <>
    <BrowserRouter>
        <NavBar />
        <Routes >
            <Route path='/' element={<Home />}/>
            <Route path='/:name' element={<DR />}/>
            {/* <Route path='/sam' element={'sam'}/>
            <Route path='/dante' element={'dante'}/> */}
            <Route path='/services' element={'services'}/>
            <Route path='/new-patient' element={'New Patient'}/>
            <Route path='/contact' element={'Contact'}/>
    
        </Routes>
    
    
    </BrowserRouter>
    </>
    )
}


export default ChiroPage