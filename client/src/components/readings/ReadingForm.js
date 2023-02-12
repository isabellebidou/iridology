import React, {Component} from "react";
import {reduxForm, Field} from 'redux-form';
//handleSubmit provided by redux form
import { Link } from "react-router-dom";
import ReadingField from "./ReadingField";

import formFields from "./formFields";

class ReadingForm extends Component {

    renderFields() {
        return (
          <div>
            {formFields.map(({ name, label, type }) => {
              return (
                <Field
                  key={name}
                  name={name}
                  label={label}
                  type={type}
                  component={ReadingField}
                />
              )
            })}
          </div>
        ) ;
      }
 render (){
    return(
        <div>
            <form onSubmit={this.props.handleSubmit(this.props.onReadingSubmit)}>
                {this.renderFields()}
               
                <button type="submit" className="">
                <i className="">next</i>
                
                </button>

                <Link to = "/readings" className="">
                <i className="">cancel</i>
                
                </Link>
            </form>
        </div>
    )

 }
}

function validate(values) {
    const errors = {};

    formFields.forEach(({name, mandatory}) => {
        if(!values[name] && mandatory == true){
            errors[name] = 'you must provide a value'
        }
        
    });
    
    return errors;  
 }


export default reduxForm({
    validate,
    form: 'readingForm',
    destroyOnUnmount: false
}) (ReadingForm)