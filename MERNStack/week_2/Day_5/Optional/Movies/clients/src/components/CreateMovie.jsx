import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
const CreateMovie = (props) => {
    const navigate=useNavigate()
    const[newMovie,setNewMovie]=useState({title:"",releaseYear:1800,image:"",sceen:false})
    const createMovie = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/movies',newMovie)
        .then(response =>{
            console.log(response);
            navigate('/home')
        })
        .catch(error =>console.log(error))
    }
    return (
        <div>
            <form onSubmit={(e)=>createMovie(e)}>
                <div className="d-flex ">
                    <div className="col-4 p-5">
                        <div className="form-group mb-3">
                            <label htmlFor="">Title :</label>
                            <input type="text" className='form-control' onChange={(e)=>setNewMovie({...newMovie,title:e.target.value})} value={newMovie
                            .title}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Release Year :</label>
                            <input type="text" className='form-control' onChange={(e)=>setNewMovie({...newMovie,releaseYear:e.target.value})} value={newMovie
                            .releaseYear} />
                        </div>
                        <div className="form-group mt-3 d-flex gap-2 ">
                            <label htmlFor="">Seen :</label>
                            <input type="checkbox" className='form-check-input' onChange={(e)=>setNewMovie({...newMovie,sceen:!newMovie.sceen})} checked={newMovie
                            .sceen} />
                        </div>
                    </div>
                    <div className="col-7 d-flex flex-column gap-3 p-5">
                        <div className="form-group">
                            <label htmlFor="">Image :</label>
                            <input type="text" className='form-control' onChange={(e)=>setNewMovie({...newMovie,image:e.target.value})} value={newMovie
                            .image}/>
                        </div>
                        <button className='btn btn-success col-2'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateMovie