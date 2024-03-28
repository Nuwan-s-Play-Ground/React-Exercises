// ContactCards.js
import React from "react";

function ContactCards(props) {
  return (
    <div>
      <h2>Contact Card Component</h2>
      <img src={props.imageUrl} alt="mountain" />
      <h3>{props.name}</h3>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default ContactCards;
