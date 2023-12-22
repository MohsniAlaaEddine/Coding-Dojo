import React from 'react'


const Display = (props) => {
    return (
        <fieldset>
            <legend>Display</legend>
            <p><strong>First Name: </strong>{props.user.firstName}</p>
            <p><strong>Last Name: </strong>{props.user.lastName}</p>
            <p><strong>Email: </strong>{props.user.email}</p>
            <p><strong>Password: </strong> password</p>
            <p><strong>Confirm Password: </strong>Password</p>
        </fieldset>
    )
}

export default Display