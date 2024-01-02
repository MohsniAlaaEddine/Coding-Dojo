import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie,deleteMovie }) => {
    return (
        <div class="card movie-card shadow-lg rounded" >
            <img class="card-img-top mt-3 rounded" src={movie.image} alt="Card image cap"/>
                <div class="card-body d-flex flex-column gap-2">
                    <div className='d-flex justify-content-between'>
                    <h5 class="card-title "><strong>{movie.title}</strong></h5>
                    <h6 class="card-title ">{movie.releaseYear}</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                    <Link class="btn btn-warning" to={`/movies/${movie._id}/edit`}>Update</Link>
                    <Link class="btn btn-danger" onClick={()=>deleteMovie(movie._id)}>Delete</Link>
                    </div>
                </div>
        </div>)
}

export default MovieCard