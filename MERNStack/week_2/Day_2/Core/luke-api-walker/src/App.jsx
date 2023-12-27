import { useState } from 'react'
import {Routes,Route} from "react-router-dom"
import Form from './components/Form'
import Display from './components/Display'
import Error from './components/Error'
import './App.css'

function App() {
  

  return (
    <>
    <Form/>
    <Routes>
      <Route path='/:categorie/:id' element={<Display/>}/>
      <Route path='/error' element={<Error/>}/>




    </Routes>

    </>
  )
}

export default App
