import React, { Component } from "react";
import './CvForm.css';
import UserInfoForm from "./formComponents/UserInfoForm";
import ExperienceForm from "./formComponents/ExperienceForm";
import SkillForm from "./formComponents/SkillForm";
import EducationForm from "./formComponents/EducationForm";

class CvForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cv-form">
                <UserInfoForm infoHandler={this.props.infoHandler}/>
                <ExperienceForm />
                <EducationForm />
                <SkillForm />
            </div>
        );
    }
}

export default CvForm;