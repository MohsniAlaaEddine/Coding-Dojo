import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Display = (props) => {
    const [categories, setCategories] = useState({ name: "" })
    const navigate = useNavigate()

    const { categorie, id } = useParams();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${categorie}/${id}`)
            .then(response => {
                console.log(response.data)
                setCategories(response.data)
            })
            .catch(error => {
                console.log(error)
                navigate('/error')
            })
    }, [id])
    return (
        <div>
            {(categorie) && 
            <div>
                {(categorie === "planets") && <div className="card shadow-lg border border-dark" >
                    <div className="card-body">
                        <h1 className="card-title">{categories.name}</h1>
                        <p className="card-text h4">Climate :  {categories.climate}</p>
                        <p className="card-text h4">Terrain  : {categories.terrain}</p>
                        <p className="card-text h4">Surface Water: {`${categories.surface_water}` > 0 ? <p>true</p> : <p>false</p>}</p>
                        <p className="card-text h4">Population  : {categories.population}</p>
                    </div>
                </div>}
                {(categorie === "people") && <div className="card shadow-lg border border-dark" >
                    <div className="card-body">
                        <h1 className="card-title">{categories.name}</h1>
                        <p className="card-text h4">Height :  {categories.height}</p>
                        <p className="card-text h4">Mass  : {categories.mass}</p>
                        <p className="card-text h4">Hair Color  : {categories.hair_color}</p>
                        <p className="card-text h4">Skin Color  : {categories.skin_color}</p>
                    </div> </div>}
            </div>}
        </div>
    )
            }
export default Display