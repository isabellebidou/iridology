import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import Payments from "./Payments";
import { withRouter } from 'react-router-dom';
import MenuButton from "./MenuButton";
import { fetchCookieValue } from "../actions";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

class Header extends Component {

  componentDidMount() {
    this.props.fetchCookieValue();
  }


  renderContent() {

    //const otherRoute = this.props.location.pathname === '/readings' ? '/' : '/readings';
    // const otherRouteName = this.props.location.pathname === '/readings' ? 'home' : 'profile';
    const isAdmin = this.props.auth && this.props.auth.type === 'admin';
    const isOnProfile = this.props.location.pathname === '/readings';
    const isHome = this.props.location.pathname === '/';
    const isOnUsers = this.props.location.pathname === '/users';




    switch (this.props.auth) {
      case null:

        return <div className="authentication"><a href="/auth/google"><img src="/btn_google_signin_dark_normal_web.png" loading="lazy" title="sign in with google" alt="sign in with google" /></a></div>
      case false:
        return <div className="authentication"><a href="/auth/google"><img src="/btn_google_signin_dark_normal_web.png" loading="lazy" title="sign in with google"  alt="sign in with google" /></a></div>;

      default:
        return (


          <div className="authentication">
            {isAdmin && (
              <a key={9} className="button" href="/users"><FaUsers
                style={{ color: "#7f5f87" }}
                key={'FaUsers'}

              />

              </a>
            )}

            {isHome === false &&
              <Link key={3+'nothome'}
                to={'/'}
                className="button"
              >
                <AiOutlineHome
                  style={{ color: "#7f5f87" }}
                  key={'AiOutlineMenu'}
                />
              </Link>}



            {(this.props.auth && isOnProfile === false) &&
              <Link key={3}
                to={'/readings'}
                className="button"
              >
                <AiOutlineUser
                  style={{ color: "#7f5f87" }}
                  key={'AiOutlineMenu'}
                />
              </Link>}
            <a key={4} className="button" href="/api/logout"><AiOutlineLogout
              style={{ color: "#7f5f87" }}
              key={'AiOutlineMenu'}
            /></a>
          </div>

        );

    }

  }
  render() {
    const { cookie } = this.props;

    return (
      <div className="header">
        <a href="/"><img className="logo" src="/iridologylogo.png" alt="logo" loading="lazy" title="logo"></img></a>
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

