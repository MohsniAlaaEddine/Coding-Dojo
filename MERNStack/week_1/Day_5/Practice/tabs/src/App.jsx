import { useState} from 'react'

function App() {
  const buttons = [
    { name: "Tab 1", content: 'Tab 1 content is showing here' }, 
    { name: "Tab 2", content:'Tab 2 content is showing here' },
    { name: "Tab 3", content:'Tab 3 content is showing here' }]

    const [pressedButtonContent,setPressedButtonContent]= useState(null);
  return (
    <>
    <fieldset>
        <legend>Tabs</legend>
        <fieldset>
      <legend>Button</legend>
      {buttons.map((button, idx) => <button onClick ={()=>{setPressedButtonContent(button.content)}} key={idx}>{button.name}</button>)}

    </fieldset>
    <fieldset>
      <legend> Hello </legend>
      <p> {pressedButtonContent}</p>
    </fieldset>
      </fieldset>
      </>
  ) 
}

export default App
