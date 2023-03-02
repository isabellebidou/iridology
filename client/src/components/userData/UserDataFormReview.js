import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";

const UserDataFormReview = ({onCancel, formValues, submitUserData, history}) => {
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
            <button className=""
            onClick={onCancel}>
            back
            </button>
            <button 
            onClick={() => submitUserData(formValues, history)}
            className="">
            OK
            </button>
        </div>
    )
}


function mapStateToProps(state){
    return {
        formValues :state.form.userDataForm.values
    }
}

export default connect (mapStateToProps, actions) (withRouter(UserDataFormReview));