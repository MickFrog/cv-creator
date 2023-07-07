import React, { Component } from "react";
import "./CvForm.css";
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
        let {
            infoHandler,
            educArray,
            addEducation,
            deleteEducation,
            educationChange,
            expArray,
            addExperience,
            deleteExperience,
            experienceChange,
            skillArray,
            addSkill,
            deleteSkill,
            skillChange,
        } = this.props;
        return (
            <div className="cv-form">
                <UserInfoForm infoHandler={infoHandler} />
                <ExperienceForm
                    expArray={expArray}
                    addExperience={addExperience}
                    deleteExperience={deleteExperience}
                    experienceChange={experienceChange}
                />
                <EducationForm
                    educArray={educArray}
                    addEducation={addEducation}
                    deleteEducation={deleteEducation}
                    educationChange={educationChange}
                />
                <SkillForm
                    skillArray={skillArray}
                    addSkill={addSkill}
                    deleteSkill={deleteSkill}
                    skillChange={skillChange}
                />
            </div>
        );
    }
}

export default CvForm;
