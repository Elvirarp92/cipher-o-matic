import React, { Component } from 'react'

import InputForm from './InputForm/InputForm'

import Alert from 'react-bootstrap/Alert'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      message: '',
      error: '',
    }
  }

  renderCypherText = (output) => {
    const stateCopy = { ...this.State }
    stateCopy.message = output.message
    stateCopy.error = output.error

    this.setState(stateCopy)
  }

  render() {
    return (
      <main>
        <h1>Cipher-O-Matic</h1>
        <p>Encrypt and decrypt text with classic algorithms!</p>
        {this.state.error && (
          <Alert variant='warning' className='alert'>
            {this.state.error}
          </Alert>
        )}
        <InputForm renderCypherText={this.renderCypherText} />
        <p className='output'>{this.state.message}</p>
      </main>
    )
  }
}

export default App
