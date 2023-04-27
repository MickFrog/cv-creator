import React, { Component } from "react";
import './ExpSnippet.css';
import deletePic from './images/delete.svg'
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";

class ExpSnippet extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.deleteExp = this.deleteExp.bind(this);
    }

    deleteExp() {
        this.props.delCallback(this.props.id);
    }

    render() {
        return(
            <div className="snippet-div">
                <div className="snip-header">
                    <h2>Experience {this.props.expNum}</h2>
                    { //don't show delete button with one experience
                        this.props.deleteOn 
                        ? <button type="button" className="delBtn"><img src={deletePic} onClick={this.deleteExp} alt="del_btn"/></button>
                        : null
                    }
                    
                </div>
                <FormInput inputName="Company" />
                <FormInput inputName="Role" />
                <FormTextArea characters={600} placeText="Briefly describe the work done at the company" />
                <FormInput inputName="Time frame" />
            </div>
        );  
    }
}

export default ExpSnippet;