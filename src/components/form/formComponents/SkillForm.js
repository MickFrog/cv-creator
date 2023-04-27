import React, { Component } from "react";
import FormHeading from "./FormHeading";
import logo from './images/skill.svg'
import SkillSnippet from "./SkillSnippet";
import uniqid from 'uniqid'

class SkillForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            skillArr: [uniqid()]
        }
        
        this.delSkill = this.delSkill.bind(this);
        this.addSkill = this.addSkill.bind(this);
    }

    addSkill() {
        this.setState({
            skillArr: this.state.skillArr.concat(uniqid())
        })
    }

    delSkill(skillKey) {
        if (this.state.skillArr.length < 2) return; //have at least one skill

        this.setState({
            skillArr: this.state.skillArr.filter(elem => elem !== skillKey)
        })
    }

    render() {
        return(
            <div className="form-div">
                <FormHeading logo={logo} text="Skills & Technologies" />

                <form className="user-form">
                {this.state.skillArr.map((val) => {
                        if (this.state.skillArr.length === 1) {
                            return <SkillSnippet key={val} id={val} delCallback={this.delSkill} deleteOn={false}/>
                        } 

                        if (this.state.skillArr.length > 1) {
                            return <SkillSnippet key={val} id={val} delCallback={this.delSkill} deleteOn={true}/>
                        }
                        return null;
                    })}
                
                    <div className="btn-holder">
                        <button type="button" className="addBtn" onClick={this.addSkill}>Add</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default SkillForm;
