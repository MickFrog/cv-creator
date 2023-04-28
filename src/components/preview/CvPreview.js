import React, { Component } from "react";
import './CvPreview.css';
import UserInfoPrev from "./previewComponents/UserInfoPrev";
import UserProfilePrev from "./previewComponents/UserProfilePrev";
import SkillsPrev from './previewComponents/SkillsPrev';
import ExpPrev from './previewComponents/ExpPrev';
import EducationPrev from "./previewComponents/EducationPrev";

class CvPreview extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cv-preview">
                <UserInfoPrev />
                <UserProfilePrev />
                <EducationPrev />
                <ExpPrev />
                <SkillsPrev />
            </div>
        );
    }
}

export default CvPreview;