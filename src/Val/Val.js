import React from 'react';
import './Val.css';

const validation = (props) => {
    let validationMessage = 'It is too short.';

    if (props.letter.length >= 10){
        validationMessage = 'It is too long.';
    }

    return (
        <div className="validation">
            <p>The Word has {props.letter.length} letters! {validationMessage}</p>
        </div>
    );
}


export default validation; 