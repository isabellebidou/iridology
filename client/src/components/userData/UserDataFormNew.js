import React from "react";
import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import fieldsArray from "./formFields";
import formFields from "./formFields";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { logError } from "../../utils/utils";



class UserDataFormNew extends Component {

  async componentDidMount() {

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
      dob: null,
      consent:false
    };
  }
  consent = (e) => {
    this.setState({
      consent: e.target.value});

  }

  updateValueSingle(e) {
  }
  updateStateValue(field, v) {
    switch (field) {
      case "gender":
        this.setState({ gender: v });
        break;
      case "lname":
        this.setState({ lname: v });
        break;
      case "fname":
        this.setState({ fname: v });
        break;
      case "dob":
        this.setState({ dob: v });
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

    if (this.state.consent) {
      try {
        await axios.post("/api/userdata/", this.state).then((response) => {
          // handle success
          this.props.history.push("/readings");
        });
      } catch (error) {
        logError(error);
      }
      
    } else {
      alert('Please consent to the collection of your personal data');
    }

  }



  renderUserData() {


    return (
      <div>
        {formFields.map(({ name, label, type, compulsory }) => {
          return (

            <>
              <label key={name + 'label'} htmlFor={name}>{label}</label>

              <input
                key={name + 'input'}
                name={name}
                type={type}
                onChange={(e) => {
                  this.updateStateValue(e.target.name, e.target.value);
                }}
              />
            </>
          );
        })}
      </div>
    );

  }

  render() {
    return <div className="page">
      <fieldset>
        <legend>information</legend>
        <div className="col" key={333}>
          {this.renderUserData()}
        </div>
        
      </fieldset>
      <p className="itemp">
      <label key='consentlabel'>
          <input
          key='consentcheckbox'
            type="checkbox"
            name="consent"
            checked={this.state.consent}
            onChange={this.consent}
          />
          I consent to the collection and use of my personal data.
        </label>
      </p>
      



        <Link to="/readings" className="actionupload button">
          cancel
        </Link>
        <button type="submit" className="actionupload button rightbutton" onClick={() => {
          this.handleClick();
        }}>
          ok
        </button>
    </div>;
  }
}

function mapStateToProps(state) {
  return { state };
}
/*UserDataFormNew = reduxForm({
  form: 'UserData',
  // validate,
  enableReinitialize: true,
  destroyOnUnmount: false
})(UserDataFormNew);*/


export default withRouter(
  connect(mapStateToProps, {})(UserDataFormNew)
);



