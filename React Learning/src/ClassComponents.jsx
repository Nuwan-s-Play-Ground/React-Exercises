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
                <h1>Is 'Learning State in React' important?{this.state.answer}</h1>
            </div>
        )
    }
}

export default ClassComponents