import React from 'react'

const style = {
    boxShadow: '1px 1px 1px blue',
    margin: '10px'
}

const UserOutput = (props) => {
    return (
        <div>
            <p style={style}>Username is {props.username}</p>
            <p style={style}>P1</p>
        </div>
    )
}

export default UserOutput