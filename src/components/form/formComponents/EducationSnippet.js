import React, { Component } from "react";
import deletePic from './images/delete.svg';
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
        return(
            <div className="snippet-div">
                <div className="snip-header">
                    <h2>Background {this.props.bgNum}</h2>
                    {
                        this.props.deleteOn
                        ? <button type="button" className="delBtn"><img src={deletePic} onClick={this.delBg} alt="del_btn"/></button>
                        : null
                    }
                    
                </div>

                <FormInput inputName="School attended"/>
                <FormInput inputName="Certificate/Degree obtained"/>
                <FormInput inputName="Time frame"/>
            </div>
        );
    }
}

export default EducationSnippet;