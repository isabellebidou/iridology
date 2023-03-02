
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
//import Payments from "./Payments";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import $ from 'jquery';




class MobileMenu extends Component {

    navClick() {
        $("#mobilemenu").slideToggle();
    }

    renderMobileMenu() {
        const currentlyOnProfile = this.props.location.pathname === '/readings' ? true : false;
        const otherRoute = currentlyOnProfile ? '/' : '/readings';
        const otherRouteName = currentlyOnProfile ? 'home' : 'profile';
        const ready = this.props.auth && this.props.userdata.length > 0 && this.props.eyes.length > 2 && currentlyOnProfile ? true : false;
        const isAdmin = this.props.auth && this.props.auth.type === 'admin';


        return (
            <ul id="mobilemenuul">
                {!this.props.auth &&
                    <a href="/auth/google"><img src="/btn_google_signin_dark_normal_web.png" /></a>
                }
                {(this.props.auth && isAdmin) &&
                    <li><Link key={6} to="/users" className="mobilemenuli button" >
                        users
                    </Link></li>}
                {(ready && currentlyOnProfile) &&
                    <li><Link key={6} to="/readings/new" className="mobilemenuli button" >
                        book a reading
                    </Link></li>}
                {this.props.auth &&
                    <li>
                        <Link key={3} className="mobilemenuli button" to={this.props.auth ? otherRoute : '/'}> {otherRouteName} </Link>
                    </li>}
                {this.props.auth &&
                    <li>
                        <a key={4} className="mobilemenuli button" href="/api/logout">Logout</a>
                    </li>}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <div data-role="navbar" id="mobilemenu" onClick={this.navClick}>

                    {this.renderMobileMenu()}

                </div>
            </div>
        );
    }

}
function mapStateToProps({ auth, eyes, userdata }) {
    return { auth, eyes, userdata };
}

export default withRouter(connect(mapStateToProps)(MobileMenu));

