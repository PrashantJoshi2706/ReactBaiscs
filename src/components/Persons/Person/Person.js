import React, {Component} from "react";
import "./Person.css";

class Person extends Component{
  

  render(){
    console.log("person.js redering...........")
    return (
      <div className="Person">
        <h1 onClick={this.props.click}>
          I'm a {this.props.name}, i am {this.props.age} year old
        </h1>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  } 
}

export default Person;
