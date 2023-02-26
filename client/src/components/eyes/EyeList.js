import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import EyePic from "./ImageComponent";
import UploadRightEye from './UploadRightEye';
import UploadLeftEye from './UploadLeftEye';
import { fetchUserEyePics } from "../../actions";




function EyeList({eyes}) {

  useEffect(() => {
    fetchUserEyePics();
  }, [eyes]);
  //const [eyes, setItems] = useState([]);

  return (
    <section>
      <fieldset>
      <legend><h2>Eye Pics</h2></legend>
      <UploadRightEye />
      <UploadLeftEye />
     

      <div className="grid-container">
        {
          eyes.map((eyePic) => {

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
          })
        }
      </div>
      </fieldset>
    </section>
  );
}

function mapStateToProps({ eyes }) {

  return { eyes };
}
export default connect(mapStateToProps, {fetchUserEyePics})(EyeList);