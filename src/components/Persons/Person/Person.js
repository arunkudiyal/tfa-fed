import React, { useEffect } from 'react'
import Aux from '../../../hoc/Aux'
import AuthContext from '../../../context/auth-context'

import './Person.css'

const Person = (props) => {
    useEffect(() => {
        console.log('[Person.js] useEffect')

        // HttpRequest / SideEffects
        setTimeout(() => {
            // alert('Saved the data to the DB!')
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
        <Aux classes="Person">
            <AuthContext.Consumer>
                { (context) => context.authenticated ? <p> Login Successfull...! </p> : <p> Plaese Login... </p> }
            </AuthContext.Consumer>
            <p onClick={props.click} className="lead">Hi, I am {props.name} and I am {props.age} years old</p>
            <input type="text" placeholder="Enter the name" onChange={props.changed} value={props.name} />
        </Aux>
    )
}

// export default withClass(Person, "Person", "NewClass")
export default Person