import React from "react";


class ClassComponents extends React.Component{

    constructor(){
        super();
        this.state={
            answer:"Yes",
            name:"Nuwan",
            age:33,
            isLoggedIn:true
        }
    }

    render(){
        let wordDisplay;
        if (this.state.isLoggedIn === true){
            wordDisplay = "in";
        } else {
            wordDisplay = "out"
        }
        return(
            <div>
                <h1>Learning class based components</h1>
                <h1>Is 'Learning State in React' important?{this.state.answer}</h1>
                <p>My name is {this.state.name}.</p>
                <p>I am {this.state.age} years old.</p>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}

export default ClassComponents