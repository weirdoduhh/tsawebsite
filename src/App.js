import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Home />
      </MuiThemeProvider>
    );
  }
}

export default App;
