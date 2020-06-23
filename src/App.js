import React, { Component } from 'react';
import Titles from './component/Titles';
import Form from './component/Form';
import Weather from './component/Weather';

const API_KEY = "8b8a2a4a64a0391912ad8bd7b4c1503c";

class App extends Component {
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    )
  }
}

export default App;