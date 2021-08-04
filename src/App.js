// import Header from "./components/Header";
// import Tasks from './components/Tasks'

// function App() {
//   return (
//     <div className="App">
//       <div className="container">
//         <Header className='header' title="A new Heading!" id={1} />
//         <Tasks />
//       </div>
//     </div>
//   );
// }

// export default App;

// STATE IN CLASS-BASED COMPONENT
import { Component } from "react";
import './components/Person/Person.css'
import Person from "./components/Person/Person";

class App extends Component {
  // STATES ARE IMMUTATBLE (Cannot be changed)
  // States of the AppComponent - DATA OF THE COMP
  state = {
    person: [
      {name: 'Max', age: '21'},
      {name: 'Evan', age: '24'},
      {name: 'Ben', age: '22'}
    ],
    otherState: 'Some other State'
  }

  // Methods - Functionalities
  changeState = () => {
    // console.log('Button Clicked!!');

    // Change the name state
    // this.state.person[0].name = 'New Name'  --> DONOT DO THIS!!!!

    // changeState() --> Used by the CLASS-BASED Component
    this.setState( {
      person: [
        {name: 'Maxilliam', age: '21'},
        {name: 'Evan Potter', age: '25'},
        {name: 'Benjamin', age: '27'}
      ]
    } )

    console.log(this.state);
  }

  // changeName = (newName) => {
  //   this.setState( {
  //     person: [
  //       {name: newName, age: '21'},
  //       {name: newName, age: '25'},
  //       {name: 'Benjamin', age: '27'}
  //     ]
  //   } )
  // }

  changeName = (event) => {
    this.setState({
      person: [
        {name: 'Max', age: 25},
        {name: event.target.value, age: 29},
        {name: event.target.value, age: 30}
      ]
    })
  }
 
  render() {
    return(
      // Access the data from the comp state
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <Person 
            name={this.state.person[0].name} 
            age={this.state.person[0].age} />
            {/* myClick={() => this.changeName('Max!!!!!')} /> */}

          <Person 
            name={this.state.person[1].name} 
            age={this.state.person[1].age}
            myClick={this.changeName.bind(this, 'Evan')} 
            changed={this.changeName} />

          <Person 
            name={this.state.person[2].name} 
            age={this.state.person[2].age}
            changed={this.changeName} />
        </div>

        <button style={{ alignSelf: 'center' }} onClick={this.changeState} className="btn btn-primary">Change State</button>
      </div>
    )
  }
}

export default App;

// FUNCTION BASED COMPONENT
// import { useState } from "react";

// const App = () => {
//   // State in the function-based component
//   const [personState, setPersonState] = useState({
//     person: [
//         {name: 'Maxilliam', age: '21'},
//         {name: 'Evan Potter', age: '25'},
//         {name: 'Benjamin', age: '27'}
//     ],
//     otherState: 'An Other State'
//   })
//   console.log(personState)

//   const changeState = () => {
//     // Excuting the set method of the state
//     setPersonState({
//       person: [
//         {name: 'Max', age: '21'},
//         {name: 'Evan', age: '25'},
//         {name: 'Ben', age: '27'}
//       ],
//       otherState: personState.otherState
//     })
//   }
  
//   console.log(personState)

//   return(
//     // Access the state from the function-based component
//     <div>
//       <Person name={personState.person[0].name} age={personState.person[0].age} />
//       <Person name={personState.person[1].name} age={personState.person[1].age} />
//       <Person name={personState.person[2].name} age={personState.person[2].age} />
//       <button className="btn btn-success" onClick={changeState}>Change State</button>
//     </div>
//   )
// }
// export default App;