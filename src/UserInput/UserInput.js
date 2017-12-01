import React, {Component} from 'react'

import './UserInput.css'

class UserInput extends Component {

    render(){
        return        (
            <input className="UserInput" onChange={this.props.changed} value={this.props.username}/>
        )
    }

}

export default UserInput