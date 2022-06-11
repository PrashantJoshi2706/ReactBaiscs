import React from 'react';

const Validation = (props)=>{
    let message = 'long enough';
    if(props.inputLength<4){
        message = "too short";
    }
    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default Validation;