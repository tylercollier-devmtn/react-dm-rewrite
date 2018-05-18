import React from 'react';

const DeleteBtn = ( props ) => {
    console.log(props)
    return (
        <span>
            <i className={props.icon} onClick={props.delete}></i>
        </span>
    )
}

export default DeleteBtn;