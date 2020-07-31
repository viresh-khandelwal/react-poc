import React, { Component } from 'react';

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <button onClick = {() => this.props.greet('Ayushmaan Bhava !!')}>Greet Parents</button>
                <button onClick = {this.props.giveGifts}>Give Gifts</button>
            </div>
        );
    }
}

export default ChildComponent;