import React from 'react'
const PersonCard = (props) => {
    // Destructuring
    const { person } = props
    return (
        <div>
            <h1>{person.lastname},{person.firstname}</h1>
            <h2>Age : {person.age}</h2>
            <h2>Favorite Food : {person.haircolor}</h2>
        </div>
    )
}
export default PersonCard