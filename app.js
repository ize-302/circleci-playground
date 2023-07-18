const express = require('express')
const app = express()

app.get('/api/hello-world', (req, res) => {
  res.status(200).json({ success: 'It works' })
})

app.listen(3000)

module.exports = app