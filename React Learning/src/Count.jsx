import React from "react";

class Count extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter : 0
        }

        this.increment = () => this.setState({counter : this.state.counter + 1});
    }

    render(){
        return(
            <div>
                <button onClick={this.increment}>Increment</button>
                <button></button>
                <div className="counter">
                Counter:{this.state.counter}
                </div>
            </div>
        )
    }
}

export default Count