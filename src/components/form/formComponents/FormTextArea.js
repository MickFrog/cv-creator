import React, { Component } from "react";
import './FormInput.css';

class FormTextArea extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    }

    handleTextAreaChange(event) {
        this.props.infoHandler(this.props.dataName, event.target.value)
    }

    render() {
        return(
            <textarea maxLength={this.props.characters} placeholder={this.props.placeText} onChange={this.handleTextAreaChange}/>
        );
    }
}

export default FormTextArea;