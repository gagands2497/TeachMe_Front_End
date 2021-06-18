import React from 'react';
import './Form.css';

const Form = (props) => {
    return (
        <div id="form">
            <form  id = {props.id} className = "form">
                <h2>{props.header}</h2>
                {props.children}
            </form>
        </div>
    );
}
 
export default Form;