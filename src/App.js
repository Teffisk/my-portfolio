import React, { Component } from "react";
import "./App.css";
import { Button, Icon } from "react-materialize";
import ProjectsList from "./Components/ProjectsList";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Home from "./Components/Home";
import Connect from "./Components/Connect";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="page-view">
            <header className="App-header">
              <nav>
                <Header />
              </nav>
            </header>
            <div className="content">
              <Route exact path="/" component={() => <Home />} />
              <Route path="/projects" component={() => <ProjectsList />} />
              <Route path="/connect" component={() => <Connect />} />
            </div>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
