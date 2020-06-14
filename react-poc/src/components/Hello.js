import React from 'react' ;

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Mr DJ mera gaana please hai !!</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id:'randomId'},
        React.createElement(
            'h1',
            null,
            'Hello Mr DJ mera gaana please hai !!'
        )
    )
}


export default Hello ;
