import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchUserEyePics } from "../actions";
import { fetchUserData } from "../actions";

import { fetchUser } from "../actions";


class Instructions extends Component {
  componentDidMount() {
    this.props.fetchUserEyePics();
    this.props.fetchUserData();
    this.props.fetchUser();

  }


  renderInstructions() {

    const profileType = this.props.auth && this.props.auth.type ? this.props.auth.type: null


    if (this.props.userdata.length == 0) {

      return (

        <p className="itemp">
          To book a reading start by filling in the form, some basic information is needed about yourself like weight an height, make sure you specify the unit. Some information about your dietary habits, if you are vegan , on a restricted diet.. and medical history. You can write in english, spanish or french.

        </p>
      );

    }
    else if (this.props.eyes.length >= 2) {
      return (
        <p className="itemp">
          Please provide at least one picture of each iris. To take pictures of your eyes for an iridology reading using a mirror, place a mirror in front of you and stand in front of a plain, light-colored background. Make sure the room is well-lit and that you are away from windows. Make sure that you don't see the reflection of a window in your iris. Hold the camera or smartphone at eye level. Focus on one eye in the reflection, ensuring the eye is fully open and the picture captures the entire iris. Repeat for the other eye. Take multiple pictures to ensure you have clear, high-quality images. It is very important that you provide a good quality of pictures.
        </p>
      );

    } else {
      return (
        <div>
          <p className="itemp">
          {profileType === 'admin' && <span>{profileType}</span>}
            
            < br />
            Before you book a reading check that you have uploaded at least one recent picture for each iris. Update your personal information if you need too.</p>
        </div>


      )
    }

  }



  render() {
    return (
      <div>


        {this.renderInstructions()}

      </div>
    );
  }
}

function mapStateToProps({ eyes, userdata, auth }) {
  return { eyes, userdata, auth };
}

export default connect(mapStateToProps, { fetchUserEyePics, fetchUserData, fetchUser })(Instructions);