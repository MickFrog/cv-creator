import React, { Component } from "react";
import './CvForm.css';
import UserInfoForm from "./formComponents/UserInfoForm";

class CvForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cv-form">
                <UserInfoForm />
            </div>
        );
    }
}

export default CvForm;