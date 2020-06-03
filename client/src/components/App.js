import React, { Component } from 'react'

import InputForm from './InputForm/InputForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      message: "",
      error: "",
    }
  }

  renderCypherText = (message) => {
    console.log(message)
  }

  render() {
    return (
      <main>
        <h1>Cipher-O-Matic</h1>
        <p>Encrypt and decrypt text with classic algorithms!</p>
        <InputForm renderCypherText={this.renderCypherText} />
        <p className="output">{this.state.message}</p>
      </main>
    )
  }
}

export default App
