import Person from "./Person/Person"

const Persons = (props) => {
    console.log(`[Person.js] rendering...`);
    return(
        props.persons.map((person, index) => {
            return <Person
                click={ () => props.clicked(index) } 
                name={person.name} 
                age={person.age}
                changed={ (event) =>props.changed(event, person.id) }
                key={person.id} />
        })
    )
}
export default Persons