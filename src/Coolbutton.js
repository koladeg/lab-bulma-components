import React from 'react';
import button from 'bulma/css/bulma.css';

const CoolButton = (props) => {
    return ( 
        <button class={`button ${props.classes}`}>{props.name}</button>
    );
}
 
export default CoolButton;