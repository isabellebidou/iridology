import React, { useState } from "react";
import axios from "axios";
import { logError } from "../../utils/utils";

const LinkForm = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [type, setType] = useState('');
  const [comment, setComment] = useState('');

  const handleName = (e) => { setName(e.target.value) }
  function handleUrl(e) {
    setUrl(e.target.value)

  }
  function handleType(e) {
    setType(e.target.value)

  }
  function handleComment(e) {
    setComment(e.target.value)

  }

  const handleLinkSubmit = async (event) => {
    axios.post('/api/link', { name, url, type, comment })
      .then(res => {
        setName('');
        setUrl('');
        setType('');
        setComment('');
      })
      .catch(error => logError(error));
  };
  



  return (

    <div className=" ">
      <div className="itemp">
        name: {name}<br />
        url:{url}<br />
        type: {type}<br />
        comment: {comment}<br />
      </div>
      <form onSubmit={handleLinkSubmit}>

        <fieldset className="item photoThumbnail">
          <legend>enter a link name</legend>
          <input type="text" name="name" value={name} onChange={handleName} />
        </fieldset>
        <fieldset className="item photoThumbnail">
          <legend>enter a url</legend>
          <input type="text" name="url" value={url} onChange={handleUrl} />
        </fieldset>
        <fieldset className="item photoThumbnail">
          <legend>enter a type, text or video</legend>
          <input type="text" name="type" value={type} onChange={handleType} />
        </fieldset>
        <fieldset className="item photoThumbnail">
          <legend>enter comment</legend>
          <input type="text" name="comment" value={comment} onChange={handleComment} />
        </fieldset>

        <button type="submit" className="">
          upload Link
        </button>
      </form>

    </div>
  );

}

export default LinkForm;