import React, { Component } from 'react';

export default class Roteiro extends Component {

    constructor(props) {
        super(props)

        this.state = {
            roteiro: this.props.match.params.id
        }

    }

    render() {
        return (
            <div>
                <h1>Roteiro {this.state.roteiro}</h1>
            </div>
        )
    }
}