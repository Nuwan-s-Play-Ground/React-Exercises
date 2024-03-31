import React from "react";

class ClassComponents extends React.Component{

    constructor(){
        super();
        this.state={
            answer:"Yes"
        }
    }

    render(){
        return(
            <div>
                <h1>Learning class based components</h1>
                <h1>Learning State in React</h1>
            </div>
        )
    }
}

export default ClassComponents