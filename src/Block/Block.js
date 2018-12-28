import React from 'react';

const block = (props) => {
    return (
        <div> 
            <p>This is a block for {props.name} and it costs {props.price}$</p>
            <div>{props.children}</div>
        </div>
    )
};

export default block;