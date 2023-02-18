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

        <div key={user.user._id} className=" " onClick={() => this.handleClick(user.user._id)}>

          <p className="itemp photoThumbnail">
            {user.name}, dob: {new Date(user.dob).toLocaleDateString()}
            <br />

            credits: {user.user.credits}, type: {user.user.type}
            <br />
            {user.user._id}
          </p>

        </div>

      );

    });
  }


  render() {
    return (
      <div>

        <div className="grid-container">{this.renderUsers()}</div>

      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}


export default withRouter(connect(mapStateToProps, { fetchUsers })(UserList));