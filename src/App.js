import React, {useEffect, useState} from 'react'
// import { BrowserRouter } from 'react-router-dom';
import ChiroPage from './ChiroPage';

import './App.css';

function App() {
  let [patientForm, setPatientForm] = useState()

  useEffect(() =>{
    try {
      console.log('chirp')
let pForm = document.getElementById('pant-form')
console.log(pForm)
setPatientForm(pForm)
localStorage.setItem('patientForm', JSON.stringify(pForm) )
pForm.remove()
console.log(patientForm)
    } catch (error) {
      console.log(error)
    }




}, [])


  return (
    
    <div className="App">
      <ChiroPage patientForm={patientForm} setPatientForm={setPatientForm}/>
    </div>
  );
}

export default App;
