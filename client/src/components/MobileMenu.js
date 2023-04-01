
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
//import Payments from "./Payments";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import $ from 'jquery';




class MobileMenu extends Component {

    navClick() {
        $("#mobilemenu").slideToggle();
    }

    renderMobileMenu() {
        const currentlyOnProfile = this.props.location.pathname === '/readings' ? true : false;
        //const otherRoute = currentlyOnProfile ? '/' : '/readings';
        //const otherRouteName = currentlyOnProfile ? 'home' : 'profile';
        const ready = this.props.auth && this.props.userdata.length > 0 && this.props.eyes.length > 2 && currentlyOnProfile ? true : false;
        const isAdmin = this.props.auth && this.props.auth.type === 'admin';
        const isHome = this.props.location.pathname === '/' ? true : false;


        return (
            <ul id="mobilemenuul">
                {!this.props.auth &&
                    <a href="/auth/google"><img src="/btn_google_signin_dark_normal_web.png" alt="sign in with google" /></a>
                }
                {(this.props.auth && isAdmin) &&
                    <li><Link key={6} to="/users" className="mobilemenuli button" >
                        <FaUsers
                            style={{ color: "#7f5f87" }}
                            key={'FaUsers'}

                        />
                    </Link></li>}
                {(ready && currentlyOnProfile) &&
                    <li><Link key={6} to="/readings/new" className="mobilemenuli button" >
                        book a reading
                    </Link></li>}
                {isHome === false &&
                    <li><Link key={3}
                        to={'/'}
                        className="mobilemenuli button"
                    >
                        <AiOutlineHome
                            style={{ color: "#7f5f87" }}
                            key={'AiOutlineHome'}
                        />
                    </Link></li>}

                {(this.props.auth && currentlyOnProfile === false) &&
                    <li>

                        <a key={4} className="mobilemenuli button" href="/readings"><AiOutlineUser
                            style={{ color: "#7f5f87" }}
                            key={'AiOutlineUser'}
                        /></a>

                    </li>}
                {this.props.auth &&
                    <li>
                        <a key={4} className="mobilemenuli button" href="/api/logout"><AiOutlineLogout
                            style={{ color: "#7f5f87" }}
                            key={'AiOutlineMenu'}
                        /></a>
                    </li>}

                <li><Link key={3 + '/parasitedetox'}
                    to={'/parasitedetox'}
                    className="mobilemenuli button"
                >
                    GI track detox
                </Link></li>
                <li><Link key={3 + '/adrenalfatigue'}
                    to={'/adrenalfatigue'}
                    className="mobilemenuli button"
                >
                    Adrenal fatigue
                </Link></li>
                <li><Link key={4 + '/shop'}
                    to={'/shop'}
                    className="mobilemenuli button"
                >
                    Affiliate shop
                </Link></li>
                <a key={9 + '/herbs'}
                    href='https://herb.iridologyreadings.com/'
                    className="mobilemenuli button"
                >
                    Isabelle's herbs
                </a>
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

