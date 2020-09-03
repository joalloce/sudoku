import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from "./components/Header";
import Home from "./components/Home"
import About from './components/About'
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
