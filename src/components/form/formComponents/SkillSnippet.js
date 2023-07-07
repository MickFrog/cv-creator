import React, { Component } from "react";
import "./SkillSnippet.css";
import deletePic from "./images/delete.svg";
import FormInput from "./FormInput";

class SkillSnippet extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.removeSkill = this.removeSkill.bind(this);
    }

    removeSkill() {
        this.props.deleteSkill(this.props.id);
    }

    render() {
        return (
            <div className="skill-snip">
                <FormInput
                    inputName="Skill"
                    dataName="userSkill"
                    id={this.props.id}
                    skillChange={this.props.skillChange}
                />
                {
                    //don't show delete button with one skill
                    this.props.deleteOn ? (
                        <button type="button" className="delBtn">
                            <img
                                src={deletePic}
                                alt="del_btn"
                                onClick={this.removeSkill}
                            />
                        </button>
                    ) : null
                }
            </div>
        );
    }
}

export default SkillSnippet;
