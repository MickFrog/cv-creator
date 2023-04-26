import React, { Component } from "react";
import './FormInput.css'

class FormInput extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props) ;
    }

    render() {
        return(
            <input placeholder={this.props.inputName}/>
        );
    }
}

export default FormInput;