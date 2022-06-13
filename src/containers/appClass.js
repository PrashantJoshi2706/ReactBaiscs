import "./App.css";
import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class AppClass extends Component {
  // constructor(props){
  //   super(props);
  //   console.log("App js constructor");
    
  // }
  state = {
    persons: [
      { id: "A1", name: "Max", age: 28 },
      { id: "A2", name: "John", age: 29 },
      { id: "A3", name: "marsh", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };
  // static getDerivedStateFromProps(props, state){
  //   console.log('app.js getderivedStatefromProps state',props);
  //   return state;

  // }
  
  componentDidMount(){
    console.log("app.js components mount run")
  }

  shouldComponentUpdate(nextPros, nextState){
    console.log('shoudlComponets update in appclass.js');
    return true;
  }

  componentDidUpdate(){
    console.log("components did updated appclass.js")
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "John", age: 29 },
        { name: "marsh", age: 27 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    // const person = Object.assign({}, this.state.person[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletPersonHandler = (index) => {
    console.log("delete called", index);
    const per = [...this.state.persons];
    per.splice(index, 1);
    this.setState({ persons: per });
  };

  render() {
    console.log("app.js reder")
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletPersonHandler}
          changedName={this.nameChangedHandler}
        />
      );
    }
    return (
      <div className="App">
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default AppClass;
