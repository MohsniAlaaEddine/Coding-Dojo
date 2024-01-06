import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import ShowOne from './components/ShowOne'
import Update from './components/Update'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'} />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/notes/new' element={<Create />} />
        <Route path='/notes/:id' element={<ShowOne />} />
        <Route path='/notes/:id/update' element={<Update/>} />
      </Routes>
    </>
  )
}

export default App
