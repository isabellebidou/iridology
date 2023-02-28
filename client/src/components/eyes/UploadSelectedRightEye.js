
import { useState, useEffect } from "react";
import { connect } from "react-redux";

import axios from "axios";
//https://www.youtube.com/watch?v=McF22__Jz_I&t=372s&ab_channel=V%E1%BB%89%C4%90%E1%BA%B7ng
//https://codesandbox.io/s/comment-product-yelj6?file=/package.json
function UploadRightEye({ auth ,userId}) {
    const [rightEye, setRightEye] = useState('');
    const [visibility, setVisibility] = useState("hidden");
  useEffect(() => {
  }, [auth]);


   const handleRightPic= (e) => {
    setRightEye(e.target.files[0]);

  }

  const handleRightSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("testImage", rightEye);
    try {
      await axios({
        method: "post",
        url: `/api/eyes_right/${userId}`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(function (response) {
        // handle success
        setRightEye('');
        handleClose();
        console.log(response);
      }).catch(function (error) {
        // handle error
        console.log(error);
      })
        .finally(function () {
          // always executed
        });
    } catch (error) {
      console.log(error)
    }
  }



  const toggleVisibility = () => {
    setVisibility(visibility === 'visible' ? 'hidden' : 'visible');
    const toggleUploadDiv = document.getElementById('toggleRightUploadDiv');
    if (toggleUploadDiv) {
      toggleUploadDiv.style.visibility = toggleUploadDiv.style.visibility === 'visible' ? 'hidden' : 'visible';
    }
  }
  const handleClose = () => {
    setVisibility('hidden');
    const toggleUploadDiv = document.getElementById('toggleRightUploadDiv');
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
              <h1>Upload right eye pic</h1>
              <input type="file" name="rightEye" id="rightEyeInput" onChange={handleRightPic} />


            </div>
            
            <button id="reviewbutton" className={"reviewbutton"} onClick={handleRightSubmit}>Submit</button>
          </div>
        </div>

      </div>
    )
  }

  return (
    <>
      {renderStarReviewDiv()}
      <button id="toggleRightUploadDiv" className="actionupload" onClick={toggleVisibility}>upload right eye pic</button>
    </>

  );
};

function mapStateToProps({ auth }) {

  return { auth };
}
export default connect(mapStateToProps, {})(UploadRightEye);
