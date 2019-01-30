const fs = require('fs-extra')

const basePath = `${__dirname}/../../..`

module.exports = (app) => {
  app.get('/', (req, res) => {
    fs.readFile(`${basePath}/${process.env.FRONT_PATH}/index.html`, 'utf-8')
      .then(contents => {
        res.send(contents)
      })
  })

  app.get(/\/app\.(.+)\.js/, (req, res) => {
    const slug = req.params[0]
    fs.readFile(`${basePath}/${process.env.FRONT_PATH}/app.${slug}.js`, 'utf-8')
      .then(contents => {
        res.send(contents)
      })
  })

  app.get('/app/index.js', (req, res) => {
    fs.readFile(`${basePath}/${process.env.SCRIPT_PATH}/index.js`, 'utf-8')
      .then(contents => {
        res.send(contents)
      })
  })
}
