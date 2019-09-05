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
            <p>An error occured while loading App Two</p>
          </header>
        </div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>This is APP TWO</p>

          <br />
          <a className="App-link" href="/root">
            Go to Back to the Root App
          </a>
          <br />
          <a className="App-link" href="/one">
            Go to App One
          </a>
        </header>
      </div>
    );

  }
}

export default App;
