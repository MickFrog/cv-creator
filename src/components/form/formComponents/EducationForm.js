import React, { Component } from "react";
import FormHeading from "./FormHeading";
import logo from './images/school.svg';
import EducationSnippet from "./EducationSnippet";

class EducationForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.addBg = this.addBg.bind(this);
    }

    addBg() {
        this.props.addEducation();
    }

    render() {
        return(
            <div className="form-div">
                <FormHeading logo={logo} text="Educational Background" />

                <form className="user-form">
                    {this.props.educArray.map((educObj, index) => {
                            if(this.props.educArray.length === 1) {
                                return <EducationSnippet key={educObj.id} id={educObj.id} deleteOn={false} educationChange={this.props.educationChange} />
                            }

                            if (this.props.educArray.length > 1) {
                                return <EducationSnippet bgNum={`#${index+1}`} key={educObj.id} id={educObj.id} 
                                deleteEducation={this.props.deleteEducation} educationChange={this.props.educationChange} deleteOn={true}/>
                            }

                            return null
                        })
                    }

                    {
                        this.props.educArray.length <= 2 //limit to 3 bgs; uses 2 coz of async delayed updating of educationArray
                        ?   <div className="btn-holder">
                                <button type="button" className="addBtn" onClick={this.addBg}>Add</button>
                            </div>
                        : null
                    }
                </form>
            </div>
        );
    }
}

export default EducationForm;