//event handling
import React from 'react';
function EventHandler1() {
    
    function handleClick(){
        alert("jaan nisaar hai , jaan nisaar !");
    }
    
    return (
        <button onClick={handleClick}>get surprised !</button>
    );
}

export default EventHandler1;