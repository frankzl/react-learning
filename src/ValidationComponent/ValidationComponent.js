import React from 'react'

const valComp = (props) => {
    let short = (props.len < 5) ? <p>text too short</p> : null
    let long = (props.len > 10) ? <p>text too long</p> : null
    return <div>
        {short}
        {long}
    </div>
}

export default valComp