import React, { Component } from "react";
import FormHeading from "./FormHeading";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import logo from './images/person.svg'

class UserInfoForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="form-div">
                <FormHeading logo={logo} text="Personal Information"/>
                <form className="user-form">
                    <FormInput inputName="Name" infoHandler={this.props.infoHandler} dataName="userName"/>
                    <FormInput inputName="Role" infoHandler={this.props.infoHandler} dataName="userRole"/>
                    <FormInput inputName="Phone" infoHandler={this.props.infoHandler} dataName="userPhone"/>
                    <FormInput inputName="Email" infoHandler={this.props.infoHandler} dataName="userEmail"/>
                    <FormInput inputName="City/Town" infoHandler={this.props.infoHandler} dataName="userCity"/>
                    <FormInput inputName="Country (short form)" infoHandler={this.props.infoHandler} dataName="userCountry"/>
                    <FormTextArea characters={500} placeText="Tell us about yourself in 500 chars" infoHandler={this.props.infoHandler}
                        dataName="userProfile"/>
                </form>
            </div>
        );
    }
}

export default UserInfoForm;
