import queryString from 'query-string';
import { useEffect } from 'react';
import axios from "axios";

const Completion = () => {
  const { offerId, expectations } = queryString.parse(window.location.search);
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
          console.log(response);
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
  };

  // Use the offerId and expectations to update the database or display on the page

  return (
    <div>
      <h1>Thank you! 🎉</h1>
      <p>Offer Id: {offerId}</p>
      <p>Expectations: {expectations}</p>
    </div>
  );
};

export default Completion;

