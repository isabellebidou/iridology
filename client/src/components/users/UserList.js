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

        <div key={user._id} className="bkground" onClick={() => this.handleClick(user._id)} >

          <p className="itemp photoThumbnail ">

            type: {user.type} <br />email: {user.email}<br />

            user id: {user._id}<br />
            </p>
            {user.readings.length >0 &&
            <h2 className="itemp">Readings booked</h2>
    }
            <ul className=" itemp">
              {user.readings.map((reading) => (
                <li key={reading._id}>
                  <span>Expectations: {reading.expectations}</span> <br />
                  <span>date booked: {new Date(reading.dateSent).toLocaleDateString()}</span> <br />
                  {!reading.dateCompleted &&
                    <span className="flag">New Feedback booked! </span>
                  }
                  {reading.dateCompleted &&
                    <span>date Completed: {new Date(reading.dateCompleted).toLocaleDateString()}</span>
                  }

                  {/* Render other properties as needed */}
                </li>
              ))}
            </ul>
          

        </div>

      );

    });
  }


  render() {
    return (
      <div className="page">

        <fieldset>
          <legend><h2> Users Dashboard </h2></legend>

          <div className="grid-container">{this.renderUsers()}</div>
        </fieldset>

      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}


export default withRouter(connect(mapStateToProps, { fetchUsers })(UserList));