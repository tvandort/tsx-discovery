import * as React from 'react';
import FunctionalComponent from './FunctionalComponent';
import StatefulComponent from './StatefulComponent';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <span />
        <FunctionalComponent />
        <StatefulComponent />
      </div>
    );
  }
}

export default App;
