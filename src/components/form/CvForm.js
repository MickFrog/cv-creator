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
        let {infoHandler, 
            educArray, addEducation, deleteEducation, educationChange} = this.props;
        return (
            <div className="cv-form">
                <UserInfoForm infoHandler={infoHandler}/>
                <ExperienceForm />
                <EducationForm educArray={educArray} addEducation={addEducation} deleteEducation={deleteEducation} educationChange={educationChange}/>
                <SkillForm />
            </div>
        );
    }
}

export default CvForm;