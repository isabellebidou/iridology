import React, {Component} from "react";
import {reduxForm, Field} from 'redux-form';
//handleSubmit provided by redux form
import { Link } from "react-router-dom";
import UserDataField from "./userDataField";

import formFields from "./formFields";

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
                  compulsory= {compulsory}
                  component= {UserDataField}
                />

              )
            })}
          </div>
        ) ;
      }
 render (){
    return(
        <div>
            <form onSubmit={this.props.handleSubmit(this.props.onUserDataSubmit)}>
                {this.renderFields()}
               
                <button type="submit" className="teal btn-flat right white-text">next
                <i className="material-icons right">done</i>
                
                </button>

                <Link to = "/UserDatas" className="red btn-flat left white-text">cancel
                <i className="material-icons left">cancel</i>
                
                </Link>
            </form>
        </div>
    )

 }
}

function validate(values) {
    const errors = {};

    formFields.forEach(({name}) => {
        if(!values[name]){
            errors[name] = 'you must provide a value'
        }
        
    });
    
    return errors;  
 }
export default reduxForm({
    validate,
    form: 'userDataForm',
    destroyOnUnmount: false
}) (UserDataForm)