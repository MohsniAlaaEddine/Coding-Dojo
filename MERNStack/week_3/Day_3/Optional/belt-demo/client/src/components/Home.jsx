import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NoteCard from './NoteCard'
const Home = () => {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/notes')
            .then(res => {
                console.log('Notes List',res.data.notes);
                setNotes(res.data.notes)
            })
            .catch(error=>console.log(error))
    },[])
    const deleteNote=(id)=>{
        axios.delete(`http://localhost:8000/api/notes/${id}`)
        .then(res=>{
            console.log(res)
            const filtredNotes=notes.filter(note=>note._id !=id)
            setNotes(filtredNotes)
        })
        .catch(error=>console.log(error))
    }
    return (
        <div className='container p-3'>
            <div className="row">
                {notes.map(note=><NoteCard note={note} key={note._id} deleteNote={deleteNote}/>)}
            </div>
        </div>
    )
}

export default Home