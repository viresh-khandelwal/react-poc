//it's my first example of props

import  React  from 'react';


// const JusticeLeague = (props) => {
//    return  <h1>{props.name} or what should I say {props.superHeroName} I am your big fan !</h1>
// }

const JusticeLeague = (props) => {
   return  (
    <div>
        <h1>{props.name} or what should I say {props.superHeroName} I am your big fan !</h1>
        {props.children}
    </div>
   )
}

export default JusticeLeague