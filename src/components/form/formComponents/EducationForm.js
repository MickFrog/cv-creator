import React, { Component } from "react";
import FormHeading from "./FormHeading";
import logo from './images/school.svg';
import EducationSnippet from "./EducationSnippet";
import uniqid from 'uniqid';

class EducationForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
        this.state = {
            bgArr: [uniqid()]
        }

        this.addBg = this.addBg.bind(this);
        this.deleteBg = this.deleteBg.bind(this);
    }

    addBg() {
        this.setState({
            bgArr: this.state.bgArr.concat(uniqid())
        })
    }

    deleteBg(bgKey) {
        if(this.state.bgArr.length < 2) return;

        this.setState({
            bgArr: this.state.bgArr.filter(elem => elem !== bgKey)
        })
    }

    render() {
        return(
            <div className="form-div">
                <FormHeading logo={logo} text="Educational Background" />

                <form className="user-form">
                    {this.state.bgArr.map((val, index) => {
                        if(this.state.bgArr.length === 1) {
                            return <EducationSnippet key={val} id={val} deleteOn={false}/>
                        }

                        if (this.state.bgArr.length > 1) {
                            return <EducationSnippet bgNum={`#${index+1}`} key={val} id={val} delCallback={this.deleteBg} deleteOn={true}/>
                        }

                        return null
                    })

                    }

                    {
                        this.state.bgArr.length <= 2 //limit to 3 bgs; uses 2 coz of async delayed updating of bgArr
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