import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Create = () => {
    const [name, setName] = useState('')
    const [flag, setFlag] = useState('')
    const [independent, setIndependent] = useState(false)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const onSubmitHandle = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/country', { name, flag, independent })
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(error => {
                const errorResponse = error.response.data.errors
                setErrors(errorResponse)
            })

    }
    return (
        <div>
            <form className='container' onSubmit={onSubmitHandle}>
                <label className='form-label'>Name :</label><input className='form-control' type="text" onChange={e => setName(e.target.value)} value={name} />
                {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                <label className='form-label'>Flag :</label><input type="text" onChange={e => setFlag(e.target.value)} value={flag} />
                <label className='form-label'>Independent ?</label><input type="checkbok" onChange={e => setFlag(e.target.checked)} checked={independent} />
            </form>
            <div className='d-flex justify-content-between'>
                <button className='btn btn-primary'>Submit</button>
                <button className='btn btn-secondary' onClick={() => navigate('/')}>Cancel</button>

            </div>
        </div>
    )
}

export default Create