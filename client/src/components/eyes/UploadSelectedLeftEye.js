
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {  logError } from "../../utils/utils";
//https://www.youtube.com/watch?v=McF22__Jz_I&t=372s&ab_channel=V%E1%BB%89%C4%90%E1%BA%B7ng
//https://codesandbox.io/s/comment-product-yelj6?file=/package.json
function UploadSelectedLeftEye({ auth ,userId }) {
  const [leftEye, setLeftEye] = useState('');
  const [visibility, setVisibility] = useState("hidden");
  useEffect(() => {

  }, [auth]);


  const handleLeftPic = (e) => {
    setLeftEye(e.target.files[0]);

  }

  const handleLeftSubmit = async (event) => {

    event.preventDefault()
    const formData = new FormData();
    formData.append("testImage", leftEye);
    try {
      await axios({
        method: "post",
        url: `/api/eyes_left/${userId}`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(function (response) {
        // handle success
        setLeftEye('');
        handleClose();
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



  const toggleVisibility = () => {
    setVisibility(visibility === 'visible' ? 'hidden' : 'visible');
    const toggleUploadDiv = document.getElementById('toggleLeftUploadDiv');
    if (toggleUploadDiv) {
      toggleUploadDiv.style.visibility = toggleUploadDiv.style.visibility === 'visible' ? 'hidden' : 'visible';
    }
  }
  const handleClose = () => {
    setVisibility('hidden');
    const toggleUploadDiv = document.getElementById('toggleLeftUploadDiv');
    if (toggleUploadDiv) {
      toggleUploadDiv.style.visibility = 'visible';
    }
  }




  const renderStarReviewDiv = () => {
    return (
      <div className="StarRating" style={{ visibility }} >
        <div className="popup">
          <div className="content">
            <div className="product">
            </div>
            <div>
              <span style={{ visibility }} className="closePopupWindow" onClick={handleClose}>x</span>
              <h1>Upload left eye pic</h1>
              <input type="file" name="leftEye" id="leftEyeInput" onChange={handleLeftPic} />
            </div>
            <button id="reviewbutton" className={` ${!leftEye && "disabled"} ` } onClick={handleLeftSubmit}>Submit</button>
          </div>
        </div>

      </div>
    )
  }

  return (
    <>
      {renderStarReviewDiv()}
      <button id="toggleLeftUploadDiv" className="actionupload" onClick={toggleVisibility}>upload left eye pic</button>
    </>

  );
};

function mapStateToProps({ auth }) {

  return { auth};
}
export default connect(mapStateToProps, {})(UploadSelectedLeftEye);
