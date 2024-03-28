// Photos.js
import React from "react";
import ContactCards from "./ContactCards";

function Photos() {
  return (
    <div>
      <ContactCards
        name="Mr. Will"
        email="example@example.com"
        phone="123-456-7890"
        imageUrl="https://www.gstatic.com/webp/gallery/1.jpg"
      />
    </div>
  );
}

export default Photos;
