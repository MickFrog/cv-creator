import React, { Component } from "react";
import "./App.css";
import PageHeader from "./components/PageHeader";
import CvContainer from "./components/CvContainer";

class App extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <PageHeader />
                <CvContainer />
            </div>
        );
    }
}

export default App;
