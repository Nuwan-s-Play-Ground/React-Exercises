import React, { Component } from 'react'

export default class StarWars extends Component {
    constructor(){
        super()
        this.state = {
            loading:false,
            character:{}
        }
    }

    componentDidMount(){
        this.setState({loading:true})
        fetch("https://swapi.dev/api/people/1")
            .then(Response => Response.json())
            .then(data => {
                this.setState({
                    character : data
                })
        })
    }

    render() {
        const text = this.state.loading ? "Loading..." : this.state.character.name
        return (
        <div>
            {text}
        </div>
        )
    }
}
