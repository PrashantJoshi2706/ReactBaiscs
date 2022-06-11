import React from "react";
import Radium from 'radium';
import './Person.css'
const person = (props) => {
  
  
  return (
    <div className="Person">
      <h1 onClick={props.click}>
        I'm a {props.name}, i am {props.age} year old
      </h1>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  ); 
};

export default person;
