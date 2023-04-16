import { useContext } from "react";
import SomeContext from "../SomeContext";
import React, { useState } from "react";
import "../css/Forum.css";

function Comments() {
  const { addComment, setAddComment } = useContext(SomeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const date = new Date();
    setAddComment([...addComment, { name, email, message, date }]);
    setName("");
    setEmail("");
    setMessage("");
    setShowMessage(true);
    console.log(addComment);
  }

  function deleteComment(index) {
    const updatedComments = addComment.filter((comment, i) => i !== index);
    setAddComment(updatedComments);
  }

  return (
    <>
      <form className="Comments-forum" onSubmit={handleSubmit}>
        <h1 className="Forum-title">Ge dina bästa odlingsråd</h1>
        <label className="Comments-label">
          Namn:
          <input
            className="Comments-input"
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label className="Comments-label">
          E-post:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <div className="Comments-message">
          <label className="Comments-label">
            Meddelande:
            <textarea
              name="message"
              value={message}
              onChange={handleInputChange}
            />
          </label>
          <button className="button" type="submit">
            Skicka
          </button>
          {showMessage && <p> </p>}
          {addComment.map((comment, index) => (
            <div className="Comments-result">
              Namn:
              <p key={index}>{comment.name}: </p>
              Meddelande:
              <p>{comment.message}</p>
              Publiceringsdatum:
              <p> {comment.date.toLocaleString()}</p>
              <img
                onClick={() => deleteComment(index)}
                className="Comments-close"
                src="./icons/close.png"
                alt="icon"
              />
            </div>
          ))}
        </div>
      </form>
    </>
  );
}

export default Comments;
