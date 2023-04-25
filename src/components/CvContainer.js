import React, { Component } from "react";
import './CvContainer.css';
import CvForm from "./form/CvForm";
import CvPreview from "./preview/CvPreview";

class CvContainer extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    render() {
        return(
            <div className="myContainer">
                <CvForm />
                <CvPreview />
            </div>
        );
    }
}

export default CvContainer;