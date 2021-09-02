import { Component } from "react";
import Person from "./Person/Person"

class Persons extends Component {
    // constructor(props) {
    //     super(props)
    //     console.log(`[Persons.js] constructor, Props = ${this.props}`);
        
    //     // Declare the state
    //     this.state = {
    //         dummyText: 'Some Dummy State'
    //     }
    // }

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps')
        return state
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps)
        if(nextProps.persons[0].name === 'Max'){
            return false;
        } else {
            return true;
        } 
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return { message: 'Snapshot Recorded!' }
    }

    // It does not take any parametr by default, but if you record a snapshot, then you should pass prevProps, prevState and the snapshot to the hook
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log(`[Person.js] rendering...`);
        return this.props.persons.map((person, index) => {
            return <Person
                click={ () => this.props.clicked(index) } 
                name={person.name} 
                age={person.age}
                changed={ (event) => this.props.changed(event, person.id) }
                key={person.id}
            />
        })
    }
}

export default Persons