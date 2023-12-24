import { useState } from 'react'
import PlansComponents from './components/PlansComponents'
import './App.css'
import FormComponent from './components/FormComponent'

function App() {
  const [plans, setPlans] = useState([{ content: "wak up 7am", status: false },
    { content: "break fast", status: true }])
  const addPlan = (newPlan) => {
    setPlans([...plans, newPlan])
  }

  // ----------UPDATE---------------

  const updatePlan=(index)=>{ 
    console.log('index of plan',index);
    const plansUpdated=[...plans]
    plansUpdated[index].status = !plans[index].status
    setPlans(plansUpdated);
  }

  // ----------DELETE--------------

  const deletePlan=(index)=>{
    console.log('delete',index);
    const filteredPlans = plans.filter((plan,idx)=>idx!=index)
    setPlans(filteredPlans)
    
  }

  return (
    <>
      <h1>Add plans for today</h1>
      <FormComponent addPlan={addPlan} />
      <PlansComponents plans={plans} updatePlan={updatePlan} deletePlan={deletePlan}/>
    </>
  )
}

export default App
