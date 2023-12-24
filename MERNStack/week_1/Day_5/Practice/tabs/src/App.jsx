import Display from './components/Display'
import Button from './components/Button'
import { useState} from 'react'

function App() {
  const [buttons, setButton] = useState([
    { name: "Tab 1", content: 'Tab 1 content is showing here' }, 
    { name: "Tab 2", content:'Tab 2 content is showing here' },
    { name: "Tab 3", content:'Tab 3 content is showing here' }])

  return (
    <fieldset>
      <legend>Tabs</legend>
      <Button  buttons={buttons}/>
      <Display buttons={buttons}/>
    </fieldset>
  ) 
}

export default App
