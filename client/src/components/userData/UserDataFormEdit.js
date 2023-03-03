import React from "react";
import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchUserData } from "../../actions";
import fieldsArray from "./formFields";
import { Link } from "react-router-dom";


class UserDataFormEdit extends Component {

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
      eatingHabits: "",
      dentalHistory: "",
      bloodType: "",
      digestion: "",
      medication: "",
      comments: "",
      lname: "",
      fname: "",
      dob: "",
    };
  }

  updateValueSingle(e) {

  }
  updateStateValue(field, v) {

    switch (field) {
      case "gender":
        this.setState({ gender: v });
        break;
      case "dob":
          this.setState({ dob: v }, () => {
            //console.log("updated state:", this.state.dob);
          });
          break;
      case "lname":
        this.setState({ lname: v });
        break;
      case "fname":
        this.setState({ fname: v });
        break;
      case "height":
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
          case "fname":
            return this.setState({ fname: data.fname });

          case "lname":
            return this.setState({ lname: data.lname });

          case "gender":
            return this.setState({ gender: data.gender });

          case "height":
            return this.setState({ height: data.height });

          case "weight":
            return this.setState({ weight: data.weight });

          case "history":
            return this.setState({ history: data.history });

          case "genetics":
            return this.setState({ genetics: data.genetics });

          case "gluten":
            return this.setState({ gluten: data.gluten });

          case "dairy":
            return this.setState({ dairy: data.dairy });

          case "eatingHabits":
            return this.setState({ eatingHabits: data.eatingHabits });

          case "digestion":
            return this.setState({ digestion: data.digestion });

          case "dentalHistory":
            return this.setState({ dentalHistory: data.dentalHistory });

          case "bloodType":
            return this.setState({ bloodType: data.bloodType });

          case "medication":
            return this.setState({ medication: data.medication });
          case "dob":
              return this.setState({ dob: data.dob });

          default:
            return this.setState({ comments: data.comments });

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
    await axios.post("/api/userdata/edit", this.state);
  }



  renderUserData() {




    if (this.props.userdata) {
      return this.props.userdata.map(data => (
        <form key={888}>
          <div className="col" key={'777'}>
            <div className="" key={1}>


            <label key={'dob' +0} htmlFor="dob">{(fieldsArray.find(f => f.name === 'dob')).label}</label>
            {data.dob &&
              <input
                name="dob"
                key={'dob' + 111}
                type="date"
                value={this.state.dob ? new Date(this.state.dob).toISOString().substr(0, 10) : new Date(data.dob).toISOString().substr(0, 10)}
                onChange={(e) => {
                  this.updateStateValue(e.target.name, e.target.value);
                }}
              />}

              <label key={0} htmlFor="fname">{(fieldsArray.find(f => f.name === 'fname')).label}</label>
              <input
                name="fname"
                key={'fname' + 111}
                type="text"
                defaultValue={data.fname ? data.fname : ""}
                onChange={(e) => {
                  this.updateStateValue(e.target.name, e.target.value);
                }}
              />
              <label key={1} htmlFor="lname">{(fieldsArray.find(f => f.name === 'lname')).label}</label>
              <input
                name="lname"
                key={111}
                type="text"
                defaultValue={data.lname ? data.lname : ""}
                onChange={(e) => {
                  this.updateStateValue(e.target.name, e.target.value);
                }}
              />
              <label key={2} htmlFor="gender">{(fieldsArray.find(f => f.name === 'gender')).label}</label>
              <input
                name="gender"
                key={112}
                type="text"
                defaultValue={data.gender ? data.gender : ""}
                onChange={(e) => {
                  this.updateStateValue(e.target.name, e.target.value);
                }}
              />
              <label key={3} htmlFor="weight">{(fieldsArray.find(f => f.name === 'weight')).label}</label>
              <input
                name="weight"
                key={113}
                type="number"
                placeholder={data.weight ? data.weight : ""}
                onChange={(e) => {
                  this.updateStateValue(e.target.name, e.target.value);
                }}
              />
              <label key={4} htmlFor="height">{(fieldsArray.find(f => f.name === 'height')).label}</label>
              <input
                name="height"
                key={114}
                type="number"
                defaultValue={data.height ? data.height : ""}
                onChange={(e) => {
                  this.updateStateValue(e.target.name, e.target.value);
                }}
              />
              <label key={5} htmlFor="history">{(fieldsArray.find(f => f.name === 'history')).label}</label>
              <input
                name="history"
                key={115}
                type="text"
                defaultValue={data.history ? data.history : ""}
                onChange={(e) => {
                  this.updateStateValue(e.target.name, e.target.value);
                }}
              />
              <label key={6} htmlFor="genetics">{(fieldsArray.find(f => f.name === 'genetics')).label}</label>
              <input
                name="genetics"
                key={116}
                type="text"
                defaultValue={data.genetics ? data.genetics : ""}
                onChange={(e) => {
                  this.updateStateValue(e.target.name, e.target.value);
                }}
              />
              <label key={7} htmlFor="gluten">{(fieldsArray.find(f => f.name === 'gluten')).label}</label>
              <input
                name="gluten"
                key={117}
                type="text"
                defaultValue={data.gluten ? data.gluten : ""}
                onChange={(e) => {
                  this.updateStateValue(e.target.name, e.target.value);
                }}
              />
              <label key={8} htmlFor="dairy">{(fieldsArray.find(f => f.name === 'dairy')).label}</label>
              <input
                name="dairy"
                key={118}
                type="text"
                defaultValue={data.dairy ? data.dairy : ""}
                onChange={(e) => {
                  this.updateStateValue(e.target.name, e.target.value);
                }}
              />
              <label key={9} htmlFor="eatingHabits">{(fieldsArray.find(f => f.name === 'eatingHabits')).label}</label>
              <input
                name="eatingHabits"
                key={119}
                type="text"
                defaultValue={data.eatingHabits ? data.eatingHabits : ""}
                onChange={(e) => {
                  this.updateStateValue(e.target.name, e.target.value);
                }}
              />
              <label key={10} htmlFor="dentalHistory">{(fieldsArray.find(f => f.name === 'dentalHistory')).label}</label>
              <input
                name="dentalHistory"
                key={120}
                type="text"
                defaultValue={data.dentalHistory ? data.dentalHistory : ""}
                onChange={(e) => {
                  this.updateStateValue(e.target.name, e.target.value);
                }}
              />
              <label key={11} htmlFor="bloodType">{(fieldsArray.find(f => f.name === 'bloodType')).label}</label>
              <input
                name="bloodType"
                key={121}
                type="text"
                defaultValue={data.bloodType ? data.bloodType : ""}
                onChange={(e) => {
                  this.updateStateValue(e.target.name, e.target.value);
                }}
              />
              <label key={12} htmlFor="digestion">{(fieldsArray.find(f => f.name === 'digestion')).label}</label>
              <input
                name="digestion"
                key={122}
                type="text"
                defaultValue={data.digestion ? data.digestion : ""}
                onChange={(e) => {
                  this.updateStateValue(e.target.name, e.target.value);
                }}
              />
              <label key={13} htmlFor="medication">{(fieldsArray.find(f => f.name === 'medication')).label}</label>
              <input
                name="medication"
                key={123}
                type="text"
                defaultValue={data.medication ? data.medication : ""}
                onChange={(e) => {
                  this.updateStateValue(e.target.name, e.target.value);
                }}
              />
              <label key={14} htmlFor="comments">{(fieldsArray.find(f => f.name === 'comments')).label}</label>
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
                <Link to="/readings" className="actionupload button">
                  cancel
                </Link>
                <button className="actionupload button rightbutton"
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
      ))
    } else {
      return []
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
/*UserDataFormEdit = reduxForm({
  form: 'UserData',
  // validate,
  enableReinitialize: true,
  destroyOnUnmount: false
})(UserDataFormEdit);*/

/*export default connect(mapStateToProps,  fetchUserData)(reduxForm({
  form: 'userDataFormEdit',
 // validate, 
  destroyOnUnmount: false
})(UserData));*/
export default connect(mapStateToProps, { fetchUserData })(UserDataFormEdit);



