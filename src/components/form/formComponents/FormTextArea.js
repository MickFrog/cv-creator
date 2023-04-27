import React, { Component } from "react";
import './FormInput.css';

class FormTextArea extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);    
    }

    render() {
        return(
            <textarea maxLength={this.props.characters} placeholder={this.props.placeText}/>
        );
    }
}

export default FormTextArea;