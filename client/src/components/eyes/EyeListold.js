import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchUserEyePics } from "../../actions";
import { Link } from "react-router-dom";
import EyePic from "./ImageComponent";
import { withRouter } from "react-router-dom";
//import { history } from rom "../../actions";



class EyeList extends Component {

  componentDidMount() {
    this.props.fetchUserEyePics();

  }
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }



  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };
  handleMouseOver = () => {
    this.setState({ width: "200%", height: "auto" });
  };

  handleMouseOut = () => {
    this.setState({ width: "100%", height: "auto" });
  };

  renderButton() {
    if (this.props.eyes) {
      return (
        <div className="">
          <Link to="/readings/new" className="">
            <button className="actionbook" >new reading</button>
          </Link>
        </div>
      );

    } else {
      return (<div className="">
        <Link to="/eyes/new" className="">
          <button className="actionbook ">upload eye pics</button>
        </Link>
      </div>)
    }

  }
  imgClick() {
    console.log(this)
  }
  renderEyes() {
    if (this.props.eyes) {
      return this.props.eyes.map((eyePic) => {

        const eyePicData = eyePic.pic.data.data;
        const base64String = btoa(
          new Uint8Array(eyePicData).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
          }, "")
        );

        return (
          <div className="" key={eyePic._id + '_container'} >
            <div className="item photoThumbnail">

              <EyePic
                id="myImage"
                src={`data:${eyePic.contentType};base64,${base64String}`}
                alt={eyePic.side + " eye pic"}
                side={eyePic.side}
                dateSent={eyePic.dateSent}

              />
              <p className="item">
                {eyePic.side} eye pic sent on: {new Date(eyePic.dateSent).toLocaleDateString()}
              </p>
            </div>
          </div>
        );
      });
    } else {
      return [];
    }
  }


  render() {
    return (
      <div>


        <div className="grid-container">{this.renderEyes()}</div>


      </div>
    );
  }
}

function mapStateToProps({ eyes }) {
  return { eyes };
}

export default withRouter(connect(mapStateToProps, { fetchUserEyePics })(EyeList));
