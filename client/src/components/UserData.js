import React from "react";
import axios from "axios";
import {reduxForm} from 'redux-form';
import { Component } from "react";
import { connect } from "react-redux";
import { fetchUserData } from "../actions";
import * as actions from "../actions";
import fieldsArray from "./userData/formFields";
import {submitUserDataEdit} from "../actions";



class UserData extends Component {
  async componentDidMount() {
    await this.props.fetchUserData();
    await this.updateStateValuesAll().then((userdata) => {
      console.log(this.state);
    });
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
      case "dentalHistory":
        this.setState({ dentalHistory: v });
        break;
      case "bloodType":
        this.setState({ bloodtype: v });
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
      return this.props.userdata.map((data) => {
        
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
          case "dentalHistory":
            this.setState({ dentalHistory: data.dentalHistory });
            break;
          case "bloodType":
            this.setState({ bloodtype: data.bloodType });
            break;
          case "medication":
            this.setState({ medication: data.medication });
            break;
          default:
            this.setState({ digestion: data.comments });
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
    console.log("this.state");
    console.log(this.state);

   // submitUserDataEdit(this.state, this.state.history);

    const res = await axios.post("/api/userdata/edit", this.state);
    //history.push("/userdata");
    //dispatch({ type: FETCH_USER, payload: res.data });
  }

  renderUserData() {
    //return(<div>userdata</div>)

    if (this.props.userdata) {
      return this.props.userdata.map((data) => {
        return (
          <form>
            <div className="card blue-grey darken-1" key={data._id}>
              <div className="card-content white-text">
                <span className="card-title">{data._user}</span>
                <label htmlFor="gender">gender</label>
                <input
                  name="gender"
                  type="text"
                  defaultValue={data.gender ? data.gender : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label htmlFor="weight">weight</label>
                <input
                  name="weight"
                  type="number"
                  placeholder={data.weight ? data.weight : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label htmlFor="height">height</label>
                <input
                  name="height"
                  type="number"
                  defaultValue={data.height ? data.height : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label htmlFor="history">history</label>
                <input
                  name="history"
                  type="text"
                  defaultValue={data.history ? data.history : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label htmlFor="genetics">genetics</label>
                <input
                  name="genetics"
                  type="text"
                  defaultValue={data.genetics ? data.genetics : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label htmlFor="gluten">gluten</label>
                <input
                  name="gluten"
                  type="text"
                  defaultValue={data.gluten ? data.gluten : ""}
                />
                <label htmlFor="dairy">dairy</label>
                <input
                  name="dairy"
                  type="text"
                  defaultValue={data.dairy ? data.dairy : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label htmlFor="dentalHistory">dentalHistory</label>
                <input
                  name="dentalHistory"
                  type="text"
                  defaultValue={data.dentalHistory ? data.dentalHistory : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label htmlFor="bloodType">bloodType</label>
                <input
                  name="bloodType"
                  type="text"
                  defaultValue={data.bloodType ? data.bloodType : ""}
                />
                <label htmlFor="digestion">digestion</label>
                <input
                  name="digestion"
                  type="text"
                  defaultValue={data.digestion ? data.digestion : ""}
                />
                <label htmlFor="medication">medication</label>
                <input
                  name="medication"
                  type="text"
                  defaultValue={data.medication ? data.medication : ""}
                />
                <label htmlFor="comments">comments</label>
                <input
                  name="comments"
                  type="text"
                  defaultValue={data.comments ? data.comments : ""}
                />

                <p className="right">
                  <button
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
    return <div>{this.renderUserData()}</div>;
  }
}

function mapStateToProps({ userdata }, state) {
  console.log("mapStateToProps");
  console.log("userdata");
  console.log(userdata);
  console.log("state");
  console.log(state);

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
