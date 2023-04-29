import React, { Component } from "react";
import './CvContainer.css';
import CvForm from "./form/CvForm";
import CvPreview from "./preview/CvPreview";

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
            }
        }

        this.handleInfoInput = this.handleInfoInput.bind(this);
    }

    handleInfoInput(targetState, targetVal) {
        this.setState(prevState => ({
            userInfo: {
                ...prevState.userInfo,
                [targetState]: targetVal,
            }
        }))
    }

    render() {
        return(
            <div className="myContainer">
                <CvForm infoHandler={this.handleInfoInput}/>
                <CvPreview {...this.state}/>
            </div>
        );
    }
}

export default CvContainer;