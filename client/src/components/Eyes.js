import React from "react";
import { Link } from "react-router-dom";
import { Field } from "redux-form";

import EyeForm from "./eyes/EyeForm";

//import { useState, useEffect } from "react";




const Eyes = () => {
   // const [data,setData] = useState([]);
   // useEffect(() => {

  //  })
    return(
        <div>
        <h2>eyes</h2>
        
        <EyeForm />

        </div>
    )

}

export default Eyes;