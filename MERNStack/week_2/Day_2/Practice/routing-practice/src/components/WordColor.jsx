import React from 'react'
import { useParams } from 'react-router-dom'
const WordColor = () => {
  const { id, color1,color2 } = useParams()
  return (
    <div style={{backgroundColor:`${color1}`, color:`${color2}`}}><h2>The word is : {id} </h2> </div>
  )
}

export default WordColor