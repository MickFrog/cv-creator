import React, { Component } from "react";
import './UserInfoForm.css';
import FormHeading from "./FormHeading";
import FormInput from "./FormInput";
import logo from './person.svg'

class UserInfoForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="user-info-div">
                <FormHeading logo={logo} text="Personal Information"/>
                <form className="user-info-form">
                    <FormInput inputName="Name" />
                    <FormInput inputName="Role" />
                    <FormInput inputName="Phone" />
                    <FormInput inputName="Email" />
                    <FormInput inputName="City/Town" />
                    <FormInput inputName="Country" />
                </form>
            </div>
        );
    }
}

export default UserInfoForm;
