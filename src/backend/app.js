const app = require('express')()

const { arrow } = require('./utils/format.js')

// Start application router
require('./router')(app)

const port = process.env.CONFIG_PORT || 8080

// Start server
app.listen(port, () => {
  console.log(`${arrow()} Server is now listening on port ${port}`)
})
