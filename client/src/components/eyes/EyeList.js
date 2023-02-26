import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import EyePic from "./ImageComponent";
import UploadRightEye from './UploadRightEye';
import UploadLeftEye from './UploadLeftEye';
import { fetchUserEyePics } from "../../actions";
import axios from "axios";




function EyeList({ eyes }) {

  useEffect(() => {
    fetchUserEyePics();
  }, [eyes]);

  const [visibility, setVisibility] = useState("hidden");
  const [editMode, setEditMode] = useState(false);
  const [selectedPics, setSelectedPics] = useState([]);
  const handleEditButtonToggleText = () => {
    return editMode ? 'Disable edit' : 'Enable edit';
  }
  const toggleEditMode = () => {
    setEditMode(!editMode)
    setVisibility(visibility === 'visible' ? 'hidden' : 'visible');
  }
  const deletePics = async () => {

    try {
      await axios.delete("/api/user_eye_pics/delete", {
        data: { idsToDelete: selectedPics }
      })
        .then(function (response) {
          // handle success
          setSelectedPics([])

        }).catch(function (error) {
          // handle error
          console.error(error);
        })
        .finally(function () {
          // always executed
        });
    } catch (error) {
      console.error(error)
    }

  }
  const handleSelected = (e) => {
    if (selectedPics.includes(e.target.value)){
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
      <fieldset>
        <legend><h2>Eye Pics</h2></legend>
        <UploadRightEye />
        <UploadLeftEye />
        <button id="editeyes" className="editeyes" onClick={toggleEditMode}>{handleEditButtonToggleText()}</button>
        <button id="deleteeyes" className="deleteeyes" onClick={deletePics} style={{ visibility }} >Delete Selected</button>


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
      </fieldset>
    </section>
  );
}

function mapStateToProps({ eyes }) {

  return { eyes };
}
export default connect(mapStateToProps, { fetchUserEyePics })(EyeList);