import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Routes>
    </>
  );
}

export default App;
