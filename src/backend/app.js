const app = require('express')()

const { arrow } = require('./utils/format.js')

// Start application router
require('./router')(app)

// Start server
app.listen(process.env.CONFIG_PORT, () => {
  console.log(`${arrow()} Server is now listening on port ${process.env.CONFIG_PORT}`)
})
