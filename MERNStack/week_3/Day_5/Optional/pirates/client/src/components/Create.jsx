import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'

const Create = () => {
    const [newPirate, setNewPirate] = useState({ name: '', image: '', chest: '', phrase: '', position: '', leg: true, eye: true, hand: true })
    const [pirateError, setPirateError] = useState({ name: '', image: '', chest: '', phrase: '', position: '' })
    const navigate = useNavigate()
    const createPirate = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/pirates', newPirate)
            .then(res => {
                console.log(res.data);
                navigate(`/pirates/${res.data.data._id}`)
            })
            .catch(error => {
                console.log(error)
                let tempErrors = {}
                for (let key of Object.keys(error.response.data)) {
                    console.log(key, '------------', error.response.data[key]);
                    tempErrors[key] = error.response.data[key].message
                }
                setPirateError({ pirateError, ...tempErrors })
            })

    }
    return (
        <>
            <div className='d-flex '>
                <h1 className='text-center w-100 p-2'>Add Pirate</h1>
                <div className='text-end p-2 flex-shrink-1'>
                <Link className='btn btn-primary ' to={`/pirates`}>Crew Board</Link>
                </div>
            </div>
            <form className='container p-5 d-flex justify-content-around ' onSubmit={(e) => createPirate(e)}>
                <div className='col-5'>
                    <div className="mb-3 ">
                        <label className="form-label">Name: </label>
                        <input type="text" className="form-control w-50" onChange={(e) => setNewPirate({ ...newPirate, name: e.target.value })} value={newPirate.name} />
                        <span className='h4 text-danger'>{pirateError.name && pirateError.name}</span>
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label">Image Url: </label>
                        <input type="text" className="form-control w-50" onChange={(e) => setNewPirate({ ...newPirate, image: e.target.value })} value={newPirate.image} />
                        <span className='h4 text-danger'>{pirateError.image && pirateError.image}</span>
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label"># of Treasure Chessts: </label>
                        <input type="number" className="form-control w-50" onChange={(e) => setNewPirate({ ...newPirate, chest: e.target.value })} value={newPirate.chest} />
                        <span className='h4 text-danger'>{pirateError.chest && pirateError.chest}</span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Pirate Catch Phrases :</label>
                        <textarea className="form-control" cols="7" rows="3" onChange={(e) => setNewPirate({ ...newPirate, phrase: e.target.value })} value={newPirate.phrase} />
                        <span className='h4 text-danger'>{pirateError.content && pirateError.content}</span>
                    </div>
                </div>
                <div className="col-5 d-flex flex-column gap-5">
                    <div>
                        <select class="form-select" aria-label="Default select example" onChange={(e) => setNewPirate({ ...newPirate, position: e.target.value })} value={newPirate.position}>
                            <option selected>Open this select menu</option>
                            <option value="1">Captain</option>
                            <option value="2">First Mate</option>
                            <option value="3">Quarter Master</option>
                            <option value="4">Boatswain</option>
                            <option value="5">Powder Monkey</option>
                        </select>
                        <span className='h4 text-danger'>{pirateError.position && pirateError.position}</span>
                    </div>

                    <div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" onChange={(e) => setNewPirate({ ...newPirate, leg: !newPirate.leg })} checked={newPirate.leg} />
                            <label className="form-check-label" >Peg Leg</label>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" onChange={(e) => setNewPirate({ ...newPirate, eye: !newPirate.eye })} checked={newPirate.eye} />
                            <label className="form-check-label" >Eye Patch</label>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" onChange={(e) => setNewPirate({ ...newPirate, hand: !newPirate.hand })} checked={newPirate.hand} />
                            <label className="form-check-label" >Hook Hand</label>
                        </div>
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </form>

        </>
    )
}
export default Create