import React, {useEffect, useState} from 'react';
import EyePic from "./ImageComponent";



function SelectedEyeList() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const userData = await fetch(`/api/user_eye_pics/`);
        const items = await userData.json();
        setItems(items);

    };

    return(
        <section>
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
        </section>
    );
}

export default SelectedEyeList