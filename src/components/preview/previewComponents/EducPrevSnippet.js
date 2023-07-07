import React, { Component } from "react";
import "./EducPrevSnippet.css";

class EducPrevSnippet extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="educPrevSnip">
                <div className="schoolNamePrev">{this.props.school}</div>
                <div>{this.props.degree}</div>
                <div>{this.props.timeFrame}</div>
            </div>
        );
    }
}

export default EducPrevSnippet;
