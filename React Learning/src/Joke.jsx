import React from "react";

function Joke(props){
    return(
        <div>
            <h3 style={props.question ? "block":"none"}>Question:{props.question}</h3>
            <h3>Answer:{props.answer}</h3>
        </div>
    )
}

export default Joke