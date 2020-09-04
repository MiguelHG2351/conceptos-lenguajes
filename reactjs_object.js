import React from 'react'

class Example {
    constructor(props) {
        super(props)
        this.state = {
            hola: "Hola Mundo"
        }
    }
    stateFuntion() {
        this.setState({count: 5});
    }

    render() {
        return (
        <h2>Hello</h2>
        )
    }
}

export default Example