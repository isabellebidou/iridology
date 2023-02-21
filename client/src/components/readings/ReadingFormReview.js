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
            <button 
            onClick={onCancel}>
            back
            </button>
            <button 
            onClick={() => submitReading(formValues, history)}
            >
            
            order Reading
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