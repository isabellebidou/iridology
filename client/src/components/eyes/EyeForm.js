import React, { useState } from "react";
import axios from "axios";

const EyeForm = () => {
  const [leftEye, setLeftEye] = useState('');
  const [rightEye, setRightEye] = useState('')
  function handleRightPic(e) {
    console.log(e.target.files[0]);
    setRightEye(e.target.files[0]);
  }
  function handleLeftPic(e) {
    console.log(e.target.files[0]);
    setLeftEye(e.target.files[0]);
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
      });
    } catch (error) {
      console.log(error)
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
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="uploadeyepics ">
      <div className="grid-container">



      <fieldset className="item photoThumbnail">
        <legend >Select a picture of the right iris:</legend>
        <input type="file" name="rightEye" onChange={handleRightPic} />
        <button onClick={handleRightSubmit} className="">
          upload right eye
        </button></fieldset>
      <fieldset className="item photoThumbnail">
        <legend >Select a picture of the left iris:</legend>

        <input type="file" name="leftEye" onChange={handleLeftPic} />
        <button onClick={handleLeftSubmit} className="">
          upload left eye
        </button></fieldset>
        </div>
    </div>
  );

}

export default EyeForm;

