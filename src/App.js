import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
import './App.css';
import Radium, {StyleRoot} from 'radium'

class App extends Component {

    state = {
        text: 'Test'
    }

    eventHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    toggleView = (event) => {
        const temp = this.state.view
        this.setState({
            view: !temp
        })
    }

    onInputChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    deleteChar( index ) {
        let updatedText = this.state.text.slice(0, index)
        if (this.state.text.length > index+1){
            updatedText += this.state.text.slice(index+1)
        }
        console.log(index)
        this.setState ( {
            text: updatedText
        })
    }

    render() {

        const style = {
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            },
            '@media (min-width: 500px)': {
                width: '450px'
            }
        }

        return (

            <div>
                <StyleRoot>
                <button style={style}>Test</button>
                <input type="text" value={this.state.text} onChange={this.onInputChange}/>
                <p>{this.state.text.length + 'letters'}</p>
                <ValidationComponent len={this.state.text.length}></ValidationComponent>
                {
                    this.state.text.split('').map(
                        (letter, index) => {
                            return <CharComponent deleteChar={()=>this.deleteChar(index)} letter={letter} key={index}/>
                        }
                    )
                }
                </StyleRoot>
            </div>
        );
    }
}

export default Radium(App);
