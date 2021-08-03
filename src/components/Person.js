import React from 'react'

const Person = ({ name, age }) => {
    return (
        <div className="container-fluid">
            <p className="lead">Hi, I am {name} and I am {age} years old</p>
        </div>
    )
}

export default Person