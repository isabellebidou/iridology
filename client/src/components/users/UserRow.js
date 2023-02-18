
import React from 'react';
import { connect } from "react-redux";
import { fetchSelectedReadings } from "../../actions";
import { fetchSelectedUserDataName } from "../../actions";
import { fetchSelectedUserData } from "../../actions";
import { withRouter } from "react-router-dom";
import store from "../store";
import { selectUser } from "../../actions";


class UserRow extends React.Component {
  componentDidMount() {
    this.props.fetchSelectedReadings(this.props.id);
    this.props.fetchSelectedUserData(this.props.id);
    this.props.fetchSelectedUserDataName(this.props.id);
  }

  listReadingsDates() {
    if (this.props.selectedReadings) {
      var dates = [];
      return this.props.selectedReadings.map((reading) => {
        dates.push(new Date(reading.dateSent).toLocaleDateString())
        return [];

      });
    }
  }



  handleClick = () => {
    store.dispatch(selectUser(this.props.id));
    this.props.history.push({
      pathname: '/users/dashboard',
      state: {
        id: this.props.id
      }
    });
  };

  render() {


    if (this.props.selectedUserData) {
      return this.props.selectedUserData.map((user) => {


        return (
          <tr
            key={this.props.id}
            onClick={this.handleClick}
          >
            <td>{this.props.id}</td>
            <td>{this.props.credits}</td>
            <td>{this.props.type}</td>
            <td>{user.name}</td>
            <td>{user.bloodType}</td>



          </tr>

        );
      });
    } else {
      return [];
    }


  }
}


function mapStateToProps({ selectedReadings, selectedUserData, selectedUserDataName }) {

  return { selectedReadings, selectedUserData, selectedUserDataName }
}

export default withRouter(connect(mapStateToProps, { fetchSelectedReadings, fetchSelectedUserData, fetchSelectedUserDataName })(UserRow))