//it's my first example of props

import  React  from 'react';


// const JusticeLeague = (props) => {
//    return  <h1>{props.name} or what should I say {props.superHeroName} I am your big fan !</h1>
// }

// const JusticeLeague = (props) => {
//    return  (
//     <div>
//         <h1>{props.name} or what should I say {props.superHeroName} I am your big fan !</h1>
//         {props.children}
//     </div>
//    )
// }

const JusticeLeague = ({name,superHeroName,children}) => {
   //const {name,superHeroName,children} = props
   return  (
    <div>
        <h1>{name} or what should I say {superHeroName} I am your big fan !</h1>
        {children}
    </div>
   )
}


export default JusticeLeague