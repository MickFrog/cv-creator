import React, { Component } from "react";
import './CvForm.css';
import UserInfoForm from "./formComponents/UserInfoForm";
import ExperienceForm from "./formComponents/ExperienceForm";

class CvForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cv-form">
                <UserInfoForm />
                <ExperienceForm />
            </div>
        );
    }
}

export default CvForm;