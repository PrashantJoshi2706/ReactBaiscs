import './App.css';
import React, {Component} from 'react';
import Person  from './Person/Person';

class AppClass extends Component{

        state = {
          persons: [
            {id:'A1', name: 'Max', age: 28 },
            {id:'A2', name: 'John', age: 29 },
            {id:'A3', name: 'marsh', age: 26 }
          ],
          otherState: 'some other value',
          showPersons: false
        }
      
        switchNameHandler = ( newName ) => {
          // console.log('Was clicked!');
          // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
          this.setState( {
            persons: [
              { name: newName, age: 28 },
              { name: 'John', age: 29 },
              { name: 'marsh', age: 27 }
            ]
          } )
        }
      
        nameChangedHandler = ( event, id ) => {
          const personIndex = this.state.persons.findIndex(p=>{
            return p.id === id;
          });
          const person = {...this.state.persons[personIndex]};
          // const person = Object.assign({}, this.state.person[personIndex]);
          person.name = event.target.value;
          const persons = [...this.state.persons];
          persons[personIndex] = person;
          this.setState( {
            persons:persons
          } )
        }
      
        togglePersonsHandler = () => {
          const doesShow = this.state.showPersons;
          this.setState( { showPersons: !doesShow } );
        }

        deletPersonHandler = (index)=>{
          console.log("delete called", index)
          const per = [...this.state.persons];
          per.splice(index, 1);
          this.setState({persons: per});
        }
      
        render () {
          const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
           
          };
      
          let persons = null;
      
          if ( this.state.showPersons ) {
            // persons = (
            //   <div>
            //     <Person
            //       name={this.state.persons[0].name}
            //       age={this.state.persons[0].age} />
            //     <Person
            //       name={this.state.persons[1].name}
            //       age={this.state.persons[1].age}
            //       click={this.switchNameHandler.bind( this, 'Max!' )}
            //       changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
            //     <Person
            //       name={this.state.persons[2].name}
            //       age={this.state.persons[2].age} />
            //   </div>

              persons = (
                <div>
                  {this.state.persons.map((person,index)=>{
                      return <Person 
                      name= {person.name}
                      age={person.age}
                      key = {person.id}
                      click = {()=> this.deletPersonHandler(index)}
                     
                      changed = {(event)=>this.nameChangedHandler(event, person.id)}
                      />
                  })}
                </div>
              );
              style.backgroundColor = 'red';
              style[':hover']={
                backgroundColor: 'salmon',
                color: 'black'
              }
          }
          const classes = [];//red bold
          if(this.state.persons.length <= 2){
            classes.push('red');
          }
          if(this.state.persons.length<= 1){
            classes.push('bold');
          }
          return (
            <div className="App">
              <h1>Hi, I'm a React App</h1>
              <p className={classes.join(' ')}>This is really working!</p>
              <button
                style={style}
                onClick={this.togglePersonsHandler}>Toggle Persons</button>
              {persons}
            </div>
          );
          // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
        }
      }
          


export default AppClass;