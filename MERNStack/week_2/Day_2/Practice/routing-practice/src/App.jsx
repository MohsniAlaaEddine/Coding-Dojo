import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './components/Home'
import Number from './components/Number'

import WordColor from './components/WordColor'

import './App.css'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Navigate to={'/home'}/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:id' element={<Number/>}/>   
        
        <Route path='/:id/:color1/:color2' element={<WordColor/>}/>

      </Routes>

  )
}

export default App
