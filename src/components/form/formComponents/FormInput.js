import React, { Component } from "react";
import './FormInput.css'

class FormInput extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        let { dataName, id} = this.props;
        if (this.props.infoHandler) {
            this.props.infoHandler(dataName, event.target.value);
            return;
        }

        if (this.props.educationChange) {
            this.props.educationChange(dataName, id, event.target.value);
            return;
        }

        if (this.props.experienceChange) {
            this.props.experienceChange(dataName, id, event.target.value);
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