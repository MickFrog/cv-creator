import React, { Component } from "react";
import './ExpPrevSnippet.css';

class ExpPrevSnippet extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div className="expPrevSnip">
                <div className="companyPrev">{this.props.company}</div>
                <div className="rolePrev">{this.props.role}</div>
                <div className="timePrev">{this.props.timeFrame}</div>
                <div className="workDonePrev">{this.props.workDone}</div>
            </div>
        );
    }
}

export default ExpPrevSnippet;