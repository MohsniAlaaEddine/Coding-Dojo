import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CreateMovie = (props) => {
    const navigate = useNavigate();

    const [newMovie, setNewMovie] = useState({
        title: '',
        image: [], // Change from 'image' to 'images' to store multiple pictures
        releaseYear: 1800,
        seen: false,
    });
    // console.log(newMovie.image)
    const createMovie = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', newMovie.title);
        for (let i = 0; i < newMovie.image.length; i++) {
            formData.append('files', newMovie.image[i]);
        }
        formData.append('releaseYear', newMovie.releaseYear);
        formData.append('seen', newMovie.seen);

        axios
            .post('http://localhost:8000/api/movies/new', formData)
            .then((response) => {
                console.log(response);
                navigate('/home');
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <form onSubmit={(e) => createMovie(e)}>
                <div className="d-flex ">
                    <div className="col-4 p-5">
                        <div className="form-group mb-3">
                            <label htmlFor="">Title :</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                                value={newMovie.title}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Release Year :</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setNewMovie({ ...newMovie, releaseYear: e.target.value })}
                                value={newMovie.releaseYear}
                            />
                        </div>
                        <div className="form-group mt-3 d-flex gap-2 ">
                            <label htmlFor="">Seen :</label>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                onChange={(e) => setNewMovie({ ...newMovie, seen: !newMovie.seen })}
                                checked={newMovie.seen}
                            />
                        </div>
                    </div>
                    <div className="col-7 d-flex flex-column gap-3 p-5">
                        <div className="form-group">
                            <label htmlFor="">Image :</label>
                            <div>
                                <input
                                    type="file"
                                    multiple
                                    onChange={(e) => setNewMovie({ ...newMovie, image: e.target.files })}
                                />
                            </div>
                        </div>
                        <button className="btn btn-success col-2">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateMovie;
