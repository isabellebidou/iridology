
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import axios from "axios";
import { logError } from "../utils/utils";
//https://www.youtube.com/watch?v=McF22__Jz_I&t=372s&ab_channel=V%E1%BB%89%C4%90%E1%BA%B7ng
//https://codesandbox.io/s/comment-product-yelj6?file=/package.json
function StarReview({ auth }) {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);
  const [visibility, setVisibility] = useState("hidden");
  const [hasCompletedReadings, setCompletedReadings] = useState(false);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
 
  useEffect(() => {
    fetchItems();

    if (auth) {
      const toggleReviewDiv = document.getElementById('toggleReviewDiv');
      if (!auth.hasReviews && hasCompletedReadings) {
        setVisibility('visible')
        if (toggleReviewDiv) {
          toggleReviewDiv.style.visibility = 'hidden';
        }
      } else if (hasCompletedReadings){
        if (toggleReviewDiv) {
          toggleReviewDiv.style.visibility = 'visible';
        }
      } else {
        if (toggleReviewDiv) {
          toggleReviewDiv.style.visibility = 'hidden';
        }

      }
    }

  }, [auth, hasCompletedReadings]);

  const fetchItems = async () => {
    const userData = await fetch(`/api/readings/completed`);
    const items = await userData.json();
    const hasCompletedReadings = items && items.length > 0 ? true : false
    setCompletedReadings(hasCompletedReadings);

  };


  const handleClick = async () => {
    //save starreview
    try {
      await axios.post("/api/starreview", { name, number, comment })
        .then(function (response) {
          // handle success
          toggleVisibility();

        }).catch(function (error) {
          // handle error
          logError(error);
        })
        .finally(function () {
          // always executed
        });
    } catch (error) {
      logError(error)
    }



  }
  const toggleVisibility = () => {
    setVisibility(visibility === 'visible' ? 'hidden' : 'visible');
    const toggleReviewDiv = document.getElementById('toggleReviewDiv');
    if (toggleReviewDiv) {
      toggleReviewDiv.style.visibility = toggleReviewDiv.style.visibility === 'visible' ? 'hidden' : 'visible';
    }
  }
  const handleClose = () => {
    setVisibility('hidden');
    const toggleReviewDiv = document.getElementById('toggleReviewDiv');
    if (toggleReviewDiv) {
      toggleReviewDiv.style.visibility = 'visible';
    }
  }
  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return "Evaluate";
      case 1:
        return "Dissatifation";
      case 2:
        return "Unsatisfied";
      case 3:
        return "Normal";
      case 4:
        return "Satisfied";
      case 5:
        return "Very Satisfied";
      default:
        return "Evaluate";
    }
  };

  const handlePlaceHolder = () => {
    switch (number || hoverStar) {
      case 0:
        return "Comment here...";
      case 1:
      case 2:
      case 3:
      case 4:
        return "What is your problem?";
      case 5:
        return "Why do you like the product?";
      default:
        return "Comment here...";
    }
  };

  const renderStarReviewDiv = () => {
    return (
      <div className="StarRating" style={{ visibility }} >
        <div className="popup">
          <div className="content">
            <div className="product">
            </div>
            <div>
              <span style={{ visibility }} className="closePopupWindow" onClick={handleClose}>x</span>
              <h1>{handleText()}</h1>
              {Array(5)
                .fill()
                .map((_, index) =>
                  number >= index + 1 || hoverStar >= index + 1 ? (
                    <AiFillStar
                      onMouseOver={() => !number && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{ color: "orange" }}
                      onClick={() => setNumber(index + 1)}
                      key={index + 'AiFillStar'}
                    />
                  ) : (
                    <AiOutlineStar
                      onMouseOver={() => !number && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{ color: "orange" }}
                      onClick={() => setNumber(index + 1)}
                      key={index + 'AiOutlineStar'}
                    />
                  )
                )}

            </div>
            <textarea id="comment" placeholder={handlePlaceHolder()} onChange={(event) => setComment(event.target.value)}></textarea>
            <textarea id="name" placeholder="your name: Jane D." onChange={(event) => setName(event.target.value)}></textarea>
            <button id="reviewbutton" className={` ${!number && "disabled"} `} onClick={handleClick}>Submit</button>
          </div>
        </div>

      </div>
    )
  }

  return (
    <>
      {renderStarReviewDiv()}
      <button id="toggleReviewDiv" className="actionupload" onClick={toggleVisibility}>Leave a review</button>
    </>

  );
};

function mapStateToProps({ auth, readings }) {

  return { auth, readings };
}
export default connect(mapStateToProps, {})(StarReview);
