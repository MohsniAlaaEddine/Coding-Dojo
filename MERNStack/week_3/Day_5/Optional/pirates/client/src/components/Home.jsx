import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import PirateCard from './PirateCard'
const Home = () => {
    const [pirates, setPirates] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res => {
                console.log('pirates List', res.data.pirates);
                setPirates(res.data.pirates)
            })
            .catch(error => console.log(error))
    }, [])
    const deletePirate = (id) => {
        axios.delete(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                console.log(res)
                const filtredPirates = pirates.filter(pirate => pirate._id != id)
                setPirates(filtredPirates)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className='d-flex '>
                <h1 className='text-center w-100 p-2'>Pirate Crew</h1>
                <div className='text-end p-2 flex-shrink-1'>
                <Link className='btn btn-primary ' to={`/pirates/new`}>Add Pirate</Link>
                </div>
            </div>
            <div className='container p-3'>
                <div className="row">
                    {pirates.map(pirate => <PirateCard pirate={pirate} key={pirate._id} deletePirate={deletePirate} />)}
                </div>
            </div>
        </div>
    )
}

export default Home