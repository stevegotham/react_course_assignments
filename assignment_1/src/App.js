import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  
  state = {
    name: "Sammy Boy"
  }
  
  updateName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  
  render() {
    
    
    return (
      <div className="App">
        <UserInput updateName={this.updateName} name="Betty Boop"></UserInput>
        <UserOutput name="Bob"></UserOutput>
        <UserOutput name={this.state.name}></UserOutput>
      </div>
    );
  }
}

export default App;
