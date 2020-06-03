import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'

import './InputForm.css'

class InputForm extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Form.Group as='section'>
        <Form.Control as='textarea' name='text' />
        <Form.Text className='text-muted'>
          Please only input Latin characters without diacritics or spaces.
        </Form.Text>
        <div className='options-container'>
          <Form.Control as='select' name='cipher'>
            <option value='caesar'>Caesar cipher</option>
          </Form.Control>
          <Form.Control as='input' type='number' name='factor' />
        </div>
      </Form.Group>
    )
  }
}

export default InputForm
