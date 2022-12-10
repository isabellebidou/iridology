import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
//import { createRoot } from 'react-dom/client';
import Header from "./Header";
import Landing from "./Landing";
import { connect } from "react-redux";
import * as actions from '../actions';
import Dashboard from "./Dashboard";
import ReadingNew from "./readings/ReadingNew";







class App extends Component {
  componentDidMount(){
    this.props.fetchUser();

  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/readings" component={Dashboard} />
            <Route exact path="/readings/new" component={ReadingNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect (null, actions)(App);
