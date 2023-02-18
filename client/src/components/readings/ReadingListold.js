import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchReadings } from "../../actions";
import { fetchUserData } from "../../actions";


class ReadingList extends Component {

     componentDidMount() {
         this.props.fetchReadings();
         this.props.fetchUserData();
    

    }
    renderSurveys() {
        return this.props.readings.map( reading => {
            return (

                <div className="" key={reading._id}>
                <div className="item photoThumbnail">
                  
                  <p className="item">
                  {reading.comments} reading ordered on: {new Date(reading.dateSent).toLocaleDateString()}
                  </p>
                </div>
              </div>
                
            );

        });

    }
    renderUserData() {
        return this.props.userdata.map( reading => {
            return (
                <div className="" key={reading._id}>
                
                    <div className="">
                        <span className="">{reading._user}</span>
                        <p>{reading.gender}</p>
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
            <div className="grid-container">{this.renderSurveys()}</div>
            

        );
    }
}

function mapStateToProps ({readings, userdata}) {
    return { readings,userdata }
}

export default connect (mapStateToProps, {fetchReadings,fetchUserData})(ReadingList);