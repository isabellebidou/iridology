import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {


  renderContent(){
    switch (this.props.auth) {
      case null:
        
        return
        case false:
          return <li><a href="/auth/google">Login with google</a></li>;
    
      default:
        return [
          <li key={1}><Payments /></li>,
          <li key={3} style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
          <li key={2}><a href="/api/logout">Logout</a></li>
          ];
         
    }

  }
  render() {
    return (
      <div>
        <nav>
          <div className ="nav-wrapper">
            <Link 
            to = {this.props.auth ? '/readings': '/'}
            className =" brand-logo Left "
            >
              Isabelle's iridology
            </Link>
            <ul id="nav-mobile" className="right ">
              
                {this.renderContent()}
              
              
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
function mapStateToProps({auth}){
  return{ auth}

};
export default connect (mapStateToProps)(Header);
