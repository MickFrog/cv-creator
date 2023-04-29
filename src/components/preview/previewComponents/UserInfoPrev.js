import React, { Component } from "react";
import './UserInfoPrev.css';
import ContactComp from "./ContactComp";
import callLogo from './images/call.svg'
import emailLogo from './images/email.svg'
import locationLogo from './images/location.svg'

class UserInfoPrev extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div className="infoPrev">
                <div className="user-name">{this.props.userName}</div>
                <div className="user-role">{this.props.userRole}</div>
                <ContactComp logo={callLogo} contactText={this.props.userPhone} />
                <ContactComp logo={emailLogo} contactText={this.props.userEmail} />
                <ContactComp logo={locationLogo} contactText={`${this.props.userCity}, ${this.props.userCountry}`} />
            </div>
        );
    }
}

export default UserInfoPrev;