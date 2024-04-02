import React from "react";


class ClassComponents extends React.Component{

    constructor(){
        super();
        this.state={
            answer:"Yes",
            name:"Nuwan",
            age:33
        }
    }

    render(){
        return(
            <div>
                <h1>Learning class based components</h1>
                <h1>Is 'Learning State in React' important?{this.state.answer}</h1>
                <p>My name is {this.state.name}.</p>
                <p>I am {this.state.age} years old.</p>
            </div>
        )
    }
}

export default ClassComponents