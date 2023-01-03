import React, {Component} from "react";
import {reduxForm, Field} from 'redux-form';
import  {fetchUserData}  from "../../actions";
//handleSubmit provided by redux form
import { Link } from "react-router-dom";
import UserDataField from "./userDataField";
import { connect } from "react-redux";

import formFields from "./formFields";


class UserDataFormEdit extends Component {
  

  constructor(props) {
    super(props);
    
    this.props.fetchUserData();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }




  handleChange(event) {
    this.setState({weight: event.target.value});
  }


  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    console.log(event)
    event.preventDefault();
  }
  componentDidMount() {
   
   
   console.log(formFields)

}
findState(str){
  switch (str) {
    case 'height':
      return this.state.height
    case 'weight':
      return this.state.weight

   
    default:
      return this.state.gender

   }
  

 }
 findData(data,name){
  
   switch (name) {
    case 'height':
      console.log('findData '+data.height)
      return this.props.userdata.height
    case 'weight':
      console.log('findData '+data.weight)
      return data.weight

   
    default:
      console.log('findData '+this.props.userdata.gender)
      return data.gender

   }
  
 }



    renderFields(onCancel, submitUserDataEdit) {
      
        return (
         
              <div>
              <h5>please confirm your entries</h5>
              
              {formFields.map(({ name, label, type, compulsory }) => {
              //  console.log('userdata: '+userdata);
                return (
                  <Field
                    key={name}
                    name={name}
                    label={label}
                    type={type}
                    compulsory= {compulsory}
                  //  {this.props.userdata.name &&
                //  placeholder={this.state.weight}
                     onChange={this.handleChange}
                    //defaultValue={findData(this.props.userdata,name.toString())}
              
                  //  }
                    
                    component= {UserDataField}
                  />
              
                )
              })}
                  <button className="yellow darken-3 btn flat white-text"
                  onClick={onCancel}>
                  back
                  </button>
                  <button 
                  onClick={() => submitUserDataEdit()}
                  className="green btn-flat right white-text">
                  OK
                  <i className="material-icons right"></i>
                  </button>
              </div>
         
        ) ;
      }
 render (){
    return(
        <div>
            <form >
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
 
 /*function mapStateToProps ({userdata}) {
  console.log(userdata)
  
  
  
 
  return { userdata }
}*/
const mapStateToProps =  (state,{userdata}) => {
  console.log(state.userdata)
  return {
  userdata: userdata,
    initialValues: {
      height: state.userdata.height,
      weight: state.userdata.weight,
      gender: state.userdata.gender

    }
  }
}

UserDataFormEdit = reduxForm({
  form: 'UserDataFormEdit',
  validate,
  enableReinitialize: true,
  destroyOnUnmount: false
})(UserDataFormEdit);
/*export default connect(mapStateToProps,  fetchUserData)(reduxForm({
  form: 'userDataFormEdit',
  validate, 
  destroyOnUnmount: false
})(UserDataFormEdit));*/
//https://stackoverflow.com/questions/40262564/how-to-export-mapstatetoprops-and-redux-form
// default connect (mapStateToProps, {fetchUserData}) reduxForm({validate, form: 'userDataFormEdit', destroyOnUnmount: false})(UserDataFormEdit) ; 

//reduxForm({validate, form: 'userDataFormEdit', destroyOnUnmount: false})(UserDataFormEdit);
export default connect (mapStateToProps, {fetchUserData})(UserDataFormEdit);