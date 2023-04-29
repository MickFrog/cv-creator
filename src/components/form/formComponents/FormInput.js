import React, { Component } from "react";
import './FormInput.css'

class FormInput extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.infoHandler(this.props.dataName, event.target.value);
    }

    render() {
        return(
            <input placeholder={this.props.inputName} onChange={this.handleChange}/>
        );
    }
}

export default FormInput;