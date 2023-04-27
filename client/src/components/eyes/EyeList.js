import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import EyePic from "./ImageComponent";
import UploadRightEye from './UploadRightEye';
import UploadLeftEye from './UploadLeftEye';
import { fetchUserEyePics } from "../../actions";
import axios from "axios";






function EyeList({ eyes, fetchUserEyePics }) {

  useEffect(() => {
    fetchUserEyePics();
  }, [fetchUserEyePics, eyes]);

  const [visibility, setVisibility] = useState("hidden");
  const [editMode, setEditMode] = useState(false);
  const [selectedPics, setSelectedPics] = useState([]);
  //const [eyePics, setEyePics] = useState([]);
  
  
  const handleEditButtonToggleText = () => {
    return editMode ? 'Disable edit' : 'Enable edit';
  }
  const toggleEditMode = () => {
    setEditMode(!editMode)
    setVisibility(visibility === 'visible' ? 'hidden' : 'visible');
    fetchUserEyePics();
  }
  const deletePics = async () => {

    try {
      await axios.delete("/api/user_eye_pics/delete", {
        data: { idsToDelete: selectedPics }
      })
        .then(function (response) {
          // handle success
          setSelectedPics([])
          fetchUserEyePics();

        }).catch(function (error) {
          // handle error
          error(error)
        })
        .finally(function () {
          // always executed
        });
    } catch (error) {
      error(error)
    }

  }
  const handleSelected = (e) => {
    if (selectedPics.includes(e.target.value)) {
      //remove item
      // find index
      var myIndex = selectedPics.indexOf(e.target.value);
      var myArray = [...selectedPics];
      myArray.splice(myIndex, 1);
      setSelectedPics(myArray);
    } else {
      // add item
      setSelectedPics([...selectedPics, e.target.value]);
    }
  }

  return (
    <section>
      <fieldset id="eyes">
        <legend><h2>Eye Pics</h2></legend>
        <UploadRightEye />
        <UploadLeftEye />
        <div className="grid-container" >
          {eyes.length > 0 &&
            eyes.map((eyePic) => {
              //const eyePicData = eyePic.pic.data.data;
              //const base64String = btoa(
               // new Uint8Array(eyePicData).reduce(function (data, byte) {
                 // return data + String.fromCharCode(byte);
                //}, "")
             // );

              return (
                <div  key={eyePic._id + '_container'} >
                  <div className="item photoThumbnail">

                    <EyePic
                      id={eyePic._id}
                      //src={`data:${eyePic.contentType};base64,${base64String}`}
                      src={eyePic.imageUrl}
                      alt={eyePic.side + " eye pic "+eyePic.imageUrl}
                      side={eyePic.side}
                      dateSent={eyePic.dateSent}

                    />

                    <input type={'checkbox'} value={eyePic._id} style={{ visibility }} onChange={handleSelected}></input>
                    <p className="item">
                      {eyePic.side} eye pic sent on: {new Date(eyePic.dateSent).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              );
            })
          }

        </div>
        {eyes.length < 2 &&
          <p className="itemp">
            Please provide at least one picture of each iris. To take pictures of your eyes for an iridology reading using a mirror, place a mirror in front of you and stand in front of a plain, light-colored background. Make sure you are away from windows and that you don't see the reflection of a window in your iris. Hold the camera or smartphone at eye level. You can use a secondary light at a 45 degre angle, make sure there is plenty of light in the iris, this angle will enable to see the depth of the iris. Focus on one eye in the reflection, ensuring the eye is fully open and the picture captures the entire iris. Repeat for the other eye. Take multiple pictures to ensure you have clear, high-quality images. It is very important that you provide a good quality of pictures.
          </p>
        }
        {eyes.length >= 1 &&
          <>
            <button id="editeyes" className="editeyes" onClick={toggleEditMode}>{handleEditButtonToggleText()}</button>
            <button id="deleteeyes" className="deleteeyes" onClick={deletePics} style={{ visibility }} >Delete Selected</button>
          </>
        }
      </fieldset>
    </section>
  );
}

function mapStateToProps({ eyes }) {
  

  return { eyes };
}
export default connect(mapStateToProps, { fetchUserEyePics })(EyeList);