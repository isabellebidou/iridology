import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";

const ReadingFormReview = ({onCancel, formValues, submitReading, history}) => {
    const reviewFields = formFields.map(({ name, label }) => {
        return (
          <div key = {name}>
            <label>{label}</label>
            <div>{formValues[name]}</div>
          </div>
        )
      });
    

    return (
        <div>
        <h5>please confirm your entries</h5>

            <div>{reviewFields}</div>
            <button className="yellow darken-3 btn flat white-text"
            onClick={onCancel}>
            back
            </button>
            <button 
            onClick={() => submitReading(formValues, history)}
            className="green btn-flat right white-text">
            
            <i className="material-icons right">order Reading</i>
            </button>
        </div>
    )
}


function mapStateToProps(state){
    return {
        formValues :state.form.readingForm.values
    }
}

export default connect (mapStateToProps, actions) (withRouter(ReadingFormReview));