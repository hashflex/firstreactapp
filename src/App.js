import React, {Component} from 'react';
import logo from './logo.svg'
import './App.css';
import Person from './Person/Person';
import {Button} from 'reactstrap';

class App extends Component {

  state = {
    persons: [
      {id: 'someid1', name: "Amiya", age: 20},
      {id: 'someid2', name: "Ajay", age: 20},
      {id: 'someid3', name: "Prabha", age: 50},
    ],
    showPersons: false
  };

  switchNameHandler = () => {
    // this.state.persons[0].name = "Updated"; // Don't do this kind
    this.setState({
      persons: [
        {name: "Amiya 1", age: 20},
        {name: "Ajay", age: 20},
        {name: "Prabha", age: 54},
      ]
    });
  }

  nameChangeHandler = (event, id) => {

    console.log(id);

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (index) => {
    // var persons = this.state.persons.slice();
    var persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  }
  /**
   *
   */
  togglePersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {

    let persons = null;
    let toggleButtonClassName = 'danger';
    let toggleButtonText = 'Show Persons';
    if (this.state.showPersons) {
      toggleButtonClassName = 'primary';
      toggleButtonText = 'Hide Persons';
      persons = (
        <div>
          {
            this.state.persons.map(
              (person, index) => { // for each person below element will be rendered
                return (
                  <Person name={person.name}
                          age={person.age}
                          deleteHandler={() => this.deletePersonHandler(index)}
                          key={person.id}
                          changeEventHandler={(event) => this.nameChangeHandler(event, person.id)}
                  />
                ); /*end of esx*/
              }) /*end of map*/
          }
        </div>
      );
    }

    return (
      <div className="App container col-md-10">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="PersonContainer">
          <Button color="primary" onClick={this.switchNameHandler}>Update</Button>
          &nbsp;
          <Button color={toggleButtonClassName} onClick={this.togglePersons}>{toggleButtonText}</Button>
          {persons}
        </div>
      </div>
    );
  }
}

export default App;
