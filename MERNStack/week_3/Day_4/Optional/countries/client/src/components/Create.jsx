import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Create = () => {
    const [newCountry, setNewCountry] = useState({ name: '', flag: '', independent: false })
    
    const navigate = useNavigate()
    const [countryError, setCountryError] = useState({ name: '', flag: '' })
    const createCountry = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/country', newCountry)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
                let tempErrors = {}
                for (let key of Object.keys(error.response.data)) {
                    console.log(key, '------------', error.response.data[key]);
                    tempErrors[key] = error.response.data[key].message
                }
                setCountryError({ countryError, ...tempErrors })
            })

    }
    return (

        <form className='container col-6 p-3' onSubmit={(e) => createCountry(e)}>
            <div className='d-flex flex-column'>
                <label className='form-label'>Name :</label>
                <input className='form-control w-25' type="text" onChange={e => setNewCountry({ ...newCountry, name: e.target.value })} value={newCountry.name} />
                <span className='h4 text-danger'>{countryError.name && countryError.name}</span>
            </div>
            <div className='d-flex flex-column'>
                <label className='form-label'>Flag :</label>
                <input className='form-control' type="text" onChange={e => setNewCountry({ ...newCountry, flag: e.target.value })} value={newCountry.flag} />
                <span className='h4 text-danger'>{countryError.flag && countryError.flag}</span>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Independent ?</label>
                <input className='ms-1' type="checkbox" onChange={e => setNewCountry({ ...newCountry, independent: !newCountry.independent })} checked={newCountry.independent} />
            </div>

            <div className='d-flex justify-content-between'>
                <button className='btn btn-primary'>Submit</button>
                <button className='btn btn-secondary' onClick={() => navigate('/')}>Cancel</button>
            </div>
        </form>

    )
}

export default Create