import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = () => {
  const [newNote, setNewNote] = useState({ title: '', content: '', isImportant: false })
  const [noteError, setNoteError] = useState({ title: '', content: '' })
  const navigate = useNavigate()
  const createNote = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/notes', newNote)
      .then(res => {
        console.log(res.data);
        navigate(`/notes/${res.data.data._id}`)
      })
      .catch(error => {
        console.log(error)
        let tempErrors = {}
        for (let key of Object.keys(error.response.data)) {
          console.log(key, '------------', error.response.data[key]);
          tempErrors[key] = error.response.data[key].message
        }
        setNoteError({ noteError,...tempErrors })
      })

  }
  return (
    <form onSubmit={(e) => createNote(e)}>
      <div className="container p-3 col-6">
        <div className="mb-3 ">
          <label className="form-label">Title :</label>
          <input type="text" className="form-control w-50" onChange={(e) => setNewNote({ ...newNote, title: e.target.value })} value={newNote.title} />
          <span className='h4 text-danger'>{noteError.title && noteError.title}</span>
        </div>
        <div className="mb-3">
          <label className="form-label">Content :</label>
          <textarea className="form-control" cols="7" rows="3" onChange={(e) => setNewNote({ ...newNote, content: e.target.value })} value={newNote.content} />
          <span className='h4 text-danger'>{noteError.content && noteError.content}</span>

        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" onChange={(e) => setNewNote({ ...newNote, isImportant: !newNote.isImportant })} checked={newNote.isImportant} />
          <label className="form-check-label" >Important?</label>
        </div>
        <button className="btn btn-primary">Create</button>
      </div>
    </form>
  )
}

export default Create