const express = require('express')
const router = express.Router()
const { caesar } = require('./../configs/functions.config')

router.post('/plaintext-to-caesar', (req, res, next) => {
  const plaintext = req.body.text
  const factor = parseInt(req.body.factor)

  if (/^[a-zA-Z\s]*$/.test(plaintext) === false) {
    res.json({
      error: 'Your text contains forbidden characters! Please use only letters from A to Z',
    })
  } else {
    res.json({ message: caesar(plaintext, factor) })
  }
})

module.exports = router
