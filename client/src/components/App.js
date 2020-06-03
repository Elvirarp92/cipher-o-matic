import React, { Component } from 'react'

import InputForm from './InputForm/InputForm'

import Alert from 'react-bootstrap/Alert'

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
    console.log(output)
    stateCopy.message = output.message
    stateCopy.error = output.error

    this.setState(stateCopy)
  }

  render() {
    return (
      <main>
        <h1>Cipher-O-Matic</h1>
        <p>Encrypt and decrypt text with classic algorithms!</p>
        {this.state.error && <Alert variant='warning'>{this.state.error}</Alert>}
        <InputForm renderCypherText={this.renderCypherText} />
        <p className='output'>{this.state.message}</p>
      </main>
    )
  }
}

export default App
