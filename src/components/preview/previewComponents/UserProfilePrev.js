import React, { Component } from "react";
import './UserProfilePrev.css';

class UserProfilePrev extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div className="profilePrev">
                <div className="previewHeading">Profile</div>
                <div className="prevInfo"></div>
            </div>
        );
    }
}

export default UserProfilePrev;