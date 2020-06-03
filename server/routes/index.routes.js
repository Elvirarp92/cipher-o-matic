const express = require('express')
const router = express.Router()
const { caesar } = require('./../configs/functions.config')

router.post('/caesar', (req, res, next) => {
  const text = req.body.text
  const factor = req.body.factor
  const direction = req.body.direction

  if (/^[a-zA-Z,.!?'\s]*$/.test(text) === false) {
    res.json({
      error: 'Your text contains forbidden characters! Please use only letters from A to Z, commas, periods, apostrophes, interrogation and exclamation.',
    })
  } else {
    res.json({ message: caesar(text, factor, direction) })
  }
})

module.exports = router
