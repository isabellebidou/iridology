import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends Component {
  render() {
    const { component: Component, auth, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          auth ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth }

};

export default connect(mapStateToProps) (ProtectedRoute);