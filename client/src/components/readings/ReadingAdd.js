import React, { useState } from "react";
import axios from "axios";

const ReadingAdd = () => {
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
    
      <div classname ="readingadd">
            <form onSubmit={handleSubmit()}>
                
               
                <button type="submit" className="">
                <i className="">next</i>
                
                </button>

                <Link to = "/readings" className="">
                <i className="">cancel</i>
                
                </Link>
            </form>
        </div>
    
  );

}

export default ReadingAdd;