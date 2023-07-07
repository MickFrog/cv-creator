import React, { Component } from "react";
import "./CvPreview.css";
import UserInfoPrev from "./previewComponents/UserInfoPrev";
import UserProfilePrev from "./previewComponents/UserProfilePrev";
import SkillsPrev from "./previewComponents/SkillsPrev";
import ExpPrev from "./previewComponents/ExpPrev";
import EducationPrev from "./previewComponents/EducationPrev";

class CvPreview extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.displayStyle = {
            display: "grid",
        };
    }

    render() {
        return (
            <div
                className="cv-preview"
                style={this.props.showPreview ? this.displayStyle : null}
            >
                <UserInfoPrev {...this.props.userInfo} />
                <UserProfilePrev
                    profileText={this.props.userInfo.userProfile}
                />
                <EducationPrev educationArr={this.props.educationArray} />
                <ExpPrev experienceArr={this.props.experienceArray} />
                <SkillsPrev skillArray={this.props.skillArray} />
            </div>
        );
    }
}

export default CvPreview;
