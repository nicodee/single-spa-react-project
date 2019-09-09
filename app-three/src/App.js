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
            <p>An error occured while loading the App Three</p>
          </header>
        </div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">

          <a className="App-link" href="/">
            Go to App One
          </a>
          <br />

          <a className="App-link" href="/two">
            Go to App Two
          </a>
          <br />

          <h1>This is APP THREE</h1>
        </header>
      </div>
    );

  }
}

export default App;
