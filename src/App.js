import React, { Component } from 'react';
import logo from './logo.svg';
import TheForm from './components/form'
import AllPosts from './components/AllPosts'
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TheForm></TheForm>
        <AllPosts></AllPosts>
      </div>
    );
  }
}

export default App;
