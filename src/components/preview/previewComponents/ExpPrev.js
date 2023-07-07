import React, { Component } from "react";
import ExpPrevSnippet from "./ExpPrevSnippet";

class ExpPrev extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="previewHeading">Experience</div>
                <div className="prevInfo">
                    {this.props.experienceArr.map((obj, index) => {
                        return (
                            <ExpPrevSnippet
                                key={`${index}exp`}
                                company={obj.company}
                                role={obj.role}
                                workDone={obj.workDone}
                                timeFrame={obj.timeFrame}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ExpPrev;
