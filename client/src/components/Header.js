import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import { withRouter } from 'react-router-dom';
import MenuButton from "./MenuButton";


class Header extends Component {



  renderContent() {
   

    const otherRoute = this.props.location.pathname === '/readings'? '/': '/readings';
    const otherRouteName = this.props.location.pathname === '/readings'? 'home': 'profile';
    switch (this.props.auth) {
      case null:

        return <a href="/auth/google"><img  src="/btn_google_signin_dark_normal_web.png"/></a>
      case false:
        return <a href="/auth/google"><img  src="/btn_google_signin_dark_normal_web.png"/></a> ;

      default:
        return [
          
          
          
         
          <span key={1}><Payments /></span>,
          <Link key={3}
            to={this.props.auth ? otherRoute : '/'}
            className="button"
          >
            {otherRouteName}
          </Link>,
          <a key={4} className="button" href="/api/logout">Logout</a>,
          
        ];

    }

  }
  render() {
    return (
      <div className="header">
        <img className="logo" src="/iridologylogo.png" alt="logo"></img>
        
          <div className="authentication">
            
            {this.renderContent()}

          </div>
          <MenuButton />
          
        
      </div>

      
    );
  }
}
function mapStateToProps({ auth  }) {
  return { auth }

};
export default withRouter(connect(mapStateToProps)(Header));

