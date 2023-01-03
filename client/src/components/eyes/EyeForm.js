import React, { useState } from "react";
import axios from "axios";

const  EyeForm = () =>{
  const [leftEye, setLeftEye] = useState('');
  const [rightEye, setRightEye] = useState('')
  function handleRightPic(e){
    console.log(e.target.files[0]);
    setRightEye(e.target.files[0]);
  }
  function handleLeftPic(e){
    console.log(e.target.files[0]);
    setLeftEye(e.target.files[0]);
  }
  const handleLeftSubmit = async(event) => {
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
    } catch(error) {
      console.log(error)
    }
  }
  const handleRightSubmit = async(event) => {
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
    } catch(error) {
      console.log(error)
    }
  }

    return (
      <div >
      


          <label  htmlFor="rightEye">Select a picture of the right iris: 
          
          <input  type="file" name="rightEye" onChange={handleRightPic}/></label>
          <button onClick={handleRightSubmit}  className="teal btn-flat right white-text">
            <i className="material-icons right">upload</i>
          </button><br/>
          <label  htmlFor="leftEye">Select a picture of the left iris: 
          <input type="file"   name="leftEye" onChange={handleLeftPic}/></label>
          <button onClick={handleLeftSubmit}  className="teal btn-flat right white-text">
            <i className="material-icons right">upload</i>
          </button>
       
      </div>
    );
  
}

export default EyeForm;

