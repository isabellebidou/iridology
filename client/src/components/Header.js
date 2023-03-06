import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import Payments from "./Payments";
import { withRouter } from 'react-router-dom';
import MenuButton from "./MenuButton";
import { fetchCookieValue } from "../actions";



class Header extends Component {

  componentDidMount() {
    this.props.fetchCookieValue();
  }


  renderContent() {

    const otherRoute = this.props.location.pathname === '/readings' ? '/' : '/readings';
    const otherRouteName = this.props.location.pathname === '/readings' ? 'home' : 'profile';
    const isAdmin = this.props.auth && this.props.auth.type === 'admin';
    const isOnProfile = this.props.location.pathname === '/readings';
    const isOnUsers = this.props.location.pathname === '/users';




    switch (this.props.auth) {
      case null:

        return <div className="authentication"><a href="/auth/google"><img src="/btn_google_signin_dark_normal_web.png" alt="sign in with google"/></a></div>
      case false:
        return <div className="authentication"><a href="/auth/google"><img src="/btn_google_signin_dark_normal_web.png" alt="sign in with google"/></a></div>;

      default:
        return (


          <div className="authentication">
            {isAdmin && (
              <a key={9} className="button" href="/users">users</a>)}



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
    const { cookie } = this.props;

    return (
      <div className="header">
        <a href="/"><img className="logo" src="/iridologylogo.png" alt="logo"></img></a>
        {cookie === true && <span>{this.renderContent()}</span>}
        {cookie === true && <span><MenuButton /></span>}
      </div>

    );
  }
}
function mapStateToProps({ auth, cookie }) {
  return { auth, cookie }
};
export default withRouter(connect(mapStateToProps, { fetchCookieValue })(Header));

