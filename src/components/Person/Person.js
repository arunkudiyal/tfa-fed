import React from 'react'

const Person = ({ name, age, myClick, changed }) => {
    return (
        <div className="Person">
            <p onClick={myClick} className="lead">Hi, I am {name} and I am {age} years old</p>
            <input type="text" placeholder="Enter the name" onChange={changed} value={name} />
        </div>
    )
}

export default Person