import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'


const ShowOne = () => {
    const [pirate, setPirate] = useState({ name: '', image: '', chest: '', phrase: '', position: '', leg: true, eye: true, hand: true })
    const { id } = useParams()
    const [activeLeg, setActiveLeg] = useState(false);
    const [activeEye, setActiveEye] = useState(false);
    const [activeHand, setActiveHand] = useState(false);

    const handleClickLeg = () => {
        setActiveLeg(!activeLeg);
    }
    const handleClickEye = () => {
        setActiveEye(!activeEye);
    }
    const handleClickHand = () => {
        setActiveHand(!activeHand);
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                console.log(res.data.onePirate)
                setPirate(res.data.onePirate)
            }
            )
            .catch(error => console.log(error))
    }, [id])
    return (
        <div className='container p-3 mt-5' style={{ backgroundColor: '#A68A64' }}>
            <h1 className="text-center bg-dark text-light" >{pirate.name}</h1>
            <div className="d-flex justify-content-around p-5">
                <div className="d-flex flex-column col-4 gap-4">
                    <img src={pirate.image} />
                    <h3 className="card-text">"{pirate.phrase}"</h3>
                </div>
                <div className="bg-light w-25 p-3">
                    <p className="">Position: {pirate.position}</p>
                    <p className="">Treasures: {pirate.chest}</p>
                    <p className="">Peg Leg:  <button className='' onClick={handleClickLeg}
        style={{ backgroundColor: activeLeg ? "green" : "red" }}>{pirate.leg == activeLeg ? 'Yes' : 'No'}</button></p>
                    <p className="">Eye Patch:  <button  onClick={handleClickEye}
        style={{ backgroundColor: !activeEye ? "green" : "red" }}>{pirate.eye == true ? 'Yes' : 'No'}</button></p>
                    <p className="">Hook Hand:  <button onClick={handleClickHand}
        style={{ backgroundColor: activeHand ? "green" : "red" }}>{pirate.hand == activeHand ? 'Yes' : 'No'}</button></p>

                </div>
            </div>
        </div>
    )
}

export default ShowOne