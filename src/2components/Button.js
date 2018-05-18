import React from 'react';

const Button = (props) => {
 
  let button = props.params ? <button onClick={() => props.action(props.params)}>{props.text}</button> : <button onClick={() => props.action()}>{props.text}</button>;

    return (
        <div>
            {button}
        </div>
    )
}

export default Button;