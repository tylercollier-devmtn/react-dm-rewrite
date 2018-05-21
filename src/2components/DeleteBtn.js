import React from 'react';
import icons from 'glyphicons';


// Create DeleteBtn functional component here (Component needs a symbol prop) //
// This component will be used to delete items from our cart //

const DeleteBtn = ( props ) => {
    let symbol = props.icon
    return (
        <span>
            <span onClick={props.delete}>{icons[symbol]}</span>
        </span>
    )
}

export default DeleteBtn;