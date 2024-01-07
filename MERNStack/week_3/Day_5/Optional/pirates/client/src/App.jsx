import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import ShowOne from './components/ShowOne'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/pirates'} />} />
        <Route path='/pirates' element={<Home/>} />
        <Route path='/pirates/new' element={<Create />} /> 
        <Route path='/pirates/:id' element={<ShowOne />} /> 
      </Routes>
    </>
  )
}

export default App