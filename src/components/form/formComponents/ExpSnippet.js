import React, { Component } from "react";
import "./ExpSnippet.css";
import deletePic from "./images/delete.svg";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";

class ExpSnippet extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.deleteExp = this.deleteExp.bind(this);
    }

    deleteExp() {
        this.props.deleteExperience(this.props.id);
    }

    render() {
        let { expNum, deleteOn, experienceChange, id } = this.props;
        return (
            <div className="snippet-div">
                <div className="snip-header">
                    <h2>Experience {expNum}</h2>
                    {
                        //don't show delete button with one experience
                        deleteOn ? (
                            <button type="button" className="delBtn">
                                <img
                                    src={deletePic}
                                    onClick={this.deleteExp}
                                    alt="del_btn"
                                />
                            </button>
                        ) : null
                    }
                </div>
                <FormInput
                    inputName="Company"
                    id={id}
                    dataName="company"
                    experienceChange={experienceChange}
                />
                <FormInput
                    inputName="Role"
                    id={id}
                    dataName="role"
                    experienceChange={experienceChange}
                />
                <FormTextArea
                    characters={300}
                    placeText="Briefly describe the work done at the company"
                    id={id}
                    dataName="workDone"
                    experienceChange={experienceChange}
                />
                <FormInput
                    inputName="Time frame"
                    id={id}
                    dataName="timeFrame"
                    experienceChange={experienceChange}
                />
            </div>
        );
    }
}

export default ExpSnippet;
