import React, { useState } from "react";
import axios from "axios";
import { log, logError } from '../../utils';

const EyeForm = () => {
  const [leftEye, setLeftEye] = useState('');
  const [rightEye, setRightEye] = useState('');


  function handleRightPic(e) {
    setRightEye(e.target.files[0]);

    document.getElementById('rightEyeButton').style.visibility = 'visible';
  }
  function handleLeftPic(e) {
    setLeftEye(e.target.files[0]);

    document.getElementById('leftEyeButton').style.visibility = 'visible';
  }
  const handleLeftSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("testImage", leftEye);
    try {
      await axios({
        method: "post",
        url: "/api/eyes_left",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(function (response) {
        // handle success
        setLeftEye('');
        document.getElementById('leftEyeInput').value = '';
        document.getElementById('leftEyeButton').style.visibility = 'hidden';


      }).catch(function (error) {
        // handle error
        logError(error)
      })
        .finally(function () {
          // always executed
        });
    } catch (error) {
      logError(error)
      
    }
  }
  const handleRightSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("testImage", rightEye);
    try {
      await axios({
        method: "post",
        url: "/api/eyes_right",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(function (response) {
        // handle success
        setRightEye('');
        document.getElementById('rightEyeInput').value = '';
        document.getElementById('rightEyeButton').style.visibility = 'hidden';

      }).catch(function (error) {
        // handle error
        error(error)
      })
        .finally(function () {
          // always executed
        });
    } catch (error) {
      logError(error)
    }
  }

  return (
    <div className="page">
      <div className="grid-container">

        <fieldset className="item photoThumbnail">
          <legend >Select a picture of the right iris:</legend>
          <input type="file" name="rightEye" id="rightEyeInput" onChange={handleRightPic} />

          <button onClick={handleRightSubmit} className="" id="rightEyeButton">
            upload right eye
          </button>
        </fieldset>
        <fieldset className="item photoThumbnail">
          <legend >Select a picture of the left iris:</legend>

          <input type="file" name="leftEye" id="leftEyeInput" onChange={handleLeftPic} />

          <button onClick={handleLeftSubmit} className="" id="leftEyeButton">
            upload left eye
          </button>
        </fieldset>
      </div>
    </div>
  );

}

export default EyeForm;

