import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns';

const ShowOne = () => {
    const [note, setNote] = useState({ title: '', content: '', isImportant: false })
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/notes/${id}`)
            .then(res => {
                console.log(res.data.oneNote)
                setNote(res.data.oneNote)
            }
            )
            .catch(error => console.log(error))
    }, [id])
    return (
        <div className='container p-3'>
            <div className="card">
                <h5 className="card-header">{note.isImportant && "📌"} {note.title}</h5>
                <div className="card-body d-flex flex-column gap-3">
                    <p className="card-text">{note.content}</p>
                    <p className="card-text">{note.createdAt}</p>
                </div>
            </div>
        </div>
    )
}

export default ShowOne