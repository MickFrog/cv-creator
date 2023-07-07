import React, { Component } from "react";
import "./ContactComp.css";

class ContactComp extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contact-comp">
                <img src={this.props.logo} alt="pic" />
                <p className="contact-text">{this.props.contactText}</p>
            </div>
        );
    }
}

export default ContactComp;
