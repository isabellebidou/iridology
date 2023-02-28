import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";
import { withRouter } from "react-router-dom";
import store from "../store";
import { selectUser } from "../../actions";




class UserList extends Component {

  componentDidMount() {
    this.props.fetchUsers();

  }

  handleClick = (userId) => {
    store.dispatch(selectUser(userId));
    this.props.history.push({
      pathname: '/users/dashboard'
    });
  };

  renderUsers() {
    return this.props.users.map(user => {
      return (

        <div key={user._id} className=" " onClick={() => this.handleClick(user._id)}>

          <p className="itemp photoThumbnail">

            type: {user.type} email: {user.email}
            <br />
            id: {user._id}
            {user.data &&
            <span>
            {user.data.fname} {user.data.lname}, dob: {new Date(user.data.dob).toLocaleDateString()}
            <br />
            </span>}
          </p>

        </div>

      );

    });
  }


  render() {
    return (
      <div className="page">

        <div className="grid-container">{this.renderUsers()}</div>

      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}


export default withRouter(connect(mapStateToProps, { fetchUsers })(UserList));