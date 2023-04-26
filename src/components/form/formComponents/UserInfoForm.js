import React, { Component } from "react";
import FormHeading from "./FormHeading";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import logo from './person.svg'

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
                    <FormInput inputName="Name" />
                    <FormInput inputName="Role" />
                    <FormInput inputName="Phone" />
                    <FormInput inputName="Email" />
                    <FormInput inputName="City/Town" />
                    <FormInput inputName="Country" />
                    <FormTextArea characters={500} placeText="Tell us about yourself in 500 chars" />
                </form>
            </div>
        );
    }
}

export default UserInfoForm;
