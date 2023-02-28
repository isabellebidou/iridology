import queryString from 'query-string';
import { useState, useEffect } from 'react';
import axios from "axios";

const Completion = () => {
  const { offerId, expectations } = queryString.parse(window.location.search);
  const [readingId, setReadingId] = useState("");
  useEffect(() => {
    postReading(offerId, expectations);
  }, []);
  const postReading = async (offerId, expectations) => {
    console.log(offerId+ "  from Completion")
    console.log(expectations+ "  from Completion")
    try {
      axios.post("/api/readings", { expectations, offerId })
        .then(function (response) {
          // handle success
          console.log(response.data._id);
          setReadingId(response.data._id)
        }).catch(function (error) {
          // handle error
          console.error(error);
        })
        .finally(function () {
          // always executed
        });
    } catch (error) {
      console.log(error)
    }
  };

  // Use the offerId and expectations to update the database or display on the page

  return (
    <div className='page'>
      <h1>Thank you! 🎉</h1>
      <p className='itemp'>Offer Id: {offerId}</p>
      <p className='itemp'>Expectations: {expectations}</p>
      <p className='itemp'>Reading id: {readingId}</p>
    </div>
  );
};

export default Completion;

