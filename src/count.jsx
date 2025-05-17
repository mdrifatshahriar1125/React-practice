import { useState } from "react";

export default function Counter(){
const stylecounter={
    border:'10px slid yellow',
    borderRadius:'10px'
}

const [count,setCount]=useState(0);
const countingclickvalue=()=>{
    const newcount=count+1;
    setCount(newcount);
}

    return(
        <div style={stylecounter}>
            <h3>Count of clicked in this button : {count}</h3>
            <button onClick={countingclickvalue}>click</button>
        </div>
    );
}