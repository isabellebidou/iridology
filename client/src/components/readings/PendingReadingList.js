

import React, { useEffect, useState } from 'react';
import store from "../store";
import { selectUser } from "../../actions";


function PendingReadingList() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {


    const userData = await fetch(`/api/readings/pending`);
    const items = await userData.json();
    setItems(items);

  };
  const handleClick = (userId) => {
    store.dispatch(selectUser(userId));
    this.props.history.push({
      pathname: '/users/dashboard'
    });
  };

  return (
    <section>
      <div className="grid-container">
        {
          items.map(reading => {
            return (

              <div key={reading._id} className=" " onClick={() => handleClick(reading.user._id)}>

                <p className="itemp photoThumbnail">
                  {reading.comment},
                  <br />

                  sent: {new Date(reading.dateSent).toLocaleDateString()}
                  <br />
                  {reading.user._id}
                </p>

              </div>

            );

          })
        }
      </div>
    </section>
  );
}

export default PendingReadingList