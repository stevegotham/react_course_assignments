import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
  state = {
    text: "",
  }  
  
  updateTextHandler = (event) => {
    this.setState({
      text: event.target.value
    });
  }
  
  removeCharHandler = (index) => {
    let oldCharList = [...this.state.text];
    // let oldCharList = this.state.text.split(''); // pre-es6 syntax
    oldCharList.splice(index,1);
    let newCharList = oldCharList.join('');
    this.setState({
      text: newCharList
    })
  }
  
  render() {
    
    const p_style = {
      maxWidth: '400px',
      display: 'block',
      margin: '0 auto',
      textAlign: 'center',
      color: 'darkblue'
    };
    
    let charList = [...this.state.text].map((char, index) => {
      return (
        <CharComponent
          char={char}
          clicked={() => this.removeCharHandler(index)} />
      )
    });
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input type="text" value={this.state.text} onChange={this.updateTextHandler} />
        <p style={p_style}>{this.state.text}</p>
        <p>{this.state.text.length}</p>
        <ValidationComponent textLength={this.state.text.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
