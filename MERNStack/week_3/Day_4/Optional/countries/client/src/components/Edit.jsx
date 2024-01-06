import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const Edit = () => {
    const [country, setCountry] = useState({ name: '', flag: '', independent: false })
    const navigate = useNavigate()
    const { id } = useParams()
    const [countryError, setErrors] = useState({name:'',flag:''})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/country/${id}`)
            .then(res => {
                console.log(res.data.oneCountry);
                setCountry(res.data.oneCountry)
            })
            .catch(error => console.log(error))
    }, [id])
    const editCountry = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/country/${id}`, country)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err=>{
                console.log(err.response.data);
                setErrors(err.response.data)
            }) 

    }
    return (

        <form className='container col-6 p-3 d-flex flex-column gap-3' onSubmit={(e) => editCountry(e)}>
            <div className='d-flex flex-column'>
                <label className='form-label'>Name :</label>
                <input className='form-control w-25' type="text" onChange={e => setCountry({ ...country, name: e.target.value })} value={country.name} />
                {countryError.name && (<h4 className='text-danger'>{countryError.name.message}</h4>)}
            </div>
            <div className='d-flex flex-column'>
                <label className='form-label'>Flag :</label>
                <input className='form-control' type="text" onChange={e => setCountry({ ...country, flag: e.target.value })} value={country.flag} />
                {countryError.flag && (<h4 className='text-danger'>{countryError.flag.message}</h4>)}
            </div>
            <div className='mb-3'>
                <label className='form-label'>Independent ?</label>
                <input className='ms-1' type="checkbox" onChange={e => setCountry({ ...country, independent: !country.independent })} checked={country.independent} />
            </div>

            <div className='d-flex justify-content-between'>
                <button className='btn btn-primary'>Submit</button>
                <button className='btn btn-secondary' onClick={() => navigate('/')}>Cancel</button>
            </div>
        </form>

    )
}

export default Edit