import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import Payments from "./Payments";


class ReviewButton extends Component {
  componentDidMount() {
    this.props.fetchUserEyePics();
    this.props.fetchUserData();
  }

  render() {
    return (
      <div>
         <button className="actionreview" >leave a review</button>
      </div>
    );
  }

}
function mapStateToProps({  auth }) {
  return {  auth };
}

export default connect(mapStateToProps, { })(ReviewButton);