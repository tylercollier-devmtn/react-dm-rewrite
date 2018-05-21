import React from 'react';
// import * as FontAwesome from 'react-icons/lib/fa'
import icons from 'glyphicons'


// Create reusable Button Component Here //
// This component will effectively add our items to our cart and will also be used to confirm payment during checkout //

const Button = (props) => {
 let symbol = props.icon
//  console.log('--------currentProps', props)
//  console.log(props.icon, icons.shoppingTrolley, icons[symbol])

//   let button = props.params ? <button onClick={() => props.action(props.params)}>{props.text}</button> : <button onClick={() => props.action()}>{props.text}</button>;

  let button = props.params ? 
                    props.icon ? <button onClick={() => props.action(props.params)} className="symbol">{icons[symbol]}</button> 
                            : <button onClick={() => props.action(props.params)}>{props.text}</button> 
                                : <button onClick={() => props.action()}>{props.text}</button>;

    return (
        <div>
            {button}
        </div>
    )
}

export default Button;