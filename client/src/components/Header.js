import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import { withRouter } from 'react-router-dom';
import MenuButton from "./MenuButton";


class Header extends Component {



  renderContent() {

    console.log(this.props.auth)
    const otherRoute = this.props.location.pathname === '/readings' ? '/' : '/readings';
    const otherRouteName = this.props.location.pathname === '/readings' ? 'home' : 'profile';
    const isAdmin = this.props.auth && this.props.auth.type === 'admin';
    const isOnProfile = this.props.location.pathname === '/readings';
    const isOnUsers = this.props.location.pathname === '/users/all';
    const isLanding = this.props.location.pathname === '/';
    switch (this.props.auth) {
      case null:

        return <div className="authentication"><a href="/auth/google"><img src="/btn_google_signin_dark_normal_web.png" /></a></div>
      case false:
        return <div className="authentication"><a href="/auth/google"><img src="/btn_google_signin_dark_normal_web.png" /></a></div>;

      default:
        return (


          <div className="authentication">
            {isAdmin && (
              <a key={9} className="button" href="/users/all">users</a>)}

            <span key={1}><Payments /></span>
            {isOnProfile || isOnUsers &&(
                          <Link key={66}
                          to={'/'}
                          className="button"
                        >
                          home
                        </Link>

            )}
            <Link key={3}
              to={this.props.auth ? otherRoute : '/'}
              className="button"
            >
              {otherRouteName}
            </Link>
            <a key={4} className="button" href="/api/logout">Logout</a>
          </div>

        );

    }

  }
  render() {
    return (
      <div className="header">
        <img className="logo" src="/iridologylogo.png" alt="logo"></img>
        {this.renderContent()}
        <MenuButton />
      </div>

    );
  }
}
function mapStateToProps({ auth }) {
  return { auth }

};
export default withRouter(connect(mapStateToProps)(Header));

