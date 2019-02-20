import React, { Component } from "react";
import HelloWorld from "./components/presentation/HelloWorld";

class App extends Component {
  state = {
   tech : "Redux"
  }

  render() {
    return <HelloWorld tech={store.getState().tech}/>
  }
}

export default App;
