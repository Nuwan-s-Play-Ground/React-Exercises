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
      <ContactCards
      name="Ms. Mary"
      email="mary@example.com"
      phone="987-654-3210"
      imageUrl="https://www.gstatic.com/webp/gallery/2.jpg"
      />
      <ContactCards
      name="Dr. John"
      email="john@example.com"
      phone="555-123-4567"
      imageUrl="https://www.gstatic.com/webp/gallery/3.jpg"
      />
    </div>
    
  );
}

export default Photos;
