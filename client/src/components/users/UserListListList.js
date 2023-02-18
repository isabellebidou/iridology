import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";
import UserRow from "./UserRow";
import { withRouter } from "react-router-dom";


class UserList extends Component {

    componentDidMount() {

        this.props.fetchUsers();

    }
    
    renderUsers() {
        return this.props.users.map(user => {
            return (
                <UserRow
                    id={user._id}
                    key={user._id}
                    credits={user.credits}
                    type={user.type}
                />

            );

        });

    }

    render() {
        return (
            <div>
                <h2>users</h2>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>credits</th>
                            <th>type</th>
                            <th>name</th>
                            <th>bloodtype</th>
                            <th>readings</th>
                            <th>completed readings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUsers()}
                    </tbody>



                </table>
            </div>


        );
    }
}

function mapStateToProps({ users }) {
    return { users }
}

export default withRouter(connect(mapStateToProps, { fetchUsers })(UserList));