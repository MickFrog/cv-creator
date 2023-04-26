import React, { Component } from "react";
import './ExpSnippet.css';
import deletePic from './delete.svg'
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";

class ExpSnippet extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <form className="user-form">
                <div className="exp-header">
                    <h2>Experience #1</h2>
                    <button className="delBtn"><img src={deletePic} alt="del_btn"/></button>
                </div>
                <FormInput inputName="Company" />
                <FormInput inputName="Role" />
                <FormTextArea characters={600} placeText="Briefly describe the work done at the company" />
                <FormInput inputName="Start Date of Work" />
                <FormInput inputName="End Date of Work" />
            </form>
        );  
    }
}

export default ExpSnippet;