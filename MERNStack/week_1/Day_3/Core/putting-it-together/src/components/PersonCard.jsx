import React,{useState} from 'react'
const PersonCard = ({person}) => {
    
    const [age, setAge] = useState(person.age)
    const increaseAge =()=>{
        setAge(age +1)
    }
    return (
        <div>
            <h1>{person.lastname},{person.firstname}</h1>
            <h2>Age : {age}</h2>
            <h2>Favorite Food : {person.haircolor}</h2>
            <button onClick={()=> increaseAge()}>Birthday Button for {person.firstname} {person.lastname}</button>
            <br />
        </div>
    )
}
export default PersonCard