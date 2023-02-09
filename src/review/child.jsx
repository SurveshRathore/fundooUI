import React from "react";


function ChildComponent (props){
    return(
        <div>
            <button onClick={()=>  props.parentHandler('hello')}>Click</button>
        </div>
    )
}

export default ChildComponent