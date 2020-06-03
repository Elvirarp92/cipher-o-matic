const express = require('express')
const router = express.Router()
const { caesar } = require('./../configs/functions.config')

router.post('/caesar', (req, res, next) => {
  const text = req.body.text
  const factor = req.body.factor
  console.log(`${text} - ${factor}`)

  if (/^[a-zA-Z\s]*$/.test(text) === false) {
    res.json({
      error: 'Your text contains forbidden characters! Please use only letters from A to Z.',
    })
  } else {
    res.json({ message: caesar(text, factor) })
  }
})

module.exports = router
