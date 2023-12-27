import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Form = () => {
  const navigate = useNavigate();
  const [categorie, setCategorie] = useState("planets")
  const [id,setId]=useState(0)
  const searchCategorie = (e) => {
    e.preventDefault()
    console.log("categorie :", categorie);
    navigate(`/${categorie}/${id}`)
  }
  return (
    <div>
      <form className=' d-flex gap-2 align-items-center container border border-dark shadow-lg p-2 rounded' onSubmit={(e)=> searchCategorie(e)}>
        <label htmlFor=""><strong>Search for :</strong></label>
        <select name="categorie" id="" onChange={(e)=>{setCategorie(e.target.value)}} className='p-1'>
          <option value="planets">Planets</option>
          <option value="people">People</option>
        </select>
        <label htmlFor=""><strong>ID :</strong></label> <input className='p-1' type="number" onChange={(e)=>{setId(e.target.value)}} />
        <button className='btn btn-secondary'>Search</button>
      </form>
    </div>
  )
}

export default Form