import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './components/Home'
import Create from "./components/Create";
import Edit from "./components/Edit";

import './App.css'

function App() {

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Navigate to={'/products'} />} />
        <Route path='/products' element={<Home />} />
        {/* <Route path='/products/:id' element={<Show />} /> */}
        <Route path='/products/:id/edit' element={<Edit />} />


      </Routes>
    </div>

  )
}

export default App