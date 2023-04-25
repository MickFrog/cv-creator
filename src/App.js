import React, { Component } from "react";
import './App.css';
import PageHeader from './components/PageHeader'

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    
  }

  render() {
    return(
      <div>
        <PageHeader />
      </div>
    );
  }
}

export default App;
