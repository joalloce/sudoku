import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Switch>
        <Route exact path="/#/" component={Home}></Route>
        <Route exact path="/#/about" component={About}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
