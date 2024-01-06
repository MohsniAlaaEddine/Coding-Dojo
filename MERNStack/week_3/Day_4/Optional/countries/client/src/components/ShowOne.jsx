import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ShowOne = () => {
    const [country, setCountry] = useState({name:'',flag:'',independent:false})
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:8000/api/country/${id}`)
            .then(res => {
                console.log(res.data.oneCountry);
                setCountry(res.data.oneCountry)
            })
            .catch(error => console.log(error))
    },[id])
    return (
        <div className='container mt-5'>
            <div className="card">
                <h3>{country.name}</h3>
                <hr />
                <div className="card-body">
                    <p>Name : {country.name}</p>
                    <p>Flag : <img src={country.flag} height={50} /> </p>
                    <p>Independent : {country.independent?'Yes':'NO'}</p>
                    <button className='btn btn-primary' onClick={()=>navigate(`/country/edit/${country._id}`)}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default ShowOne