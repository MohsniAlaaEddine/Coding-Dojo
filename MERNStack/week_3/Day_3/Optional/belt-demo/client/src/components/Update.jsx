import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
const Update = () => {
    const [noteToUpdate, setNoteToUpdate] = useState({title:'',content:'',isImportant:false})
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8000/api/notes/${id}`)
            .then(res => {
                console.log(res.data.oneNote);
                setNoteToUpdate(res.data.oneNote)
            })
            .catch(error => console.log(error))
    },[])
    const edit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/notes/${id}`,noteToUpdate)
            .then(res => {
                console.log(res)
                navigate('/home')
            })
            .catch(error => console.log(error))
    }
    return (
        <form onSubmit={(e) => edit(e)}>
            <div className="container p-3 col-6">
                <div className="mb-3 ">
                    <label className="form-label">Title :</label>
                    <input type="text" className="form-control w-50" onChange={(e) => setNoteToUpdate({ ...noteToUpdate, title: e.target.value })} value={noteToUpdate.title} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content :</label>
                    <textarea className="form-control" cols="7" rows="3" onChange={(e) => setNoteToUpdate({ ...noteToUpdate, content: e.target.value })} value={noteToUpdate.content} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" onChange={(e) => setNoteToUpdate({ ...noteToUpdate, isImportant: !noteToUpdate.isImportant })} checked={noteToUpdate.isImportant} />
                    <label className="form-check-label" >Important?</label>
                </div>
                <button className="btn btn-primary">Create</button>
            </div>
        </form>
    )
}

export default Update