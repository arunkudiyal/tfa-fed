// STATE IN CLASS-BASED COMPONENT
import { Component } from "react";
import '../components/Persons/Person/Person.css'
import './App.css'
import Persons from "../components/Persons/Persons";

class App extends Component {
  constructor(props) {
      super(props)
      console.log(`[App.js] constructor, Props = ${this.props}`);
      
      // Declare the state
  }

  // STATES ARE IMMUTATBLE (Cannot be changed)
  // States of the AppComponent - DATA OF THE COMP
  state = {
    persons: [
      {id:'person_1', name: 'Max', age: '21'},
      {id:'person_2', name: 'Evan', age: '24'},
      {id:'person_3', name: 'Ben', age: '22'},
      {id:'person_4', name: 'Tom', age: '26'}
    ],
    otherState: 'Some other State',
    showPerson: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`[App.js] getDerivedStateFromProps`, props);
    return state
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true
  }

  componentDidMount() {
    console.log(`[App.js] componentDidMount`);
  }

  // Methods - Functionalities
  changeState = () => {
    // console.log('Button Clicked!!');

    // Change the name state
    // this.state.person[0].name = 'New Name'  --> DONOT DO THIS!!!!

    // changeState() --> Used by the CLASS-BASED Component
    this.setState( {
      persons: [
        {name: 'Maxilliam', age: '21'},
        {name: 'Evan Potter', age: '25'},
        {name: 'Benjamin', age: '27'}
      ]
    } )

    console.log(this.state);
  }

  changeName = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {return p.id === id} )

    // copying that person whose index we just found
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value

    // creating a copy of the new state
    const newPersonState = [ ...this.state.persons ]
    newPersonState[personIndex] = person

    // change the state of that particular index
    this.setState( {persons: newPersonState} )
  }

  togglePerson = () => {
    const doShow = this.state.showPerson
    this.setState({showPerson: !doShow}) 
  }

  deletePerson = (personIndex) => {
    const persons = this.state.persons
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  } 
 
  // #button:hover {...}

  render() {
    console.log(`[App.js] render`);

    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      border: '2px solid black',
      padding: '10px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPerson) {
      persons = (
          <div>
              <Persons 
                persons={this.state.persons}
                clicked={this.deletePerson}
                changed={this.changeName} />
          </div>
      )
      buttonStyle.backgroundColor = 'red'
    }

    const classes = []
    if(this.state.persons.length <= 5) {
      classes.push('red')     // classes = ['red']
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold')    // classes = ['red', 'bold']
    }

    return(
      <div className="App">
        <h1 style={{ marginTop: '10px' }}>{this.props.appTitle}</h1>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button
          style={buttonStyle} 
          onClick={this.togglePerson} >Toggle Person</button>
          <p className={classes.join(' ')}>The list of Persons are as follows : </p>

          { persons }
        </div>
      </div>
    )
  }
}

export default App;