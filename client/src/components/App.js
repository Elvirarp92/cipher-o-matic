import React, { Component } from 'react'

import InputForm from './InputForm/InputForm'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <main>
        <h1>Cipher-O-Matic</h1>
        <p>Encrypt and decrypt text with classic algorithms!</p>
        <p>Please only input Latin characters without diacritics or spaces.</p>
        <InputForm />
      </main>
    )
  }
}

export default App
