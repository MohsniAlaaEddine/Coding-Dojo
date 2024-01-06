import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Home = () => {
    const [countries, setCountries] = useState([])
    const navigate = useNavigate();
    useEffect(() => {

        axios.get('http://localhost:8000/api/country')
            .then(res => {
                console.log('🎆🎆🎆🎆🎆', res.data.country);
                setCountries(res.data.country)
            })
            .catch(err => console.log(err))
    }, [])
    const deleteObj = (id) => {
        axios.delete(`http://localhost:8000/api/country/${id}`)
            .then(res => { setCountries(countries.filter(country => country._id !== id)) })
            .catch(error => console.log(error))
    }
    return (
        <>
            <div className='p-4'>

                <table className='table table-sm table-bordered'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Flag</th>
                            <th>Independent</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map(country => (
                            <tr key={country._id}>
                                <td>
                                    <Link to={`/country/${country._id}`}>{country.name}</Link>
                                </td>
                                <td>
                                    <img src={country.flag} height={50} />
                                </td>
                                <td>
                                    {country.independent ? 'Yes' : 'No'}
                                </td>
                                <td className='d-flex gap-3'>
                                    <button className='btn btn-warning' onClick={() => navigate(`/country/${country._id}/edit`)}>Edit</button>
                                    <button className='btn btn-danger ' onClick={() => deleteObj(country._id)}>Delete</button>

                                </td>
                            </tr>


                        ))}
                    </tbody>

                </table >
            </div>
        </>
    )
}

export default Home