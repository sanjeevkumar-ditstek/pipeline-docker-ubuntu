const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({api: "Api Is Running... Version 3"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
