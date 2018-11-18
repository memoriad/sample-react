import React, { Component } from 'react'
import Hello from '../components/Hello'

class HelloPage extends Component {

    render() {
        const text = this.props.match.params.text || 'Hello World'

        return (
            <Hello text={text} />
        )
    }
}

export default HelloPage