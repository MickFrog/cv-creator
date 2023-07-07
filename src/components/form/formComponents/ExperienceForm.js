import React, { Component } from "react";
import FormHeading from "./FormHeading";
import logo from "./images/work.svg";
import ExpSnippet from "./ExpSnippet";

class ExperienceForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.addExp = this.addExp.bind(this);
    }

    addExp() {
        this.props.addExperience();
    }

    render() {
        return (
            <div className="form-div">
                <FormHeading logo={logo} text="Experience" />

                <form className="user-form">
                    {this.props.expArray.map((expObj, index) => {
                        if (this.props.expArray.length === 1) {
                            return (
                                <ExpSnippet
                                    key={expObj.id}
                                    id={expObj.id}
                                    deleteOn={false}
                                    experienceChange={
                                        this.props.experienceChange
                                    }
                                />
                            );
                        }

                        if (this.props.expArray.length > 1) {
                            return (
                                <ExpSnippet
                                    key={expObj.id}
                                    id={expObj.id}
                                    expNum={`#${index + 1}`}
                                    deleteOn={true}
                                    deleteExperience={
                                        this.props.deleteExperience
                                    }
                                    experienceChange={
                                        this.props.experienceChange
                                    }
                                />
                            );
                        }
                        return null;
                    })}

                    {this.props.expArray.length <= 2 ? ( //limit to 3 exps; uses 2 coz of async delayed updating of expArr
                        <div className="btn-holder">
                            <button
                                type="button"
                                className="addBtn"
                                onClick={this.addExp}
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

export default ExperienceForm;
