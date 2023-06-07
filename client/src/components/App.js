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
import SelectedUserDashboard from "./SelectedUserDashboard";
import ReadingNew from "./readings/ReadingNew";
import UserData from "./UserData";
import UserDataFormEdit from "./userData/UserDataFormEdit";
import UserDataFormNew from "./userData/UserDataFormNew";
import Eyes from "./Eyes";
import EyePic from "./EyePic";
import ProtectedRoute from "./ProtectedRoute";
//import RestrictedRoute from "./RestrictedRoute";
import AdminDashboard  from "./AdminDashboard";
import FaqList from "./faqs/FaqList";
import FaqForm from "./faqs/FaqForm";
import LinkList from "./links/LinkList";
import LinkForm from "./links/LinkForm";
import Payment from "./Payment";
import Completion from "./Completion";
import LegalNotice from "./LegalNotice";
import MentionsLegales from "./MentionsLegales";
import ParasiteDetox from "./ParasiteDetox";
import AdrenalFatigue from "./AdrenalFatigue";
import Shop from "./Shop";






class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
    this.props.fetchCookieValue();

    

  }
  render() {
    return (
      <div className="maincontent">
        <BrowserRouter>
        
         
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/readings" component={Dashboard} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/parasitedetox" component={ParasiteDetox} />
            <Route exact path="/adrenalfatigue" component={AdrenalFatigue} />
            <Route path="/payment" component={Payment } />
            <Route exact path="/completion" component={Completion } />
            <ProtectedRoute exact path="/readings/new" component={ReadingNew} />
            <ProtectedRoute exact path="/userdata/new" component={UserDataFormNew} />
            <ProtectedRoute exact path="/userdata" component={UserData} />
            <ProtectedRoute exact path="/userdata/edit" component={UserDataFormEdit} />
            <ProtectedRoute exact path="/eyepic" component={EyePic} />
            <ProtectedRoute exact path="/eyes/new" component={Eyes} />
            <ProtectedRoute exact path="/users/dashboard" component={SelectedUserDashboard} />
           
            <Route exact path="/users" component={AdminDashboard} />
            <Route exact path="/faq/list" component={FaqList} />
            <Route exact path="/link/list" component={LinkList} />
            <Route exact path="/faq/add" component={FaqForm} />
            <Route exact path="/link/add" component={LinkForm} />
            <Route exact path="/admin" component={AdminDashboard} />
            <Route exact path="/mentionslegales" component={MentionsLegales} />
            <Route exact path="/legalnotice" component={LegalNotice} />
            <MobileMenu />
            
            <Footer />
            

          
        </BrowserRouter>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth }

};


export default connect (mapStateToProps, actions)(App);
