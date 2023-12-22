import React, { useState } from 'react'
import Display from './Display'


const Form = () => {
    const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
    return (
        <div className='App'>
            <form>
                <label>First Name </label>
                <input type="text" onChange={(e) => setUser({ ...user, firstName: e.target.value })} value={user.firstName} />
                <hr />
                <label>Last Name </label>
                <input type="text" onChange={(e) => setUser({ ...user, lastName: e.target.value })} value={user.lastName} />
                <hr />
                <label>Email </label>
                <input type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} />
                <hr />
                <label>Password </label>
                <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} />
                <hr />
                <label>Confirm Password </label>
                <input type="password" onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} value={user.confirmPassword} />
            </form>
            <Display user={user} />
        </div>
    )
}

export default Form