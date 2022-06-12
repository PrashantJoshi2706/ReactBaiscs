//import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
//import UserInput from './UserInput/UserInput';
//import UserOutput from './UserOutput/UserOutput';
import Person from "../components/Persons/Person/Person";

// ----------------------------------------------------------
// this is first tutorial

// function App() {
//   return (
//     // <div className="App">
//     //  <h1>hi, i am learning react</h1>
//     // </div>
//     React.createElement("div", { className: "App" },React.createElement("h1", null, "hi, i am learning react"))
//   );
// }

const state = {
  persons: [
    { name: "deere", age: 30 },
    { name: "Prashant", age: 21 },
    { name: "akash", age: 33 },
  ],
  otherStates: "some other value",
  showPerson: false,
};

const App = (props) => {
  const [persons, setPersons] = React.useState([
    { name: "Ajinkya", age: 22 },
    { name: "Prashant", age: 21 },
    { name: "akash", age: 22 },
  ]);

  const [showPerson, setShowPerson] = React.useState(false);

  // const switchNameHandler = (newName, index) => {
  //   let tempPersons = [...persons];
  //   tempPersons[index].name =newName;
  //   setPersons(tempPersons)
  //     // console.log("button clicked");
  //     // setPersonState({
  //     //   persons:[
  //     //     {name:"joshi", age:22},
  //     //     {name:"Prashant", age:21},
  //     //     {name:"akash", age:22}
  //     //   ]
  //     // });
  //   };
  const switchNameHandler = (newName) => {
    setPersons([
      { name: newName, age: 22 },
      { name: "Prashant", age: 21 },
      { name: "akash", age: 22 },
    ]);
  };
  const newSwitchHandler = (event) => {
    setPersons([
      { name: "newName", age: 22 },
      { name: "akash", age: 22 },
      { name: event.target.value, age: 21 },
    ]);
  };
  const togglePersonHandler = () => {
    setShowPerson(!showPerson);
  };

  const deletePersonHandler = (index) => {
    const pers = [...persons];
    pers.splice(index, 1);
    setPersons(pers);
  };
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };
  let per = null;
  if (showPerson === true) {
    per = (
      <div>
        {persons.map((person, index) => {
          return (
            <Person
              clicked={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
            />
          );
        })}
      </div>
    );
  }
  return (
    <div className="App">
      <h1>hi, i am learning react</h1>
      <button style={style} onClick={() => togglePersonHandler()}>
        switch name
      </button>
      {per}
    </div>
  );
};
//-------------------------------------------------------------------

// class App extends Component{
//   state={
//     username:'supermax'
//   }
//   usernameChange = (event)=>{
//     this.setState({username: event.target.value});
//   }
//   render(){
//     return (
//       <div className='App'>
//         <ol>
//           <li>list1</li>
//           <li>list2</li>
//           <li>list3</li>
//           <li>list4</li>
//           <li>list5</li>
//         </ol>
//         <UserInput changed={this.usernameChange}
//         currentName={this.state.username}/>
//         <UserOutput userName={this.state.username}/>
//         <UserOutput userName={this.state.username}/>
//         <UserOutput userName={this.state.username}/>
//       </div>
//     )
//   }
// }

export default App;
