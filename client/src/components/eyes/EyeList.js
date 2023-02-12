import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchUserEyePics } from "../../actions";
import { Link } from "react-router-dom";


class EyeList extends Component {
  componentDidMount() {
    this.props.fetchUserEyePics();

  }
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
          <div className="" key={eyePic._id}>
            <div className="item photoThumbnail">
              <img
                src={`data:${eyePic.contentType};base64,${base64String}`}
                alt={"eye pic"}
                width="100%"
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

export default connect(mapStateToProps, { fetchUserEyePics })(EyeList);
