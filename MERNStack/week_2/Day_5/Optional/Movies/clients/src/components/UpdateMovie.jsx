import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
const UpdateMovie = (props) => {
    const [movieToUpdate,setMovieToUpdate]=useState({})
    const navigate=useNavigate()
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/movies/${id}`)
        .then(response => {
            console.log(response)
            setMovieToUpdate(response.data.data)
        })
        .catch(error => console.log(error))
    },[id])
    const update =(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/movies/${id}`,movieToUpdate)
        .then(response => {
            console.log(response);
            navigate('/home')
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <form onSubmit={(e) => update(e)}>
                <div className="d-flex ">
                    <div className="col-4 p-5">
                        <div className="form-group mb-3">
                            <label htmlFor="">Title :</label>
                            <input type="text" className='form-control' onChange={(e) => setMovieToUpdate({ ...movieToUpdate, title: e.target.value })} value={movieToUpdate
                                .title} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Release Year :</label>
                            <input type="text" className='form-control' onChange={(e) => setMovieToUpdate({ ...movieToUpdate, releaseYear: e.target.value })} value={movieToUpdate
                                .releaseYear} />
                        </div>
                        <div className="form-group mt-3 d-flex gap-2 ">
                            <label htmlFor="">Seen :</label>
                            <input type="checkbox" className='form-check-input' onChange={(e) => setMovieToUpdate({ ...movieToUpdate, sceen: !movieToUpdate.sceen })} checked={movieToUpdate
                                .sceen} />
                        </div>
                    </div>
                    <div className="col-7 d-flex flex-column gap-3 p-5">
                        <div className="form-group">
                            <label htmlFor="">Image :</label>
                            <input type="text" className='form-control' onChange={(e) => setMovieToUpdate({ ...movieToUpdate, image: e.target.value })} value={movieToUpdate
                                .image} />
                        </div>
                        <div>
                            <img className='rounded' src={movieToUpdate.image}style={{widht:'300px', height:'400px'}}/>
                        </div>
                        <button className='btn btn-success col-2'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdateMovie