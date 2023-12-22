import React,{useState} from 'react'
import Display from './Display';

const Form = () => {
const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
  return (
    <div>
        <form>
        <label>First Name: </label>
        <input type="text" onChange={(e) => setUser({...user,firstName:e.target.value})} value={user.firstName}  />
        {user.firstName.length<2?<p style={{color:'red'}}>First Name must be at least 2 characters</p>:''}
        <hr />
        <label>Last Name</label>
        <input type="text" onChange={(e)=>setUser({...user,lastName:e.target.value})} value={user.lastName}/>
        {user.lastName.length<2?<p style={{color:'red'}}>Last Name must be at least 2 characters</p>:''}
        <hr />
        <label>email: </label>
        <input type="email" onChange={(e) => setUser({...user,email:e.target.value})} value={user.email}  />
        {user.email.length<2?<p style={{color:'red'}}>email must be at least 2 characters</p>:''}
        <hr />
        <label>Password: </label>
        <input type="password" onChange={(e) => setUser({...user,password:e.target.value})} value={user.password}  />
        {user.password.length<2?<p style={{color:'red'}}>Password must be at least 8 characters</p>:''}
        {(user.password)!=(user.confirmPassword)?<p style={{color:'red'}}>Password must match</p>:''}
        <hr />
        <label>Confirm Password: </label>
        <input type="password" onChange={(e) => setUser({...user,confirmPassword:e.target.value})} value={user.confirmPassword}  />
        <hr />
        </form>
        <Display user={user}/>
    </div>
  )
}

export default Form