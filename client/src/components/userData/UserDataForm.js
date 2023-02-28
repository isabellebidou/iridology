import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import UserDataField from "./userDataField";
import * as actions from "../../actions";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import {submitUserData} from "../../actions";



class UserDataForm extends Component {
  renderFields() {
    return (
      <div>
        {formFields.map(({ name, label, type, compulsory }) => {
          return (
            <Field
              key={name}
              name={name}
              label={label}
              type={type}
              compulsory={compulsory}
              component={UserDataField}
            />
          );
        })}
      </div>
    );
  }



  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="page">
        <fieldset>
        <form onSubmit={handleSubmit(submitUserData)}>
            {this.renderFields()}

            <Link to="/readings" className="actionupload button">
              cancel
            </Link>
            <button type="submit" className="actionupload button rightbutton">
              ok
            </button>
          </form>
        </fieldset>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = "you must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "userDataForm",
  destroyOnUnmount: false,
})(withRouter(UserDataForm));

