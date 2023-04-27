import React, { Component } from "react";
import FormHeading from "./FormHeading";
import logo from './images/work.svg'
import ExpSnippet from "./ExpSnippet";
import uniqid from 'uniqid';


class ExperienceForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
        this.state = {
            expArr: [uniqid()], // initial single experience
        }

        this.addExp = this.addExp.bind(this);
        this.deleteExp = this.deleteExp.bind(this);
    }

    addExp() {
        this.setState({
            expArr: this.state.expArr.concat(uniqid())
        })
    }

    deleteExp(expKey) {
        if (this.state.expArr.length < 2) return;

        this.setState({
            expArr: this.state.expArr.filter(elem => elem !== expKey)
        })

        // console.log(this.state.expArr.filter(elem => elem !== expKey));
    } 

    render() {
        return(
            <div className="form-div">
                <FormHeading logo={logo} text="Experience" />

                <form className="user-form">
                    {this.state.expArr.map((val, index) => {
                        if (this.state.expArr.length === 1) {
                            return <ExpSnippet key={val} id={val} delCallback={this.deleteExp} deleteOn={false}/>
                        } 

                        if (this.state.expArr.length > 1) {
                            return <ExpSnippet key={val} id={val} expNum={`#${index+1}`} delCallback={this.deleteExp} deleteOn={true}/>
                        }
                        return null;
                    })}

                    {
                        this.state.expArr.length <= 2 //limit to 3 exps; uses 2 coz of async delayed updating of expArr
                        ?   <div className="btn-holder">
                                <button type="button" className="addBtn" onClick={this.addExp}>Add</button>
                            </div>
                        : null
                    }
                    
                </form>
            </div>
        );
    }
}

export default ExperienceForm;