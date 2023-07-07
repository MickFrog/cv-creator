import React, { Component } from "react";

class UserProfilePrev extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sectionPrev">
                <div className="previewHeading">Profile</div>
                <div className="prevInfo">{this.props.profileText}</div>
            </div>
        );
    }
}

export default UserProfilePrev;
