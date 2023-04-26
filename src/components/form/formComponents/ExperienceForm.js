import React, { Component } from "react";
import FormHeading from "./FormHeading";
import logo from './work.svg'
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";

class ExperienceForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div className="form-div">
                <FormHeading logo={logo} text="Experience" />
                <form className="user-form">
                    <FormInput inputName="Company" />
                    <FormInput inputName="Role" />
                    <FormTextArea characters={600} placeText="Briefly describe the work done at the company" />
                    <FormInput inputName="Start Date of Work" />
                    <FormInput inputName="End Date of Work" />
                </form>
            </div>
        );
    }
}

export default ExperienceForm;