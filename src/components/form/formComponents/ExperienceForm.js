import React, { Component } from "react";
import './ExperienceForm.css';
import FormHeading from "./FormHeading";
import logo from './work.svg'
import ExpSnippet from "./ExpSnippet";


class ExperienceForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div className="form-div">
                <FormHeading logo={logo} text="Experience" />
                <ExpSnippet />

                <div className="btn-holder">
                    <button className="addBtn">Add</button>
                </div>
            </div>
        );
    }
}

export default ExperienceForm;