import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            government: "Congress"
        };
    }

    changeGovernment = () => {
        this.setState({
            government: "BJP"
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.government}</div>
                <button onClick={this.changeGovernment}>Change Government</button>
            </div>
        );
    }
}

export default EventBind;