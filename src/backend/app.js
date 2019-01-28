const app = require('express')()

const Format = require('./utils/format.js')

// Start server
app.listen(process.env.CONFIG_PORT, () => {
  console.log(`${Format.arrow()} Server is now listening on port ${process.env.CONFIG_PORT}`)
})
