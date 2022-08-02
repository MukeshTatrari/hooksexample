import React,{memo} from 'react'

function Display(props) {
    console.log("calling dispaly ::: ");
    return (
        <div> <h1>Render Count: {props.count}</h1></div>
    )
}

export default memo(Display)