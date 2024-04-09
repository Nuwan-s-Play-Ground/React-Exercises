import React, { useState } from "react";

function ConditionalRenderingPractice() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome, User!</h1>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      )}
    </div>
  );
}

export default ConditionalRenderingPractice;
