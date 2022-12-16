import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import {connect} from 'react-redux'
import * as actions from '../actions'

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="iridology reading"
        description="80 euros for 1 credit"
        amount={8000}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">add credits</button>
      </StripeCheckout>
    );
  }
}
export default connect(null, actions) (Payments);
