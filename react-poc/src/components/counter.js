//counter component using setState()
import React, { Component } from 'react';

class counter extends Component {
     
    constructor(){
        super()
        this.state = {
            count: 0
        } 
    }

    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=> console.log(this.state.count));
        this.setState(
            (prevState,props) => (
                {count:prevState.count + Number(props.addValue) }
            ),
            ()=> console.log(this.state.count)
        );
    }

    increment5(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick = {() => this.increment5()}>increment</button>
            </div>
        )
    }
}

export default counter;