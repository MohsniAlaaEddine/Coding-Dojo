import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PirateCard = ({ pirate, deletePirate }) => {
    const navigate = useNavigate()
    return (
        <div className="card d-flex flex-row">
            <div className=''>
                <img src={pirate.image} />
            </div>
            <div className='d-flex flex-column gap-3'>
                <h3 className="text-center text-light" onClick={() => navigate(`/pirates/${pirate._id}`)}>{pirate.name}</h3>
                <div className="d-flex gap-2">
                    <Link className='btn btn-primary' to={`/pirates/${pirate._id}`}>View Pirate</Link>
                    <Link className='btn btn-danger ms-3' onClick={() => deletePirate(pirate._id)}>Delete</Link>
                </div>
            </div>
        </div>
    )
}

export default PirateCard