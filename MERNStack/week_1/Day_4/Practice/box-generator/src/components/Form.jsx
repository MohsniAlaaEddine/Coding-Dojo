import React,{useState} from 'react'
import Display from './Display';
const Form = () => {
const [color,setColor]=useState("");
const [colorBox,setColorBox]=useState([])
const addColor = (e) => {
  e.preventDefault()
  console.log(color);
  setColorBox([...colorBox,color])
  setColor("");
}
  return (
    <fieldset>
      <legend>Box Generator</legend>
      <form onSubmit={(e)=> addColor(e)}>
        <input type="text" onChange={(e)=> setColor(e.target.value)} value={color}/>
        <button >Add</button>
      </form>
      {colorBox.map((color, idx) => <Display key={idx} color={color}/>)}
    </fieldset>


  )
}

export default Form