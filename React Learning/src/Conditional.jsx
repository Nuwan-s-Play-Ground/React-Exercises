import React from "react";


function Conditional(props){
    if(props.isLoading === true){
        return(
            <h1>Loading...</h1>
        )
    } else {
        return(
            <h1>Some theory stuff about conditional rendering</h1>
        )
    }    
}

export default Conditional;
