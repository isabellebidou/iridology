import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
//import { createRoot } from 'react-dom/client';
import Header from "./Header";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import Landing from "./Landing";
import { connect } from "react-redux";
import * as actions from '../actions';
import Dashboard from "./Dashboard";
import ReadingNew from "./readings/ReadingNew";
import UserDataNew from "./userData/UserDataNew";
import UserData from "./UserData";
import UserDataFormEdit from "./userData/UserDataFormEdit";
import UserDataForm from "./userData/UserDataForm";
import Eyes from "./Eyes";








class App extends Component {
  componentDidMount(){
    console.log("client app.js component did mount")
    this.props.fetchUser();

  }
  render() {
    return (
      <div className="maincontent">
        <BrowserRouter>
        
         
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/readings" component={Dashboard} />
            <Route exact path="/readings/new" component={ReadingNew} />
            <Route exact path="/userdata/new" component={UserDataNew} />
            <Route exact path="/userdata" component={UserData} />
            <Route exact path="/userdata/edit" component={UserDataFormEdit} />

            <Route exact path="/eyes/new" component={Eyes} />
            <MobileMenu />
            
            <Footer />
            

          
        </BrowserRouter>
      </div>
    );
  }
}

export default connect (null, actions)(App);
