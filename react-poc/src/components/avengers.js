import React , { Component } from 'react'

class Avengers extends Component{
    render(){
        return <div className="dummyClass">
                    <h1>
                        {this.props.name} or what should I say {this.props.superHeroName} I am your big fan !
                    </h1>
                </div>
    }
}

export default Avengers;