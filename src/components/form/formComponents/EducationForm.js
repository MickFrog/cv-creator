import React, { Component } from "react";
import FormHeading from "./FormHeading";
import logo from './images/school.svg';

class ExperienceForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div className="form-div">
                <FormHeading logo={logo} text="Educational Background" />

                <form className="user-form">


                    <div className="btn-holder">
                        <button type="button" className="addBtn" onClick={this.addExp}>Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ExperienceForm;