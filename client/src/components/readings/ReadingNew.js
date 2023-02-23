import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ReadingNew = () => {

  const [comments, setComments] = useState('');
  const [expectations, setExpectations] = useState('');
  const [offers, setOffers] = useState([]);
  const [offerId, setOfferId] = useState('');

  useEffect(() => {
    const fetchOffers = async () => {
      const offerData = await fetch(`/api/offers/`);
      const items = await offerData.json();
      setOffers(items);
      setOfferId(items.length > 0 ? items[0]._id : '');
    };
    fetchOffers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      axios.post("/api/readings", {  comments, expectations, offerId}).then(function (response) {
        // handle success
        console.log(response);
        setComments('')
        setExpectations('')
        setOfferId(offers.length > 0 ? offers[0]._id : '');

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


  return (

    <div className="readingadd">
      <form onSubmit={handleSubmit}>

        <select id="offerSelect" name="offerselect" value={offerId} onChange={(e) => {
          setOfferId(e.target.value);
        }}>
          {offers.map(offer => {
            return (
              <option key={offer._id} value={offer._id}>{offer.name}</option>
            );
          })}
        </select>

        <br />
        <label key={14} htmlFor="expectations">What are you expecting from the reading? what is your motivation?</label>
        <input
          name="expectations"
          key={124}
          type="text"
          value={expectations} 
          onChange={(e) => {
            setExpectations(e.target.value)
          }}
        />

        <label key={13} htmlFor="comments">additional comments? </label>
        <input
          name="comments"
          key={1244}
          type="text"
          value={comments} 
          onChange={(e) => {
            setComments(e.target.value)
          }}
        />

        <button type="submit" className="rightbutton">
          order reading
        </button>

        <Link to="/readings" className="leftbutton">
        <button >{" cancel "}</button>
        </Link>
      </form>
    </div>

  );

}

export default ReadingNew;