import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Home = () => {
    const [countries, setCountries] = useState([])
    const navigate=useNavigate();
    useEffect(() => {
        
        axios.get('http://localhost:8000/api/country')
            .then(res => {
                setCountries(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    const deleteObj=(id)=>{
        axios.delete(`http://localhost:8000/api/country/${id}`)
        .then(res=> {setCountries(countries.filter(country=>country._id !== id))})
        .catch(error=> console.log(error))
    }
    return (
        <>
            <div>Countris List</div>
            <Link to="/country/new" className='btn btn-primary mb-3'>New Country</Link>
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
                                {country.independent?'Yes':'No'}
                            </td>
                            <td>
                                <button className='btn-primary' onClick={()=>navigate(`/country/edit/${country._id}`)}>Edit</button>
                                <button className='btn-danger' onClick={()=>deleteObj(country._id)}>Delete</button>

                            </td>
                        </tr>


                    ))}
                </tbody>

            </table >
        </>
    )
}

export default Home