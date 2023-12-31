import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import ShowOne from './components/ShowOne'
import Edit from './components/Edit'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/country/new' element={<Create/>}></Route>
        <Route path='/country/:id' element={<ShowOne/>}></Route>
        <Route path='/country/:id/edit' element={<Edit/>}></Route>



      </Routes>
    </>
  )
}

export default App
