import React, { useState } from "react";
import axios from "axios";

const FaqForm = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('')
  

  const handleAnswer = (e) => { setAnswer(e.target.value) }
  const handleQuestion = (e) => { setQuestion(e.target.value) }
  

  const handleFaqSubmit = async (event) => {
    event.preventDefault();
    axios.post('/api/faq', { question, answer })
      .then(res=>{
        setAnswer('');
        setQuestion('');
        
      })
  }


  return (
    <div className=" ">
      <dl>
        <dt>
        {question}
          
        </dt>
        <dd>
        {answer}
          
        </dd>

      </dl>



<form onSubmit={handleFaqSubmit}>

      <fieldset className="item photoThumbnail">
        <legend >enter a question </legend>
        <input type="text" name="question" value={question}onChange={handleQuestion} />
      </fieldset>
      <fieldset className="item photoThumbnail">
        <legend >enter an answer</legend>
        <input type="text" name="answer" value={answer} onChange={handleAnswer} />
      </fieldset>
      <button type="submit" className="">
        upload FAQ
      </button>
      </form>

    </div>
  );

}

export default FaqForm;