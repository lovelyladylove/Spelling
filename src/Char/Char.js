import React from 'react';


const char = (props) => {
    const abc = {
        display: 'inline-block',
        padding: '10px',
        margin: '10px',
        border: '5px solid darkred',
        textAlign: 'center'
    }

    return(
        <div style={abc} onClick={props.click}>
            {props.character}
        </div>
    )
}

export default char;