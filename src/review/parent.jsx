import React, { useState } from "react";
import ChildComponent from "./child";

const listenToParent=(ch)=> {
    console.log(ch)
}
function ParentComponent (){

    const childHandler = (childMessage) => {
        
        console.log(childMessage)
        alert(`${childMessage}`)
    }
    return(
        <div>
            <ChildComponent parentHandler={childHandler}/>
             {/* <Child listenToParent={listenToParent}/> */}
        </div>
    )
}

export default ParentComponent