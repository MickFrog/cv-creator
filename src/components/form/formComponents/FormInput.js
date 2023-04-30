import React, { Component } from "react";
import './FormInput.css'

class FormInput extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        if (this.props.infoHandler) {
            this.props.infoHandler(this.props.dataName, event.target.value);
            return;
        }

        if (this.props.educationChange) {
            this.props.educationChange(this.props.dataName, this.props.id, event.target.value);
            return;
        }

        if (this.props.experienceChange) {
            this.props.experienceChange(this.props.dataName, this.props.id, event.target.value);
            return;
        }
    }

    render() {
        return(
            <input placeholder={this.props.inputName} onChange={this.handleInputChange}/>
        );
    }
}

export default FormInput;