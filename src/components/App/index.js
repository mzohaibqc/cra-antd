import React, { Component } from 'react';
import { Button } from 'antd';
import './index.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button type="primary" size="large">
            Button
          </Button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;