import React from "react";

class ChangingState extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    handleClick(){
        this.state.count++
    }

    render(){
        <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>Change</button>
        </div>
    }
}

export default  ChangingState