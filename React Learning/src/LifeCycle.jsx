import React, {Component} from "react";
import Conditional from "./Conditional"

class LifeCycle extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading : true
        }
    }

    
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading : false
            })
        },1000)
    }

    getSnapshotBeforeUpdate(){

    }

    // componentWillMount(){

    // }

    // componentWillReceiveProps(nextProps){
    //     if(nextProps.whatever != this.props.whatever){

    //     }
    // }

    // componentWillUpdate(){

    // }

    shouldComponentUpdate(nextProps, nextState){

    }

    componentWillUnmount(){

    }

    render(){
        return(
            <div>
                <Conditional isLoading={this.state.isLoading}/>
                
            </div>
        )
    }
}

export default LifeCycle