import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchUserData } from "../../actions";

class DataList extends Component {

    componentDidMount() {
        this.props.fetchUserData();

    }
    /*
    gender:String,
    dob: Date,
    weight: String,
    height: String,
    history: String,
    genetics: String,
    gluten: String,
    dairy: String,
    dentalHistory: String,
    bloodType: String,
    digestion: String,
    */
    renderUserData() {
        return this.props.userData.reverse().map( data => {
            return (
                <div className="" key={data._id}>
                
                    <div className="">
                        <span className="card-title">{data._user}</span>
                        <p>{data.gender}</p>
                        <p>{data.weight}</p>
                        <p>{data.height}</p>
                        <p>{data.history}</p>
                        <p>{data.genetics}</p>
                        <p>{data.gluten}</p>
                        <p>{data.dairy}</p>
                        <p>{data.eatingHabits}</p>
                        <p>{data.dentalHistory}</p>
                        <p>{data.bloodType}</p>
                        <p>{data.digestion}</p>
                        <p>{data.comments}</p>
                        <p>{data.medication}</p>
                        <p className="right">
                        dob: {new Date(data.dob).toLocaleDateString()}</p>
                    </div>

                </div>
            );

        });

    }

    render () {
        return (
            <div>
            <h3>dataList</h3>
            {this.renderUserData()}
            </div>

        );
    }
}

function mapStateToProps ({userData}) {
    return { userData }
}

export default connect (mapStateToProps, {fetchUserData})(DataList);