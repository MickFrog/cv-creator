import React, { Component } from "react";
import "./FormHeading.css";

class FormHeading extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        let { logo, text } = this.props;

        return (
            <div className="formHeading">
                <img src={logo} alt="head_logo" />
                <p>{text}</p>
            </div>
        );
    }
}

export default FormHeading;
