import React from "react";
import "./Cockpit.css";
const Cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = "Red";
  }
  if (props.persons.length <= 2) {
    assignedClasses.push("bold red");
  }
  if (props.persons.length <= 1) {
    assignedClasses.push("bold red");
  }
  return (
    <div className={"Cockpit"}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
