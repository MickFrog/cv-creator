import React, { Component } from "react";
import './CvContainer.css';
import CvForm from "./form/CvForm";
import CvPreview from "./preview/CvPreview";
import uniqid from 'uniqid';

class CvContainer extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();

        this.state = {
            userInfo: {
                userName: '',
                userRole: '',
                userPhone: '',
                userEmail: '',
                userCity: '',
                userCountry: '',
                userProfile: '',
            },
            educationArray: [
                {   id: uniqid(),
                    schoolName: '',
                    degreeObtained: '',
                    timeFrame: ''
                }
            ]
        }

        this.handleInfoInput = this.handleInfoInput.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
        this.educationChange = this.educationChange.bind(this);
    }

    handleInfoInput(targetState, targetVal) {
        this.setState(prevState => ({
            userInfo: {
                ...prevState.userInfo,
                [targetState]: targetVal,
            }
        }))
    }

    addEducation() {
        this.setState({
            educationArray: this.state.educationArray.concat(
                {   id: uniqid(),
                    schoolName: '',
                    degreeObtained: '',
                    timeFrame: ''
                }
            )
        })
    }

    deleteEducation(targetID) {
        this.setState({
            educationArray: this.state.educationArray
            .filter(elem => elem.id !== targetID)
        })
    }

    educationChange(targetName, targetID, newValue) {
        this.setState({
            educationArray: this.state.educationArray
            .map((educationElem) => {
                if (educationElem.id === targetID) { //if target education obj, make change
                    return {...educationElem, [targetName]: newValue}
                }
                return educationElem; //return other elements
            })
        })
    }

    render() {
        return(
            <div className="myContainer">
                <CvForm infoHandler={this.handleInfoInput}
                    // education handling
                    educArray={this.state.educationArray} addEducation={this.addEducation}
                    deleteEducation={this.deleteEducation} educationChange={this.educationChange}
                />

                <CvPreview {...this.state}/>
            </div>
        );
    }
}

export default CvContainer;