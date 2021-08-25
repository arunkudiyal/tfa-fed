import React, { useEffect } from 'react'

const Person = (props) => {
    useEffect(() => {
        console.log('[Person.js] useEffect')

        // HttpRequest / SideEffects
        setTimeout(() => {
            alert('Saved the data to the DB!')
        }, 1000)

        // Perform something when the component is unmounted
        return () => {
            console.log('[Person.js] Clean-Up Process by useEffect...')
        }
    }, [props.name])

    useEffect(() => {
        console.log('[Person.js] 2nd useEffect')
        return () => {
            console.log('[Person.js] Clean-Up Process by 2nd useEffect...')
        }
    })

    console.log(`[Person.js] rendering...`);
    return (
        <div className="Person">
            <p onClick={props.click} className="lead">Hi, I am {props.name} and I am {props.age} years old</p>
            <input type="text" placeholder="Enter the name" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Person