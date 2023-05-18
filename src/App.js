import React, {useEffect, useState} from 'react'
// import { BrowserRouter } from 'react-router-dom';
import ChiroPage from './ChiroPage';

import './App.css';

function App() {
  let [patientForm, setPatientForm] = useState()
  let [piForm, setPiForm] = useState()

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
// *******************************
try {
  let pIForm = document.getElementById('pi-form')

  setPiForm(pIForm)
  pIForm.remove()


} catch (error) {
  console.log(error)
}






}, [])


  return (
    
    <div className="App">
      <ChiroPage patientForm={patientForm} setPatientForm={setPatientForm} piForm={piForm}/>
    </div>
  );
}

export default App;
