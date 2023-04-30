import React, { Component } from "react";
import './SkillsPrev.css';

class SkillsPrev extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div className="skillsPrev">
                <div className="previewHeading">Skills</div>
                <div className="prevInfo">
                    <ul className="skillList">
                    {
                        this.props.skillArray.map((obj) => {
                            return <li key={obj.id}>{obj.userSkill}</li>
                        })
                    }

                    </ul>
                </div>
            </div>
        );
    }
}

export default SkillsPrev;