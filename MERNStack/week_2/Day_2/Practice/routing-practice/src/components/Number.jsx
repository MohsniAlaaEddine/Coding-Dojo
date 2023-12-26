import React from 'react'
import { useParams } from 'react-router-dom'
const Number = () => {
const{ id }=useParams();
  return (
    <div>
      {isNaN({id})?(<h2>The word is : {id}</h2>):(<h2>The number is : {id}</h2>)}
      </div>
  )

}



export default Number