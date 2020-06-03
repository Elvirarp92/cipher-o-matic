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
            .then((result) => this.props.renderCypherText(result.data.message))
            .catch((err) => console.log(err))
          break
      }
    })
  }

  render() {
    return (
      <Form.Group as='section'>
        <Form.Control as='textarea' name='text' onChange={this.handleChange} />
        <Form.Text className='text-muted'>
          Please only input Latin characters without diacritics or spaces.
        </Form.Text>
        <div className='options-container'>
          <Form.Control as='select' name='cipher' onChange={this.handleChange}>
            <option value='caesar'>Caesar cipher</option>
          </Form.Control>
          <Form.Control
            as='input'
            type='number'
            name='factor'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
      </Form.Group>
    )
  }
}

export default InputForm