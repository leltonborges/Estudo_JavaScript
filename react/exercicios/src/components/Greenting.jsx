import React, { Component } from 'react';

export default class Greeding extends Component {

    state = {
        type: this.props.type,
        name: this.props.name
    }

    constructor(props) {
        super(props) //necessario chamar o super
        
        this.setType = this.setType.bind(this) //para o this, ser o obj atual

    }

    setType(e) {
        // console.log(e.target.value)
        this.setState({ type: e.target.value })
    }

    setName(e) {
        this.setState({ name: e.target.value })
    }

    render() {
        const { type, name } = this.state
        return (
            <div>
                <h1>{type}: {name}</h1>
                <hr />
                <input type="text" placeholder="Type..." value={type}
                    onChange={this.setType} />
                {/* onChange={e => this.setType(e)} /> */}
                <input type="text" placeholder="name..." value={name}
                    onChange={e => this.setName(e)} />
            </div>
        )
    }
}