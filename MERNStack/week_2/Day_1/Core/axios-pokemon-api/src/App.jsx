import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [axiosPokemon, setAxiosPokemon] = useState([])
  const axiosAPI = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
    .then(response => {
      console.log("AXIOS RESPONSE :", response.data.results)
      setAxiosPokemon(response.data.results)
    })
    .catch(error=> console.log("AXIOS ERROR:", error))
  }

  return (
    <>
    <fieldset>
      <legend><h2>Pokemon API</h2></legend>
    <button id="btn" onClick={axiosAPI}>Fetch API</button>

    {axiosPokemon.map((pokemon,idx)=> <li key={idx}>{pokemon.name}</li>)}
    </fieldset>
    </>
  )
}

export default App
