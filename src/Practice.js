import React, {Component} from 'react';
import Char from './validationComponents/Char';
import Validation from './validationComponents/Validation'
class Practice extends Component{
    
    state = {
        userInput: ''
    }
    inputChangeHnadler=(event)=>{
        this.setState({userInput: event.target.value})
    }
    deletHandler= (index)=>{
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({userInput: updatedText});
    }
    render(){
        const charList = this.state.userInput.split('').map((ch, index)=>{
            return <Char character={ch} 
            key={index}
            clicked={()=>this.deletHandler(index)}/>
        })
        return (
            <div className='Practice'>

                <input type='text' onChange={this.inputChangeHnadler} 
                value={this.state.userInput}/>
                <p>{this.state.userInput}</p>
                <Validation inputLength= {this.state.userInput.length}/>
                {charList}
            </div>
        )
    }

}

export default Practice;