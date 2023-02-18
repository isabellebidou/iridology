
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Payments from "./Payments";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import $ from 'jquery';




class MobileMenu extends Component {

    navClick() {
        $("#mobilemenu").slideToggle();
    }

    renderMobileMenu() {
        const currentlyOnProfile = this.props.location.pathname === '/readings'? true: false;
        const otherRoute = currentlyOnProfile ? '/' : '/readings';
        const otherRouteName = currentlyOnProfile ? 'home' : 'profile';
        const enoughCredits = this.props.auth && this.props.auth.credits >= 80? true : false;
        const ready = this.props.auth && enoughCredits && this.props.userdata && this.props.eyes && currentlyOnProfile ? true : false;
        const isAdmin = this.props.auth && this.props.auth.type === 'admin';
        if (ready && isAdmin) {

            return (
                <ul id="mobilemenuul">
                     <li><Link key={6} to="/users/all" className="mobilemenuli button" >
                        users
                    </Link></li>

                    <li><Link key={6} to="/readings/new" className="mobilemenuli button" >
                        book a reading
                    </Link></li>
                    <li key={2} className="mobilemenuli button">
                        <Payments />
                    </li>
                    <li>
                        <Link key={3} className="mobilemenuli button" to={this.props.auth ? otherRoute : '/'}> {otherRouteName} </Link>
                    </li>
                    <li>
                        <a key={4} className="mobilemenuli button" href="/api/logout">Logout</a>
                    </li>
                </ul>
            )
            

        } else if (ready) {

            return (
                <ul id="mobilemenuul">

                    <li><Link key={6} to="/readings/new" className="mobilemenuli button" >
                        book a reading
                    </Link></li>
                    <li key={2} className="mobilemenuli button">
                        <Payments />
                    </li>
                    <li>
                        <Link key={3} className="mobilemenuli button" to={this.props.auth ? otherRoute : '/'}> {otherRouteName} </Link>
                    </li>
                    <li>
                        <a key={4} className="mobilemenuli button" href="/api/logout">Logout</a>
                    </li>
                </ul>
            )
            

        } else  if (this.props.auth  && !currentlyOnProfile) {

            return (
                <ul id="mobilemenuul">
                    <li><Link key={6} to="/readings" className="mobilemenuli button" >
                        first steps
                    </Link></li>

                    <li key={2} className="mobilemenuli button">
                        <Payments />
                    </li>
                    <li>
                        <Link key={3} className="mobilemenuli button" to={this.props.auth ? otherRoute : '/'}> {otherRouteName} </Link>
                    </li>
                    <li>
                        <a key={4} className="mobilemenuli button" href="/api/logout">Logout</a>
                    </li>
                </ul>
            )

        } else if (this.props.auth) {
            <ul id="mobilemenuul">
                    

                    <li key={2} className="mobilemenuli button">
                        <Payments />
                    </li>
                    <li>
                        <Link key={3} className="mobilemenuli button" to={this.props.auth ? otherRoute : '/'}> {otherRouteName} </Link>
                    </li>
                    <li>
                        <a key={4} className="mobilemenuli button" href="/api/logout">Logout</a>
                    </li>
                </ul>

        } else {
            return <a href="/auth/google"><img src="/btn_google_signin_dark_normal_web.png" /></a>;

        }
        


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
    return { auth ,eyes, userdata};
}

export default withRouter(connect(mapStateToProps)(MobileMenu));

