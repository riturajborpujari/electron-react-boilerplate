import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const { ipcRenderer } = window.require('electron');

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: ''
        }

        ipcRenderer.on('asynchronous-reply', (event, data) => {
            data = JSON.parse(data)

            console.log('Asynchronous reply received')
            console.log('Data: ', data)
        })
    }

    loadMessage = () => {
        let message = ipcRenderer.sendSync('synchronous-message', 'GET')
        ipcRenderer.send('asynchronous-message', JSON.stringify({
            method: 'GET',
            profileId: 1
        }))

        if (message !== null)
            this.setState({ message })
    }



    render() {
        let { message } = this.state
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React/Electron</h2>
                </div>
                <p className="App-intro">
                    Hello Electron!
                </p>

                {
                    message === '' ?
                        <button onClick={this.loadMessage}>Load message</button> :
                        <span>Message from main process: {message}</span>
                }
            </div>
        );
    }
}

export default App;
