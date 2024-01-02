import {Routes,Route,Navigate} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import CreateMovie from './components/CreateMovie'
import UpdateMovie from './components/UpdateMovie'



function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'}/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/movies/new' element={<CreateMovie/>}/>
        <Route path='/movies/:id/edit' element={<UpdateMovie/>}/>

      </Routes>
      
    </>
  )
}

export default App
