import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="enter task" />
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
