import React, { PureComponent } from "react";
import { MainContainer } from "./components/MainContainer";
import { Router } from "react-router-dom";
import history from "./history";


class App extends PureComponent {
  render() {
    return (
      <Router history={history}>
      <MainContainer></MainContainer>
      </Router>
    );
  }
}


export default App;
