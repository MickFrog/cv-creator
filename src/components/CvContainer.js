import React, { Component } from "react";
import "./CvContainer.css";
import CvForm from "./form/CvForm";
import CvPreview from "./preview/CvPreview";
import uniqid from "uniqid";
import ReactToPrint from "react-to-print";
import printLogo from "./preview/previewComponents/images/print.svg";
import eyeImg from "./preview/previewComponents/images/eye.svg";

class CvContainer extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();

        this.state = {
            userInfo: {
                userName: "",
                userRole: "",
                userPhone: "",
                userEmail: "",
                userCity: "",
                userCountry: "",
                userProfile: "",
            },
            educationArray: [
                {
                    id: uniqid(),
                    schoolName: "",
                    degreeObtained: "",
                    timeFrame: "",
                },
            ],
            experienceArray: [
                {
                    id: uniqid(),
                    company: "",
                    role: "",
                    workDone: "",
                    timeFrame: "",
                },
            ],
            skillArray: [
                {
                    id: uniqid(),
                    userSkill: "",
                },
            ],
        };

        this.handleInfoInput = this.handleInfoInput.bind(this);

        //education bindings
        this.addEducation = this.addEducation.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
        this.educationChange = this.educationChange.bind(this);

        //experience bindings
        this.addExperience = this.addExperience.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
        this.experienceChange = this.experienceChange.bind(this);

        //skill bindings
        this.addSkill = this.addSkill.bind(this);
        this.deleteSkill = this.deleteSkill.bind(this);
        this.skillChange = this.skillChange.bind(this);
    }

    handleInfoInput(targetState, targetVal) {
        this.setState((prevState) => ({
            userInfo: {
                ...prevState.userInfo,
                [targetState]: targetVal,
            },
        }));
    }

    addEducation() {
        this.setState({
            educationArray: this.state.educationArray.concat({
                id: uniqid(),
                schoolName: "",
                degreeObtained: "",
                timeFrame: "",
            }),
        });
    }

    deleteEducation(targetID) {
        this.setState({
            educationArray: this.state.educationArray.filter(
                (elem) => elem.id !== targetID
            ),
        });
    }

    educationChange(targetName, targetID, newValue) {
        this.setState({
            // map current state array to new edited array
            educationArray: this.state.educationArray.map((educationElem) => {
                if (educationElem.id === targetID) {
                    //if target education obj, make change
                    return { ...educationElem, [targetName]: newValue };
                }
                return educationElem; //return other elements (actual pointers to prev elements)
            }),
        });
    }

    addExperience() {
        this.setState({
            experienceArray: this.state.experienceArray.concat({
                id: uniqid(),
                company: "",
                role: "",
                workDone: "",
                timeFrame: "",
            }),
        });
    }

    deleteExperience(targetID) {
        this.setState({
            experienceArray: this.state.experienceArray.filter(
                (elem) => elem.id !== targetID
            ),
        });
    }

    experienceChange(targetName, targetID, newValue) {
        this.setState({
            // map current state array to new edited array
            experienceArray: this.state.experienceArray.map(
                (experienceElem) => {
                    if (experienceElem.id === targetID) {
                        //if target education obj, make change
                        return { ...experienceElem, [targetName]: newValue };
                    }
                    return experienceElem; //return other elements (actual pointers to prev elements)
                }
            ),
        });
    }

    addSkill() {
        this.setState({
            skillArray: this.state.skillArray.concat({
                id: uniqid(),
                userSkill: "",
            }),
        });
    }

    deleteSkill(targetID) {
        this.setState({
            skillArray: this.state.skillArray.filter(
                (elem) => elem.id !== targetID
            ),
        });
    }

    skillChange(targetName, targetID, newValue) {
        this.setState({
            // map current state array to new edited array
            skillArray: this.state.skillArray.map((skillElem) => {
                if (skillElem.id === targetID) {
                    //if target education obj, make change
                    return { ...skillElem, [targetName]: newValue };
                }
                return skillElem; //return other elements (actual pointers to prev elements)
            }),
        });
    }

    render() {
        return (
            <div className="myContainer">
                <CvForm
                    infoHandler={this.handleInfoInput}
                    // education handling
                    educArray={this.state.educationArray}
                    addEducation={this.addEducation}
                    deleteEducation={this.deleteEducation}
                    educationChange={this.educationChange}
                    //experience handling
                    expArray={this.state.experienceArray}
                    addExperience={this.addExperience}
                    deleteExperience={this.deleteExperience}
                    experienceChange={this.experienceChange}
                    //skill handling
                    skillArray={this.state.skillArray}
                    addSkill={this.addSkill}
                    deleteSkill={this.deleteSkill}
                    skillChange={this.skillChange}
                />

                <CvPreview
                    {...this.state}
                    ref={(elem) => (this.componentRef = elem)}
                />

                <div className="btns-container">
                    {/* prepare printing package variables */}
                    <ReactToPrint
                        trigger={() => {
                            return (
                                <button className="printBtn" title="Print CV">
                                    <img src={printLogo} alt="printCV" />
                                </button>
                            );
                        }}
                        content={() => this.componentRef}
                        documentTitle="newCV"
                    />
                    <button className="eyeBtn" title="View Preview">
                        <img src={eyeImg} alt="viewPrev" />
                    </button>
                </div>
            </div>
        );
    }
}

export default CvContainer;
