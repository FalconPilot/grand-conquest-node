const fs = require('fs-extra')

module.exports = (app) => {
  app.get('/', (req, res) => {
    fs.readFile(`${process.env.FRONT_PATH}/index.html`, 'utf-8')
      .then(contents => res.send(contents))
  })

  app.get('/app/index.js', (req, res) => {
    res.send('console.log(\'YAY !\')')
  })
}
