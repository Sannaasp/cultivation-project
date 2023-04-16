import React from "react";
import "../css/ShowModal.css";

function ShowModal(props) {
  return (
    <div className="ShowModal-container">
      <h1 className="ShowModal-title">{props.title}</h1>
      {props.tip.map((text) => (
        <p className="ShowModal-text">{text}</p>
      ))}
      <img
        onClick={props.closeModal}
        className="Comments-close"
        src="./icons/close.png"
        alt="icon"
      />
    </div>
  );
}

export default ShowModal;
