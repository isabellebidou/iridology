import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Payment from "../Payment";

const ReadingNew = () => {

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
    // 1) payment  /api/create-payment-intent

    try {
      axios.post("/api/readings", {  expectations, offerId})
      .then(function (response) {
        // handle success
        console.log(response);
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

    <div className="page">
      <form onSubmit={handleSubmit}>

        <select id="offerSelect" name="offerselect" value={offerId} onChange={(e) => {
          setOfferId(e.target.value);
        }}>
          {offers.map(offer => {
            return (
              <option key={offer._id} value={offer._id}>{offer.name} at {offer.price} $</option>
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

        <Link to="/readings" className="leftbutton">
        <button >{" cancel "}</button>
        </Link>
      </form>
      <Payment 
      expectations={expectations}
      offerId={offerId}
      />
    </div>

  );

}

export default ReadingNew;