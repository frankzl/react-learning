import React from 'react'

const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
}

const charComp = (props)=> {
    return <div onClick={props.deleteChar} style={style}>{props.letter}</div>
}
export default charComp