import React, { useEffect, useState } from 'react';
import EyePic from "./ImageComponent";
import { Link } from "react-router-dom";



function EyeList() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const userData = await fetch(`/api/user_eye_pics/`);
    const items = await userData.json();
    setItems(items);

  };

  return (
    <section>
      <fieldset>
      <legend><h2>Eye Pics</h2></legend>
     
      <div>
        <Link to="/eyes/new" className="">
          <button className="actionupload">upload eye pics</button>
        </Link>
      </div>
      <div className="grid-container">
        {
          items.map((eyePic) => {

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

export default EyeList