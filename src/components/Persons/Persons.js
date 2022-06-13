import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component{
  static getDerivedStateFromProps(props, state){
    console.log("persons.js getDerivedStateFromProps")
    return state;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("persons.js componentDidUpdate");
  }

  shoudComponentUpdate(nextProps, NextState){
    console.log("persons.js shouldComponentsUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(){
    console.log("persons.js getSanpshotBeforeUpdate");
  }
  render(){
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changedName(event, person.id)}
        />
      );
    })
  }
}

export default Persons;
