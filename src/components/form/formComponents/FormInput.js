import React, { Component } from "react";
import './FormInput.css'

class FormInput extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.props.infoHandler(this.props.dataName, event.target.value);
    }

    render() {
        return(
            <input placeholder={this.props.inputName} onChange={this.handleInputChange}/>
        );
    }
}

export default FormInput;