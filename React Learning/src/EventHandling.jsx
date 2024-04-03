import React from "react";

function handleClick(){
    console.log("I was clicked");
}

function EventHandling(){
    return(
        <div>
            <img src="https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg" alt="City" height={200} width={200}/>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default EventHandling;