import React from 'react'

const Button = (props) => {
  const{buttons}=props

  return (
    <fieldset>
        <legend>Button</legend>
        {buttons.map((button,idx)=> <button key={idx} >{button.name}</button>)}
    </fieldset>
  )
}  

export default Button