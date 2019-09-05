import React, { Component } from 'react';
import './index.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div className='App'>
          <header className="App-header">
            <p>An error occured while loading the Root App</p>
          </header>
        </div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>This is a simple implementation of a
            microfrontend app using <a target='blank' href='https://single-spa.js.org'>Single-spa.js</a>
            <br />
            Each app is individually built and deployed.
            <br />
            The root app loads the modules using SystemJS
            You are currently viewing the 'root-app' module
            <br />
            <br />
            Click on the links below to view the other modules</p>

          <br />
          <a className="App-link" href="/one">
            Go to App One
          </a>
          <br />
          <a className="App-link" href="/two">
            Go to App Two
          </a>
        </header>
      </div>
    );

  }
}

export default App;
