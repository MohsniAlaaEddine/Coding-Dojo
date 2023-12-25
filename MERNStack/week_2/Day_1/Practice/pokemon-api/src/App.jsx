import { useState } from 'react'
import './App.css'

function App() {
  const [fetchPokemon, setFetchPokemon] = useState([])

  const fetchAPI = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(response => {
        console.log("RESPONSE :", response);
        return response.json()
      })
      .then(response => {
        console.log("FETCH API RESPONSE AS JSON : ", response)
        setFetchPokemon(response.results)
      })
      .catch(error => console.log("FETCH API ERROR :", error))
  }

  return (
    <>
    <fieldset>
      <legend><h2>Pokemon API</h2></legend>
    <button id="btn" onClick={fetchAPI}>Fetch API</button>

    {fetchPokemon.map((pokemon,idx)=> <li key={idx}>{pokemon.name}</li>)}
  
    </fieldset>
    </>
  )
}

export default App
