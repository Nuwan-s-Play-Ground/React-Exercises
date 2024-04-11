import React from "react";

class Count extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter : 0
        }
        this.state = {favoritefood: "rice"};

        this.increment = () => this.setState({counter : this.state.counter + 1});
        this.decrement = () => this.setState({counter : this.state.counter - 1});
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({favoritefood: "pizza"})
        }, 1000)
    }

    render(){
        return(
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div className="counter">
                Counter:{this.state.counter}
                </div>
                <h1>My Favorite Food is {this.state.favoritefood}</h1>
            </div>
        )
    }
}

export default Count