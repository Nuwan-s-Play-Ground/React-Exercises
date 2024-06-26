import React from 'react';

function MyComponent() {
  const name = 'John';
  const age = 30;
  const greeting = `Hello, ${name}!`;
  const date = new Date()
  return (
   
    <div>
      <h1>{greeting}</h1>
      <p>{name} is {age} years old.</p>
      <p>Next year, {name} will be {age + 1}.</p>
      {age >= 18 ? <p>{name} is an adult.</p> : <p>{name} is a minor.</p>}
        <p>Time is {date.getHours() % 12} o' clock</p>
    </div>
  );
}

export default MyComponent;
