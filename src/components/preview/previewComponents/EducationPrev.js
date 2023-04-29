import React, { Component } from "react";
import './EducationPrev.css';
import EducPrevSnippet from "./EducPrevSnippet";

class EducationPrev extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div className="educPrev">
                <div className="previewHeading">Education</div>
                <div className="prevInfo">
                    {
                        this.props.educationArr.map((obj, index) => {
                            return <EducPrevSnippet key={`${index}educ`} school={obj.schoolName} degree={obj.degreeObtained} timeFrame={obj.timeFrame}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default EducationPrev;