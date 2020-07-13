import React , { Component } from 'react'

class Avengers extends Component{
    render(){
        const {name,superHeroName} = this.props;
        return <div className="dummyClass">
                    <h1>
                        {name} or what should I say {superHeroName} I am your big fan !
                    </h1>
                </div>
    }
}

export default Avengers;