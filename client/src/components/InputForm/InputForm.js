import React, { Component } from 'react'
import CipherService from './../../services/ciphers.service'

import Form from 'react-bootstrap/Form'

import './InputForm.css'

class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      cipher: 'caesar',
      factor: 0,
      direction: 'encryption',
    }

    this.cipherService = new CipherService()
  }

  handleChange = (e) => {
    let { value, name } = e.target
    if (name === 'factor') {
      value = parseInt(value)
    }
    this.setState({ [name]: value }, () => {
      switch (this.state.cipher) {
        case 'caesar':
          this.cipherService
            .caesar(this.state)
            .then((result) => this.props.renderCipherText(result.data))
            .catch((err) => console.log(err))
          break
        default:
          break
      }
    })
  }

  render() {
    return (
      <Form.Group as='section'>
        <Form.Control as='textarea' name='text' onChange={this.handleChange} />
        <Form.Text className='text-muted'>
          Please only input Latin characters (without diacritics), spaces, periods, commas,
          apostrophes, exclamation or interrogation signs.
        </Form.Text>
        <div className='options-container'>
          <Form.Control as='select' name='cipher' onChange={this.handleChange} className='cipher'>
            <option value='caesar'>Caesar cipher</option>
          </Form.Control>
          <Form.Control
            as='input'
            type='number'
            name='factor'
            min='0'
            max='25'
            value={this.state.value}
            onChange={this.handleChange}
            className='factor'
          />
        </div>
        <div className='options-container'>
          <Form.Control
            as='select'
            name='direction'
            onChange={this.handleChange}
            className='direction'>
            <option value='encryption'>Plaintext -> Ciphertext</option>
            <option value='decryption'>Ciphertext -> Plaintext</option>
          </Form.Control>
        </div>
      </Form.Group>
    )
  }
}

export default InputForm
