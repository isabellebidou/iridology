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
import Logo from "./Logo";

// <a href="/"><img className="logo" src="/seagul.png" alt="logo" loading="eager" title="iridology by isabelle logo"></img></a>
class Header extends Component {

  componentDidMount() {
    this.props.fetchCookieValue();

  }


  renderContent() {

    const isAdmin = this.props.auth && this.props.auth.type === 'admin';
    const isOnProfile = this.props.location.pathname === '/readings';
    const isHome = this.props.location.pathname === '/';


    return (

      <div className="authentication">
        <a key={9 + '/herbs'}
          href='https://herb.iridologyreadings.com/'
          className="button"
        >
          Isabelle's herbs
        </a>
        <Link key={4 + '/shop'}
          to={'/shop'}
          className="button"
        >
          Affiliate shop
        </Link>
        <Link key={3 + '/parasitedetox'}
          to={'/parasitedetox'}
          className="button"
        >
          GI track detox
        </Link>
        <Link key={3 + '/adrenalfatigue'}
          to={'/adrenalfatigue'}
          className="button"
        >
          Adrenal fatigue
        </Link>
        {isAdmin && (
          <a key={9} className="button" href="/users"><FaUsers
            style={{ color: "#7f5f87" }}
            key={'FaUsers'}

          />

          </a>
        )}

        {isHome === false &&
          <Link key={3 + 'nothome'}
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
        {(this.props.auth && isOnProfile === false) &&
          <a key={4} className="button" href="/api/logout"><AiOutlineLogout
            style={{ color: "#7f5f87" }}
            key={'AiOutlineMenu'}
          /></a>}
        {(!this.props.auth && isHome) &&
          <a href="/auth/google"><img src="/btn_google_signin_dark_normal_web.png" loading="lazy" title="sign in with google" alt="sign in with google" /></a>
        }
      </div>

    );


  }
  render() {
    const { cookie } = this.props;

    return (
      <div className="header">
        
       <Logo />

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

