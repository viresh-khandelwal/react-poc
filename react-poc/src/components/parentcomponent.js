import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class Parentcomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    greetHandler(greetMessage){
        alert(greetMessage)
    }

    giftsHandler(){
        alert("arre beta iske kya zarurat thi !!")
    }

    render() {
        return (
            <div>
             <div>Shishir Niwas !! Welcome Home !!</div>
             <ChildComponent greet = {this.greetHandler} giveGifts = {this.giftsHandler}/>
            </div>
        );
    }
}

export default Parentcomponent;