import React, {Component} from 'react'

import MySTMInitState from './MySTMInitState'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = new MySTMInitState(props)
    }

    handleClick = () => {
        const nextState = this.state.handleToggleButton()
        if (nextState) {
            this.setState(nextState)
        }
    }

    render() {

        return (
            <ul>
                <li>aaa</li>
                <li>bbb</li>
                <li onClick={this.handleClick}>ccc</li>
                <li>ddd</li>
            </ul>
        )
    }
}

export default App