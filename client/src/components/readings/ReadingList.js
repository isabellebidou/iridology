import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchReadings } from "../../actions";

class ReadingList extends Component {

    componentDidMount() {
        this.props.fetchReadings();

    }
    renderSurveys() {
        return this.props.readings.reverse().map( reading => {
            return (
                <div className="card blue-grey darken-1" key={reading._id}>
                
                    <div className="card-content white-text">
                        <span className="card-title">{reading._user}</span>
                        <p>{reading.body}</p>
                        <p>{reading.comments}</p>
                        <p className="right">
                        sent on: {new Date(reading.dateSent).toLocaleDateString()}</p>
                    </div>

                </div>
            );

        });

    }

    render () {
        return (
            <div>
            <h3>ReadingList</h3>
            {this.renderSurveys()}
            </div>

        );
    }
}

function mapStateToProps ({readings}) {
    return { readings }
}

export default connect (mapStateToProps, {fetchReadings})(ReadingList);