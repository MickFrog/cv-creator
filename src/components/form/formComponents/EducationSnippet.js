import React, { Component } from "react";
import deletePic from "./images/delete.svg";
import FormInput from "./FormInput";

class EducationSnippet extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.delBg = this.delBg.bind(this);
    }

    delBg() {
        this.props.deleteEducation(this.props.id);
    }

    render() {
        let { bgNum, deleteOn, educationChange, id } = this.props;
        return (
            <div className="snippet-div">
                <div className="snip-header">
                    <h2>Background {bgNum}</h2>
                    {deleteOn ? (
                        <button type="button" className="delBtn">
                            <img
                                src={deletePic}
                                onClick={this.delBg}
                                alt="del_btn"
                            />
                        </button>
                    ) : null}
                </div>

                <FormInput
                    inputName="School attended"
                    id={id}
                    dataName="schoolName"
                    educationChange={educationChange}
                />
                <FormInput
                    inputName="Certificate/Degree obtained"
                    id={id}
                    dataName="degreeObtained"
                    educationChange={educationChange}
                />
                <FormInput
                    inputName="Time frame"
                    id={id}
                    dataName="timeFrame"
                    educationChange={educationChange}
                />
            </div>
        );
    }
}

export default EducationSnippet;
