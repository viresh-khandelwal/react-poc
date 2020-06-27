//counter component using state
import React, { Component } from 'react';

class counter extends Component {
     
    constructor(){
        super()
        this.state = {
            count: 0
        } 
    }

    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick = {() => this.increment()}>increment</button>
            </div>
        )
    }
}

export default counter;