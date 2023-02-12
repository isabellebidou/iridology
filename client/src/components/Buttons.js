import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchUserEyePics } from "../actions";
import { fetchUserData } from "../actions";
import { Link } from "react-router-dom";
import Payments from "./Payments";


class Buttons extends Component {
  componentDidMount() {
    this.props.fetchUserEyePics();
    this.props.fetchUserData();

  }


  renderButton() {
    const enoughCredits = this.props.auth && this.props.auth.credits >= 80?  true :false;


    if (!this.props.userdata) {
        return (
        
          <div className="">
            <Link to="/userdata/new" className="">
              <button className="actionbook" >fill in the form</button>
            </Link>
          </div>
        );
  
      } 
      else if (!this.props.eyes) {
      return (
        <div className="">
            <Link to="/eyes/new" className="">
          <button className="actionbook ">upload eye pics</button>
        </Link>
          
        </div>
      );

    } else if (!enoughCredits){
      return []

    } else {
      return (<div className="">
        
        <Link to="/readings/new" className="">
            <button className="actionbook" >new reading</button>
          </Link>
      </div>)
    }

  }



  render() {
    return (
      <div>
        

        {this.renderButton()}
      </div>
    );
  }
}

function mapStateToProps({ eyes, userdata, auth }) {
  return { eyes, userdata, auth };
}

export default connect(mapStateToProps, { fetchUserEyePics, fetchUserData })(Buttons);