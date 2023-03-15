import React, { useEffect, useState } from 'react';
import store from "../store";
import EyePic from "./ImageComponent";
import UploadSelectedRightEye from './UploadSelectedRightEye';
import UploadSelectedLeftEye from './UploadSelectedLeftEye';
//import { fetchUserEyePics } from "../../actions";
import axios from "axios";
import { logError } from "../../utils/utils";



function SelectedEyeList() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [eyes, setEyes] = useState([]);
  const [visibility, setVisibility] = useState("hidden");
  const [editMode, setEditMode] = useState(false);
  const [selectedPics, setSelectedPics] = useState([]);
  const userId = store.getState().selectedUser ? store.getState().selectedUser : null

  const fetchItems = async () => {
    if (store.getState().selectedUser) {
      const userId = store.getState().selectedUser;
      const pics = await fetch(`/api/user_eye_pics/${userId}`);
      const items = await pics.json();
      setEyes(items);
    }
  };
 


  const handleEditButtonToggleText = () => {
    return editMode ? 'Disable edit' : 'Enable edit';
  }
  const toggleEditMode = () => {
    setEditMode(!editMode)
    setVisibility(visibility === 'visible' ? 'hidden' : 'visible');
    //fetchUserEyePics();
  }
  const deletePics = async () => {

    try {
      await axios.delete("/api/user_eye_pics/delete", {
        data: { idsToDelete: selectedPics }
      })
        .then(function (response) {
          // handle success
          setSelectedPics([])
          ///fetchUserEyePics();

        }).catch(function (error) {
          // handle error
          logError(error);
        })
        .finally(function () {
          // always executed
        });
    } catch (error) {
      logError(error)
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
      {userId &&
        <UploadSelectedRightEye
          userId={userId} />}
      {userId &&
        <UploadSelectedLeftEye
          userId={userId} />}
      <div className="grid-container">
        {eyes.length > 0 &&
          eyes.map((eyePic) => {
            const date = new Date(eyePic.dateSent).toLocaleDateString();
            const name = userId+'-'+date+'-'+eyePic.side;

            return (
              <div className="" key={eyePic._id + '_container'} >
                <div className="item photoThumbnail">

                  

                  <EyePic
                      id={eyePic._id}
                      src={eyePic.imageUrl}
                      alt={eyePic.side + " eye pic "+eyePic.imageUrl}
                      side={eyePic.side}
                      dateSent={eyePic.dateSent}

                    />
                  <input type={'checkbox'} value={eyePic._id} style={{ visibility }} onChange={handleSelected}></input>
                  <p className="item">
                    
                    {eyePic.side} eye pic sent on: {date}
                  </p>

                  <a href={`https://isabelles3.s3.eu-west-1.amazonaws.com/eyepics/${eyePic.picPath}_raw`} download={`${name}-eye-pic.png`}>
                    Download {eyePic.side} Eye Pic
                  </a>
                </div>
              </div>
            );
          })
        }
      </div>
      {eyes.length >= 1 &&
        <>
          <button id="editeyes" className="editeyes" onClick={toggleEditMode}>{handleEditButtonToggleText()}</button>
          <button id="deleteeyes" className="deleteeyes" onClick={deletePics} style={{ visibility }} >Delete Selected</button>
        </>
      }
    </section>
  );
}

export default SelectedEyeList