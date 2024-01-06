import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const NoteCard = ({ note,deleteNote }) => {
    const navigate=useNavigate()
    return (
        <div className="card">
            <h5 className="card-header" onClick={()=>navigate(`/notes/${note._id}`)}>{note.isImportant&&"📌"} {note.title}</h5>
            <div className="card-body">
                <p className="card-text">{note.content}</p>
                <div className="text-end">
                    <Link className='btn btn-warning' to={`/notes/${note._id}/update`}>Edit</Link>
                    <Link className='btn btn-danger ms-3' onClick={()=>deleteNote(note._id)}>Delete</Link>
                </div>
            </div>
        </div>
    )
}

export default NoteCard