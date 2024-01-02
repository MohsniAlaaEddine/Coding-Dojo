import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
const Home = (props) => {
    const [movies, setMovies] = useState([])
    const deleteMovie =(id) =>{
        axios.delete(`http://localhost:8000/api/movies/${id}`)
        .then(response => {
            console.log(response)
            const filtredMovies =movies.filter(movie=> movie._id != id)
            setMovies(filtredMovies)
        })
        .catch(error => console.log(error))
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/movies')
            .then(response => {
                // console.log('SERVER RESPONSE', response);
                console.log('MOVIES LIST', response.data.data);
                setMovies(response.data.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <div className='container p-3'>
            <div className="row gap-4">
                {movies.map(movie => <MovieCard movie={movie} key={movie._id} deleteMovie={deleteMovie}/>)}
            </div>

        </div>
    )
}

export default Home