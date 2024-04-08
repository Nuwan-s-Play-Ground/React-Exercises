import React from "react";

class LifeCycle extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){

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

            </div>
        )
    }
}

export default LifeCycle