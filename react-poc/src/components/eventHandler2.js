//eventHandling in class component

import React, { Component } from 'react';

class EventHandler2 extends Component {
    state = {  }
    handleClick(){
      alert("khairiyat pucho kabhi to kaifiyat pucho !!")
    }
    render() {
        return (
            <button onClick={this.handleClick}>for Sushant !</button>
        );
    }
}

export default EventHandler2;

