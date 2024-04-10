import React from "react";

class Count extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="counter">
                Counter:{0}
            </div>
        )
    }
}

export default Count