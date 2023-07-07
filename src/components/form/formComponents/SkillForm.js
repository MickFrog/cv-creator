import React, { Component } from "react";
import FormHeading from "./FormHeading";
import logo from "./images/skill.svg";
import SkillSnippet from "./SkillSnippet";

class SkillForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.addSkill = this.addSkill.bind(this);
    }

    addSkill() {
        this.props.addSkill();
    }

    render() {
        return (
            <div className="form-div">
                <FormHeading logo={logo} text="Skills & Technologies" />

                <form className="user-form">
                    {this.props.skillArray.map((skillObj) => {
                        if (this.props.skillArray.length === 1) {
                            return (
                                <SkillSnippet
                                    key={skillObj.id}
                                    id={skillObj.id}
                                    deleteOn={false}
                                    skillChange={this.props.skillChange}
                                />
                            );
                        }

                        if (this.props.skillArray.length > 1) {
                            return (
                                <SkillSnippet
                                    key={skillObj.id}
                                    id={skillObj.id}
                                    deleteOn={true}
                                    deleteSkill={this.props.deleteSkill}
                                    skillChange={this.props.skillChange}
                                />
                            );
                        }
                        return null;
                    })}

                    {this.props.skillArray.length <= 7 ? ( //limit to 8 skills; uses 7 coz of async delayed updating of skillArr
                        <div className="btn-holder">
                            <button
                                type="button"
                                className="addBtn"
                                onClick={this.addSkill}
                            >
                                Add
                            </button>
                        </div>
                    ) : null}
                </form>
            </div>
        );
    }
}

export default SkillForm;
