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
import EyePic from "./EyePic";
import ProtectedRoute from "./ProtectedRoute";








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
            <ProtectedRoute exact path="/readings" component={Dashboard} />
            <ProtectedRoute exact path="/readings/new" component={ReadingNew} />
            <ProtectedRoute exact path="/userdata/new" component={UserDataNew} />
            <ProtectedRoute exact path="/userdata" component={UserData} />
            <ProtectedRoute exact path="/userdata/edit" component={UserDataFormEdit} />
            <ProtectedRoute exact path="/eyePic" component={EyePic} />

            <ProtectedRoute exact path="/eyes/new" component={Eyes} />
            <MobileMenu />
            
            <Footer />
            

          
        </BrowserRouter>
      </div>
    );
  }
}

export default connect (null, actions)(App);
