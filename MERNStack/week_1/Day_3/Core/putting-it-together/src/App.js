
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const people = [
    {firstname:"Jane", lastname:"Doe", age:45, haircolor:"Black"}, 
    {firstname:"John", lastname:"Smith", age:88, haircolor:"Brown"}];
  return (
    <div className='App'>
      {people.map((person,idx)=><PersonCard key={idx} person={person}/>)}
    </div>
  );
}

export default App;
