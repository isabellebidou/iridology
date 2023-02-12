import React from "react";
import axios from "axios";
import {reduxForm} from 'redux-form';
import { Component } from "react";
import { connect } from "react-redux";
import { fetchUserData } from "../actions";
import fieldsArray from "./userData/formFields";




class UserData extends Component {
  async componentDidMount() {
    await this.props.fetchUserData();
    await this.updateStateValuesAll();
  }
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      weight: 0,
      height: 0,
      history: "",
      genetics: "",
      gluten: "",
      dairy: "",
      eatingHabits:"",
      dentalHistory: "",
      bloodType: "",
      digestion: "",
      medication: "",
      comments: "",
    };
  }

  updateValueSingle(e) {
    console.log(e.target.name);
  }
  updateStateValue(field, v) {
    console.log("updateStateValue");
    console.log(field);
    console.log(v);
    switch (field) {
      case "gender":
        this.setState({ gender: v });
        break;
      // case "dob":
      //   this.setState({ dob: v });
      //   break;
      case "height":
        console.log("height");
        this.setState({ height: v });
        break;
      case "weight":
        this.setState({ weight: v });
        break;
      case "history":
        this.setState({ history: v });
        break;
      case "genetics":
        this.setState({ genetics: v });
        break;
      case "gluten":
        this.setState({ gluten: v });
        break;
      case "dairy":
        this.setState({ dairy: v });
        break;
      case "eatingHabits":
        this.setState({ eatingHabits: v });
        break;
      case "digestion":
        this.setState({ digestion: v });
        break;
      case "dentalHistory":
        this.setState({ dentalHistory: v });
        break;
      case "bloodType":
        this.setState({ bloodType: v });
        break;
      case "medication":
        this.setState({ medication: v });
        break;
      default:
        this.setState({ comments: v });
        break;
    }
  }
  updateStateValueWithData(field) {
    if (this.props.userdata) {
      this.props.userdata.map((data) => {
        
        switch (field.name) {
          case "gender":
            this.setState({ gender: data.gender });
            break;
          case "height":
            this.setState({ height: data.height });
            break;
          case "weight":
            this.setState({ weight: data.weight });
            break;
          case "history":
            this.setState({ history: data.history });
            break;
          case "genetics":
            this.setState({ genetics: data.genetics });
            break;
          case "gluten":
            this.setState({ gluten: data.gluten });
            break;
          case "dairy":
            this.setState({ dairy: data.dairy });
            break;
          case "eatingHabits":
              this.setState({ eatingHabits: data.eatingHabits });
              break;
          case "digestion":
              this.setState({ digestion: data.digestion });
              break;
          case "dentalHistory":
            this.setState({ dentalHistory: data.dentalHistory });
            break;
          case "bloodType":
            this.setState({ bloodType: data.bloodType });
            break;
          case "medication":
            this.setState({ medication: data.medication });
            break;
          default:
            this.setState({ comments: data.comments });
            break;
        }
      });
    }
  }
  updateStateValuesAll() {
    for (let index = 0; index < fieldsArray.length; index++) {
      const field = fieldsArray[index];
      this.updateStateValueWithData(field);
    }
  }
  async handleClick() {
    console.log("handleClick");

    //submitUserDataEdit(this.state, this.state.history);

    await axios.post("/api/userdata/edit", this.state);
    //history.push("/userdata");
    //dispatch({ type: FETCH_USER, payload: res.data });
  }

  renderUserData() {
    //return(<div>userdata</div>)

    if (this.props.userdata) {
      return this.props.userdata.map((data) => {
        return (
          <form>
            <div className="" key={'777'}>
              <div className="" key={1}>
              
                

                <label key={3} htmlFor="name">first and last name</label>
                <input
                  name="name"
                  key={111}
                  type="text"
                  defaultValue={data.name ? data.name : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label  key={4} htmlFor="gender">gender</label>
                <input
                  name="gender"
                  key={112}
                  type="text"
                  defaultValue={data.gender ? data.gender : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={5} htmlFor="weight">weight</label>
                <input
                  name="weight"
                  key={113}
                  type="number"
                  placeholder={data.weight ? data.weight : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={6} htmlFor="height">height</label>
                <input
                  name="height"
                  key={114}
                  type="number"
                  defaultValue={data.height ? data.height : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={7} htmlFor="history">history</label>
                <input
                  name="history"
                  key={115}
                  type="text"
                  defaultValue={data.history ? data.history : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={8} htmlFor="genetics">genetics</label>
                <input
                  name="genetics"
                  key={116}
                  type="text"
                  defaultValue={data.genetics ? data.genetics : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={9} htmlFor="gluten">gluten</label>
                <input
                  name="gluten"
                  key={117}
                  type="text"
                  defaultValue={data.gluten ? data.gluten : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={10} htmlFor="dairy">dairy</label>
                <input
                  name="dairy"
                  key={118}
                  type="text"
                  defaultValue={data.dairy ? data.dairy : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={11} htmlFor="eatingHabits">eating habits</label>
                <input
                  name="eatingHabits"
                  key={119}
                  type="text"
                  defaultValue={data.eatingHabits ? data.eatingHabits : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={12} htmlFor="dentalHistory">dentalHistory</label>
                <input
                  name="dentalHistory"
                  key={120}
                  type="text"
                  defaultValue={data.dentalHistory ? data.dentalHistory : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={23} htmlFor="bloodType">bloodType</label>
                <input
                  name="bloodType"
                  key={121}
                  type="text"
                  defaultValue={data.bloodType ? data.bloodType : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={33} htmlFor="digestion">digestion</label>
                <input
                  name="digestion"
                  key={122}
                  type="text"
                  defaultValue={data.digestion ? data.digestion : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={34} htmlFor="medication">medication</label>
                <input
                  name="medication"
                  key={123}
                  type="text"
                  defaultValue={data.medication ? data.medication : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={53}  htmlFor="comments">comments</label>
                <input
                  name="comments"
                  key={124}
                  type="text"
                  defaultValue={data.comments ? data.comments : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />

                <p key={63} >
                  <button className="rightbutton"
                    onClick={() => {
                      this.handleClick();
                    }}
                    type="submit"
                  >
                    edit
                  </button>
                </p>
              </div>
            </div>
          </form>
        );
      });
    } else {
      return <div>userdata</div>;
    }
  }

  render() {
    return <div>
      <fieldset>
        <legend>information</legend>
        <div className="col" key={333}>
      {this.renderUserData()}
      </div>
      </fieldset>
      
      </div>;
  }
}

function mapStateToProps({ userdata }, state) {
  return { userdata, state };
}
UserData = reduxForm({
  form: 'UserData',
 // validate,
  enableReinitialize: true,
  destroyOnUnmount: false
})(UserData);
/*export default connect(mapStateToProps,  fetchUserData)(reduxForm({
  form: 'userDataFormEdit',
 // validate, 
  destroyOnUnmount: false
})(UserData));*/
export default connect(mapStateToProps,  { fetchUserData })(UserData);
