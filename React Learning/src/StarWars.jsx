import React, { Component } from 'react'

export default class StarWars extends Component {
    constructor(){
        super()
        this.state = {
            character:{}
        }
    }

    componentDidMount(){
        fetch("https://swapi.dev/api/people/1")
            .then(Response => Response.json())
            .then(data => {
                this.setState({
                    character : data
                })
            })
    }

    render() {
        return (
        <div>
            {this.state.character.name}
        </div>
        )
    }
}
