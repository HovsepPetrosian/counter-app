import './App.css';
import React from "react";
import Counter from './Counter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Hey there!</h2>
        <Counter />
      </div>
    );
  }
}

export default App;
