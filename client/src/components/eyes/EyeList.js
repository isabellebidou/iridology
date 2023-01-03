import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchUserEyePics } from "../../actions";

class EyeList extends Component {
  componentDidMount() {
    this.props.fetchUserEyePics();
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
          <div className="card blue-grey darken-1" key={eyePic._id}>
            <div className="card-content white-text">
              <span className="card-title">{eyePic.side}</span>

              <img
                src={`data:${eyePic.contentType};base64,${base64String}`}
                alt={"eye pic"}
                width="400"
              />

              <p className="right">
                sent on: {new Date(eyePic.dateSent).toLocaleDateString()}
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
        <h2>eye pics</h2>
        {this.renderEyes()}
      </div>
    );
  }
}

function mapStateToProps({ eyes }) {
  return { eyes };
}

export default connect(mapStateToProps, { fetchUserEyePics })(EyeList);
