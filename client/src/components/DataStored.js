import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";



import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';










class DataStored extends Component {
  renderContent() {

    return (
      <div>
        <div>
          {this.props.auth.map(item => (
            <div key={item.id}>{item.text}</div>
          ))}
        </div>
        <div>
          {this.props.userdata.map(item => (
            <div key={item.id}>{item.text}</div>
          ))}
        </div>
        <div>
          {this.props.eyes.map(item => (
            <div key={item.id}>{item.text}</div>
          ))}
        </div>
        <div>
          {this.props.form.map(item => (
            <div key={item.id}>{item.text}</div>
          ))}
        </div>
        <div>
          {this.props.readings.map(item => (
            <div key={item.id}>{item.text}</div>
          ))}
        </div>
      </div>
    );

  }



  render() {
    return (
      <div className="container">
        {this.renderContent()}
      </div>
    );
  }
}
function mapStateToProps({ auth, userdata, eyes, form, readings }) {
  return { auth, userdata, eyes, form, readings }

};

export default withRouter(connect(mapStateToProps)(DataStored));
